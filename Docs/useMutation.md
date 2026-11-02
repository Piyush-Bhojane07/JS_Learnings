# useMutation — Complete Study Notes (TanStack Query v5)

> Target: React Native Developer interviews, 6–12 LPA, ~1–3 yrs experience.
> Context: NexShop (feature-based architecture, Zustand + React Query + react-hook-form + zod).

---

## PART 1 — CONCEPT EXPLANATION

**What it is**
`useMutation` is a hook from TanStack Query (React Query) used to **create, update, or delete data** on a server — anything that *changes* backend state.

- `useQuery` → **reading** data (GET). "Give me the product list."
- `useMutation` → **writing** data (POST/PUT/PATCH/DELETE). "Log me in", "add to cart", "update profile".

**Why it exists**
Before React Query, every API call required hand-written boilerplate:

```ts
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

const submit = async () => {
  try {
    setLoading(true);
    const res = await api();
    setData(res);
  } catch (e) {
    setError(e);
  } finally {
    setLoading(false);
  }
};
```

You repeated `loading`/`error`/`data` in every screen. `useMutation` packages all of it.

**What problem it solves**
1. Eliminates boilerplate (no manual loading/error/data state).
2. Standardizes the async lifecycle: `isPending`, `isError`, `isSuccess`, `error`, `data`.
3. Lifecycle callbacks: `onSuccess`, `onError`, `onSettled`.
4. Cache sync via `queryClient.invalidateQueries`.
5. Optimistic updates with rollback.

**When to use it**
Any action that changes server data: login, register, logout, add/remove cart, update quantity, update profile, submit review, place order, like a post.

**When NOT to use it**
- Reading data → use `useQuery`.
- Pure client-side state (modal open, selected tab, form values, `isPasswordVisible`) → `useState` / Zustand / react-hook-form.
- No backend involved → not needed.

---

## PART 2 — VISUAL MENTAL MODEL

```
User taps "Login" button
        ↓
mutate(credentials)        ← you trigger the mutation
        ↓
status = "pending"         ← isPending = true (show spinner)
        ↓
mutationFn runs            ← loginApi(email, password)
        ↓
   ┌────────────┴────────────┐
   ↓                         ↓
SUCCESS                    FAILURE
status="success"          status="error"
isSuccess=true            isError=true
data = response           error = errorObject
onSuccess(data) fires     onError(error) fires
   ↓                         ↓
   └────────────┬────────────┘
                ↓
       onSettled() fires (always)
                ↓
        Component re-renders
                ↓
            UI updates (navigate / show error)
```

Key ideas:
- A mutation is a **state machine**: `idle → pending → success | error`.
- **Mutations do NOT run on mount.** They fire only when you call `mutate()` (unlike queries).

---

## PART 3 — SYNTAX BREAKDOWN

> v5 uses `isPending` (was `isLoading` in v4 — common interview gotcha).

### 1. Basic Example
```tsx
import { useMutation } from '@tanstack/react-query';
import { login } from '@features/auth/api/fakeAuthApi';

function LoginButton() {
  const mutation = useMutation({
    // mutationFn = async work; whatever you pass to mutate() arrives here
    mutationFn: (vars: { email: string; password: string }) =>
      login(vars.email, vars.password),
  });

  return (
    <Button
      title={mutation.isPending ? 'Logging in...' : 'Login'} // reactive UI
      disabled={mutation.isPending}                          // prevent double taps
      onPress={() => mutation.mutate({ email: 'a@b.com', password: 'password' })}
    />
  );
}
```
- `useMutation({...})` — creates the mutation, returns an object.
- `mutationFn` — **required** async fn; must return a Promise.
- `mutation.isPending` — true while in flight.
- `mutation.mutate(vars)` — fires it; `vars` go to `mutationFn`. Fire-and-forget (returns void).

### 2. Intermediate Example (callbacks)
```tsx
const mutation = useMutation({
  mutationFn: (vars: LoginData) => login(vars.email, vars.password),

  // success only: data = mutationFn return, vars = what you passed to mutate()
  onSuccess: (data, vars) => {
    setAuth(data.accessToken, data.user);
    navigation.replace('Home');
  },

  // error only
  onError: (error: any) => {
    Alert.alert('Login failed', error.message ?? 'Try again');
  },

  // always (cleanup / analytics)
  onSettled: () => console.log('Login attempt finished'),
});

const onSubmit = (form: LoginData) => mutation.mutate(form);
```

