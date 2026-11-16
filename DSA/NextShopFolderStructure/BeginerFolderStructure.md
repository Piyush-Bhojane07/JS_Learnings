NexShop/
│
├── android/
├── ios/
│
├── src/
│   │
│   ├── app/
│   │   ├── screens/
│   │   │   └── SplashScreen.tsx
│   │   │
│   │   └── navigation/
│   │       ├── RootNavigator.tsx
│   │       └── MainTabNavigator.tsx
│   │
│   ├── features/
│   │   │
│   │   ├── onboarding/
│   │   │   └── screens/
│   │   │       └── OnboardingScreen.tsx
│   │   │
│   │   ├── auth/
│   │   │   └── screens/
│   │   │       ├── LoginScreen.tsx
│   │   │       └── RegisterScreen.tsx
│   │   │
│   │   ├── feed/
│   │   │   ├── screens/
│   │   │   │   ├── FeedScreen.tsx
│   │   │   │   └── ProductDetailScreen.tsx
│   │   │   └── components/
│   │   │       └── ProductCard.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── screens/
│   │   │       └── CartScreen.tsx
│   │   │
│   │   └── profile/
│   │       └── screens/
│   │           └── ProfileScreen.tsx
│   │
│   └── shared/
│       ├── ui/
│       │   ├── Button.tsx
│       │   └── Input.tsx
│       │
│       ├── mocks/
│       │   └── products.ts
│       │
│       └── types/
│           └── product.ts
│
├── App.tsx
├── package.json
└── tsconfig.json



/////


Splash Screen

App launch and initial loading

Onboarding Screen

Introduces the app to a new user

Login / Register

User authentication

Main App — Feed, Cart, Profile

Shopping experience