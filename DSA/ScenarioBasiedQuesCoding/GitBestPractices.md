# Git Commit Messages — Professional Cheat Sheet

## 1. Commit Message Format

`type: short description`

Example:
`feat: add login screen`

## 2. Common Commit Types

- `feat` — Add a new feature
- `fix` — Fix a bug
- `refactor` — Improve code structure without changing behavior
- `docs` — Add or update documentation
- `style` — Formatting changes only; no logic changes
- `test` — Add or update tests
- `chore` — Maintenance tasks
- `perf` — Improve performance
- `build` — Change build configuration or dependencies
- `ci` — Update CI/CD configuration
- `revert` — Revert a previous commit

## 3. Professional Commit Message Examples

### JavaScript
- `feat: add JavaScript loop examples`
- `feat: implement star pattern printing`
- `fix: correct star pattern printing`
- `refactor: simplify loop logic`
- `docs: add JavaScript learning notes`
- `test: add tests for prime number function`

### React Native
- `feat: add login screen`
- `feat: implement user authentication`
- `fix: resolve navigation issue`
- `fix: handle API request errors`
- `refactor: extract reusable button component`
- `perf: optimize product list rendering`
- `style: update profile screen layout`
- `test: add login screen tests`

### API and State Management
- `feat: integrate product listing API`
- `feat: add TanStack Query for product fetching`
- `fix: handle expired access tokens`
- `refactor: move API logic into service layer`

### Project Maintenance
- `chore: update dependencies`
- `build: update Android build configuration`
- `ci: configure automated testing`
- `docs: update project setup instructions`

## 4. Git Commands

### Check status
`git status`

### Stage changes
`git add .`

### Commit changes
`git commit -m "feat: add JavaScript loop examples"`

### View commit history
`git log --oneline`

### Push changes
`git push`

### Complete workflow
`git add .`  
`git commit -m "feat: add JavaScript loop examples"`  
`git push`

## 5. Commit Message Rules

1. Use a clear type prefix.
2. Keep the subject concise, ideally under 72 characters.
3. Describe what changed.
4. Use an action-oriented phrase.
5. Avoid vague messages such as:
   - `updated code`
   - `changes`
   - `final commit`
   - `working fine`
   - `new update`

## 6. When to Use Each Type

- Added something new? Use `feat`.
- Fixed something broken? Use `fix`.
- Improved internal code structure? Use `refactor`.
- Changed documentation? Use `docs`.
- Changed formatting only? Use `style`.
- Added tests? Use `test`.
- Updated dependencies or project maintenance? Use `chore`.

## 7. Optional Scope

You can specify the part of the application affected:

`type(scope): description`

Examples:
- `feat(auth): add login screen`
- `fix(navigation): resolve back button issue`
- `refactor(api): simplify error handling`
- `test(cart): add cart calculation tests`

## 8. Important Distinction

A commit message documents a change; it does not prove that the code works. Test your changes before committing, and review `git status` to confirm which files will be included.

### Quick Reference

`feat:` New feature  
`fix:` Bug fix  
`refactor:` Code restructuring  
`docs:` Documentation  
`style:` Formatting  
`test:` Tests  
`chore:` Maintenance  
`perf:` Performance  
`build:` Build changes  
`ci:` CI/CD changes  
`revert:` Undo a previous commit
=================


## Professional Git Commit — One-Go Guide

### 1. Standard commit
```bash
git add .
git commit -m "feat: add JavaScript loop examples"
git push
```

### 2. Professional commit message format
```text
type(scope): short description
```

### 3. Examples

```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve star pattern printing"
git commit -m "refactor: simplify loop logic"
git commit -m "docs: update JavaScript notes"
git commit -m "test: add prime number tests"
git commit -m "chore: update project dependencies"
git commit -m "style: format JavaScript code"
git commit -m "perf: optimize product list rendering"
```

### 4. Commit with a detailed message
```bash
git add .
git commit -m "feat: add product listing screen" -m "Implement product cards and display product details from the API."
git push
```

### 5. Best practices
- Use `feat` for new features.
- Use `fix` for bug fixes.
- Use `refactor` for code improvements.
- Keep the first line short and clear.
- Explain why or what changed in the second paragraph when needed.
- Run tests before pushing.
- Use `git status` to check staged and unstaged changes.

### My current JavaScript practice commit
```bash
git add .
git commit -m "feat: add JavaScript loop and pattern exercises"
git push
```