### 3. Production Example (custom hook + cache invalidation)
```tsx
// src/features/cart/hooks/useAddToCart.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCartApi } from '../api/cartApi';

export function useAddToCart() {
  const queryClient = useQueryClient(); // access global cache

  return useMutation({
    mutationFn: (productId: string) => addToCartApi(productId),
    onSuccess: () => {
      // mark cart data stale → auto refetch → badge/count stay in sync
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error) => reportError(error), // Sentry etc.
  });
}
```
```tsx
function AddToCartButton({ productId }: { productId: string }) {
  const { mutate, isPending } = useAddToCart();
  return <Button title="Add to Cart" disabled={isPending} onPress={() => mutate(productId)} />;
}
```

**`mutate` vs `mutateAsync`**
```ts
mutation.mutate(vars);            // fire-and-forget, no Promise, errors via onError
await mutation.mutateAsync(vars); // returns Promise; YOU must try/catch
```
Use `mutateAsync` for multi-step inline flows. Always wrap in try/catch or you get unhandled rejections.

---

## PART 4 — COMMON MISTAKES

**Beginner**
1. Using `isLoading` in v5 (it's `isPending`) → spinner never shows.
2. Calling `mutate()` during render → infinite fires. Put it in event handlers.
3. Confusing query vs mutation (reads = query, writes = mutation).
4. Expecting mutations to auto-run on mount.

**Intermediate**
1. Forgetting `invalidateQueries` → stale UI after a successful write.
2. Putting navigation/side-effects in `mutationFn` (keep it pure: API call + return data; side-effects go in `onSuccess`).
3. `mutateAsync` without try/catch → unhandled rejection / red screen.
4. Driving critical logic from `mutation.data` when the component may unmount; prefer `onSuccess`.

**Production**
1. Optimistic update without rollback in `onError` (via `context`).
2. Race conditions / double-submit — guard with `disabled={isPending}`.
3. Inconsistent error shapes — NexShop's `login` throws `{ code, message }` but `register` throws `new Error(...)`; `onError` must handle both.
4. Duplicating toast/analytics in every component instead of centralizing in the custom hook.

---

## PART 5 — BASIC PRACTICE QUESTIONS (Easy)

1. (Concept) One-sentence difference between `useQuery` and `useMutation`?
2. (MCQ) v5 in-progress flag? a) `isLoading` b) `isFetching` c) `isPending` d) `isRunning`
3. (Concept) Does `useMutation` run automatically on mount? Why/why not?
4. (Output) What logs and in what order?
   ```tsx
   const m = useMutation({
     mutationFn: async () => 'done',
     onSuccess: () => console.log('A'),
     onSettled: () => console.log('B'),
   });
   // user taps → m.mutate()
   ```
5. (MCQ) Where to put `navigation.replace('Home')` after login? a) mutationFn b) onSuccess c) render d) onError
6. (Coding) Minimal `useMutation` calling `logoutApi()` (no args), log `"bye"` on success.
7. (Concept) `mutate` vs `mutateAsync`?
8. (Output) Login button tapped twice fast, no `disabled` guard — how many runs, what UX problem?

---

## PART 6 — INTERMEDIATE PRACTICE QUESTIONS

1. (Debugging) Add-to-cart succeeds but cart count stays old until refresh. What's missing? Fix it.
2. (Code Reading) Risk in:
   ```tsx
   const onSubmit = async (form) => {
     const res = await mutation.mutateAsync(form);
     setAuth(res.accessToken, res.user);
   };
   ```
3. (Architecture) Mutation logic in screen vs custom hook (`useLogin`)? Justify for feature-based architecture.
4. (Real-world) API throws `{ code, message }` sometimes and `new Error(...)` other times. Write a safe `onError`.
5. (Refactoring) Convert to `useMutation`:
   ```tsx
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const submit = async (data) => {
     setLoading(true);
     try { await updateProfile(data); }
     catch (e) { setError(e); }
     finally { setLoading(false); }
   };
   ```
6. (Scenario) Optimistic update for a "like" button — which callbacks, what's in `context`?
7. (Debugging) `isPending` always false during request (v5). Likely wrong code?
8. (Architecture) With Zustand + React Query, after login where does the token go and why?

---

## PART 7 — REACT NATIVE / ECOSYSTEM USAGE

