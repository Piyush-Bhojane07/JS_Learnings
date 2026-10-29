- Screen / Component / Type: PascalCase → HomeScreen, ProductCard, Product
- Function / Variable / Hook: camelCase → getProducts(), productList, useProducts()
- Folder: lowercase → screens, components, hooks
- Constant: UPPER_SNAKE_CASE → API_BASE_URL
- File name: Match the type → HomeScreen.tsx, useProducts.ts, formatPrice.ts

  Shortcut: Components start with Capital letters; functions and variables start with small letters.

src/
├── components/
│ ├── ProductCard.tsx
│ ├── SearchBar.tsx
│ └── LoadingIndicator.tsx
│
├── screens/
│ ├── HomeScreen.tsx
│ ├── ProductDetailsScreen.tsx
│ ├── CartScreen.tsx
│ └── ProfileScreen.tsx
│
├── navigation/
│ └── AppNavigator.tsx
│
├── hooks/
│ └── useProducts.ts
│
├── services/
│ └── productService.ts
│
├── types/
│ └── product.ts
│
├── utils/
│ └── formatPrice.ts
│
└── constants/
└── api.ts


================================

1. function funName() {} — Creates a normal function; use export separately if you want to use it in another file.

2. export default function funName() {} — Creates and exports a function in one step; export default lets another file import it easily.

3. export default const funName = () => {} — ❌ Invalid syntax; write const funName = () => {}; export default funName; instead.