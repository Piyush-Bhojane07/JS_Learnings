src/
├── components/
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   └── LoadingIndicator.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── ProductDetailsScreen.tsx
│   ├── CartScreen.tsx
│   └── ProfileScreen.tsx
│
├── navigation/
│   └── AppNavigator.tsx
│
├── hooks/
│   └── useProducts.ts
│
├── services/
│   └── productService.ts
│
├── types/
│   └── product.ts
│
├── utils/
│   └── formatPrice.ts
│
└── constants/
    └── api.ts




    File: HomeScreen.tsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to NexShop</Text>
    </View>
  );
}

File name: HomeScreen.tsx
Function name: HomeScreen
Component name: HomeScreen
Folder name: screens

camelCase
First word starts lowercase; subsequent words start uppercase.

productList

getProducts()

isLoading


PascalCase
Every word starts with an uppercase letter.

HomeScreen

ProductCard

ProductDetailsScreen


snake_case
Words are separated by underscores.

product_list

get_products

Generally avoid this style for JavaScript and React Native variables and functions.


kebab-case
Words are separated by hyphens.

product-list

Often used for URLs and some file or directory naming systems, but avoid it for React component files.

// Component: PascalCase
function ProductCard() {}

// Regular function: camelCase
function getProducts() {}

// Event handler: camelCase
function handleSearch() {}

// Boolean state: camelCase
const [isLoading, setIsLoading] = useState(false);

// Custom hook: camelCase starting with "use"
function useProducts() {}


Screens and reusable components → PascalCase



Functions, variables and hooks → camelCase



Folders → lowercase, such as screens, components, services



Constants → UPPER_SNAKE_CASE when they represent fixed configuration values



TypeScript types and interfaces → PascalCase