- **React Native** — bind `isPending` to `<Button disabled>` + `<ActivityIndicator>`. UI-agnostic.
- **React** — identical API.
- **Axios** — lives *inside* `mutationFn`: `mutationFn: (d) => axios.post('/login', d).then(r => r.data)`. React Query = state, Axios = transport.
- **React Query** — `useMutation` is React Query; pairs with `useQuery` + `invalidateQueries`.
- **Redux Toolkit** — RTK Query offers the same via `createApi` + auto-generated `useLoginMutation()`. Pick one, not both. Heavy Redux app → RTK Query; else TanStack is lighter.
- **Feature-Based Architecture**
  ```
  features/auth/
    api/fakeAuthApi.ts        ← mutationFn (transport)
    hooks/useLogin.ts         ← useMutation wrapper (server-state logic)
    screens/LoginScreen.tsx   ← UI only
    state/authFlowStore.ts    ← Zustand (session/client state)
  ```

---

## PART 8 — NEXSHOP APPLICATION

**Auth (login) — replacing the manual hook**
```ts
// src/features/auth/hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '@features/auth/api/fakeAuthApi';
import { useAuthFlowStore } from '@features/auth/state/authFlowStore';

export function useLogin() {
  const setAuth = useAuthFlowStore((s) => s.setAuth);
  return useMutation({
    mutationFn: (vars: { email: string; password: string }) =>
      loginApi(vars.email, vars.password),
    onSuccess: (res) => setAuth(res.accessToken, res.user),
  });
}
```
```tsx
// LoginScreen.tsx (with react-hook-form)
const { mutate, isPending, error } = useLogin();
const onSubmit = (form: LoginData) => mutate(form);
// <Button disabled={isPending} onPress={handleSubmit(onSubmit)} />
```
Division of labor: **React Query owns the request lifecycle; Zustand owns the persisted session** (`token`, `user`, `isAuthenticated`).

**Feed** — list = `useQuery`; like/follow = mutation with `invalidateQueries(['feed'])`. Good optimistic-update candidate.

**Cart** — textbook case:
```ts
useMutation({
  mutationFn: (item) => addToCartApi(item),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
});
```
Keeps badge, cart screen, totals in sync automatically.

**Profile** — update with direct cache write:
```ts
useMutation({
  mutationFn: (data) => updateProfileApi(data),
  onSuccess: (updated) => queryClient.setQueryData(['profile'], updated),
});
```
`setQueryData` updates cache without a refetch — instant, network-free.

---

## PART 9 — INTERVIEW QUESTIONS

1. What is `useMutation`, how does it differ from `useQuery`?
2. Why don't mutations run automatically like queries?
3. What does `mutationFn` receive and return?
4. `mutate` vs `mutateAsync` — when each?
5. Role of `onSuccess`, `onError`, `onSettled`?
6. What is `invalidateQueries` and why critical after a mutation?
7. v5 loading flag name and what changed from v4?
8. Explain optimistic updates and rollback with `onError`/`context`.
9. With Redux/Zustand + React Query, where does server data vs session state belong?
10. Mutation that updates several caches + navigates while preventing double submit — how?

---

## PART 10 — INTERVIEW ROUND SIMULATION (do live)

5 questions, one at a time, scored /10 with ideal answers + follow-ups. Sample Q1:

> Build the NexShop login with `useMutation` instead of a manual async fn. Where does the API call go, where is the token saved, and how does the button show a spinner?

(Run this interactively in chat for scoring.)

---

## PART 11 — NOTES

### 📘 Theory Note
`useMutation` is the TanStack Query hook for **server-state writes** (create/update/delete). It returns a state object (`isPending`, `isError`, `isSuccess`, `data`, `error`) plus triggers (`mutate`, `mutateAsync`), and lifecycle callbacks (`onSuccess`, `onError`, `onSettled`).

**Internals:** it's a state machine — `idle → pending → success | error`. Unlike `useQuery`, it never runs automatically; it fires only on `mutate()`. On settle it re-renders the component with the new status. It can synchronize the global cache through `useQueryClient` (`invalidateQueries`, `setQueryData`).

**Key rules:**
- `mutationFn` should *only* do the API call and return data — keep it pure.
- Side effects (navigation, store writes, toasts, cache invalidation) go in callbacks.
- v5 = `isPending` (v4 = `isLoading`).
- `mutateAsync` requires manual try/catch.
- Guard double-submit with `disabled={isPending}`.

**Ecosystem fit:** server state lives in React Query; client/session state (auth token, UI flags) lives in Zustand/useState. Axios/fetch is just transport inside `mutationFn`. RTK Query is the Redux-world equivalent.

**Docs highlights:** mutations support `onMutate` for optimistic updates (returns `context` consumed by `onError`/`onSettled` for rollback); callbacks exist both on the hook and per-call in `mutate(vars, { onSuccess })`; `retry` is configurable.

### 💡 Example Note — NexShop Login

❌ **Common Approach** (manual async — what most beginners do)
```ts
// hooks/useAuth.ts — manual lifecycle, no standardization
export const useAuth = () => {
  const { setAuth } = useAuthFlowStore();
  const login = async (data: LoginData) => {
    // no isPending → button can't easily show a spinner or block double taps
    // no standardized error state → each screen reinvents try/catch
    const response = await loginApi(data.email, data.password);
    setAuth(response.accessToken, response.user); // side effect tangled with call
    return response;
  };
  return { login };
};
```
Why it's problematic: no built-in `isPending`/`error`, no cache integration, double-submit possible, boilerplate repeated per feature, harder to test.

✅ **Best Practice Approach**
```ts
// hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '@features/auth/api/fakeAuthApi';
import { useAuthFlowStore } from '@features/auth/state/authFlowStore';

export function useLogin() {
  const setAuth = useAuthFlowStore((s) => s.setAuth); // selector = fewer re-renders

  return useMutation({
    // pure: only the API call
    mutationFn: (vars: { email: string; password: string }) =>
      loginApi(vars.email, vars.password),

    // side effect isolated: persist session on success
    onSuccess: (res) => setAuth(res.accessToken, res.user),
  });
}
```
```tsx
// LoginScreen.tsx
const { mutate, isPending, error } = useLogin();
// <Button disabled={isPending} onPress={handleSubmit((f) => mutate(f))} />
// {error && <Text>{(error as any).message}</Text>}
```
Why it's better: `isPending` for free (spinner + double-submit guard), standardized `error`, pure `mutationFn`, side effect isolated in `onSuccess`, reusable + testable, ready for cache `invalidateQueries`.

---

## PART 12 — REVISION NOTES (10-minute refresh)

- **What:** TanStack Query hook for **writes** (create/update/delete). Reads = `useQuery`.
- **Doesn't auto-run.** Fires on `mutate()` only.
- **Returns:** `{ mutate, mutateAsync, isPending, isError, isSuccess, data, error, reset }`.
- **Config:** `{ mutationFn, onSuccess, onError, onSettled, onMutate, retry }`.
- **mutationFn:** receives `mutate()` arg, returns a Promise; keep it pure.
- **Callbacks:** `onSuccess(data, vars, ctx)` / `onError(err, vars, ctx)` / `onSettled` (always).
- **v5:** loading = `isPending` (NOT `isLoading`).
- **mutate** = fire-and-forget; **mutateAsync** = awaitable (needs try/catch).
- **Cache:** `useQueryClient()` → `invalidateQueries({ queryKey })` (refetch) or `setQueryData` (direct write).
- **Optimistic:** `onMutate` (update + return context) → `onError` rolls back from context → `onSettled` invalidates.
- **Double-submit guard:** `disabled={isPending}`.
- **NexShop:** server result → React Query; session token → Zustand. Login/cart/profile/like = mutations.
- **Trap answers:** "reads vs writes", "isPending in v5", "mutationFn stays pure, side-effects in onSuccess", "invalidateQueries keeps UI in sync".

---

## PART 13 — MASTERY CHECKLIST

- [ ] I can explain what `useMutation` is and how it differs from `useQuery`.
- [ ] I can implement a basic mutation from scratch (mutationFn + mutate).
- [ ] I know `isPending` (v5) and the v4→v5 change.
- [ ] I use `onSuccess`/`onError`/`onSettled` correctly and keep `mutationFn` pure.
- [ ] I can invalidate/update the cache after a mutation.
- [ ] I know `mutate` vs `mutateAsync` and when to use each.
- [ ] I can explain optimistic updates + rollback.
- [ ] I can place server state vs session state correctly (React Query vs Zustand).
- [ ] I can wrap mutations in a feature custom hook.
- [ ] I can answer the 10 interview questions confidently.

**Level guide:**
- Boxes 1–4 → **Beginner**
- Boxes 1–7 → **Intermediate**
- All 10 → **Interview Ready**
