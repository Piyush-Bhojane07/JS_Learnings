NexShop/
└── src/
    ├── app/
    │   ├── bootstrap/
    │   │   └── index.ts
    │   ├── navigation/
    │   │   ├── MainTabNavigator.tsx
    │   │   └── RootNavigator.tsx
    │   ├── providers/
    │   │   └── AppProviders.tsx
    │   ├── query/
    │   │   └── queryClient.ts
    │   └── store/
    │       └── rootStore.ts
    │
    ├── docs/
    │   ├── architecture-decisions.md
    │   ├── data-flow.md
    │   ├── dependency-rules.md
    │   ├── deps.txt
    │   ├── GUIDE.md
    │   ├── guide.txt
    │   ├── INFO.md
    │   ├── info.txt
    │   ├── mockApi.ts
    │   ├── nexshop_auth_flow_architecture.svg
    │   ├── nexshop_auth_flow_prototype.html
    │   ├── rn_dependency_graph.svg
    │   └── state-strategy.md
    │
    ├── features/
    │   ├── _rules.md
    │   │
    │   ├── auth/
    │   │   ├── index.ts
    │   │   ├── _rules.md
    │   │   ├── analytics/
    │   │   │   └── authAnalytics.ts
    │   │   ├── api/
    │   │   │   ├── fakeAuthApi.ts
    │   │   │   └── mapper.ts
    │   │   ├── components/
    │   │   │   ├── AuthForm.tsx
    │   │   │   ├── BiometricToggle.tsx
    │   │   │   └── PasswordInput.tsx
    │   │   ├── data/
    │   │   │   ├── useLoginMutation.ts
    │   │   │   └── useUserQuery.ts
    │   │   ├── domain/
    │   │   │   ├── entities.ts
    │   │   │   └── usecases/
    │   │   │       ├── loginUseCase.ts
    │   │   │       └── logoutUseCase.ts
    │   │   ├── hooks/
    │   │   │   ├── useAuth.ts
    │   │   │   └── useBiometric.ts
    │   │   ├── navigation/
    │   │   │   └── AuthNavigator.tsx
    │   │   ├── schemas/
    │   │   │   └── authSchemas.ts
    │   │   ├── screens/
    │   │   │   ├── AuthLoadingScreen.tsx
    │   │   │   ├── BiometricSetupScreen.tsx
    │   │   │   ├── ForgotPasswordScreen.tsx
    │   │   │   ├── LoginScreen.tsx
    │   │   │   ├── OTPScreen.tsx
    │   │   │   └── RegisterScreen.tsx
    │   │   ├── state/
    │   │   │   └── authFlowStore.ts
    │   │   └── __tests__/
    │   │
    │   ├── cart/
    │   │   ├── index.ts
    │   │   ├── _rules.md
    │   │   ├── analytics/
    │   │   │   └── cartAnalytics.ts
    │   │   ├── api/
    │   │   │   ├── fakeCartApi.ts
    │   │   │   └── mapper.ts
    │   │   ├── components/
    │   │   │   ├── AddressForm.tsx
    │   │   │   ├── CartItem.tsx
    │   │   │   ├── CheckoutStepIndicator.tsx
    │   │   │   ├── OrderSummary.tsx
    │   │   │   └── PaymentMethodSelector.tsx
    │   │   ├── data/
    │   │   │   ├── useAddressesQuery.ts
    │   │   │   ├── useAddToCartMutation.ts
    │   │   │   ├── useApplyCouponMutation.ts
    │   │   │   ├── useCartQuery.ts
    │   │   │   └── useCheckoutMutation.ts
    │   │   ├── domain/
    │   │   │   ├── entities.ts
    │   │   │   └── usecases/
    │   │   │       ├── addToCartUseCase.ts
    │   │   │       └── checkoutUseCase.ts
    │   │   ├── hooks/
    │   │   │   └── useCartSync.ts
    │   │   ├── navigation/
    │   │   │   └── CartNavigator.tsx
    │   │   ├── schemas/
    │   │   │   └── cartSchemas.ts
    │   │   ├── screens/
    │   │   │   ├── AddressListScreen.tsx
    │   │   │   ├── CartScreen.tsx
    │   │   │   ├── CheckoutAddressScreen.tsx
    │   │   │   ├── CheckoutConfirmationScreen.tsx
    │   │   │   ├── CheckoutPaymentScreen.tsx
    │   │   │   └── CheckoutReviewScreen.tsx
    │   │   ├── state/
    │   │   │   └── checkoutFlowStore.ts
    │   │   └── __tests__/
    │   │
    │   ├── feed/
    │   │   ├── index.ts
    │   │   ├── _rules.md
    │   │   ├── analytics/
    │   │   │   └── feedAnalytics.ts
    │   │   ├── api/
    │   │   │   ├── fakeFeedApi.ts
    │   │   │   └── mapper.ts
    │   │   ├── components/
    │   │   │   ├── CategoryBar.tsx
    │   │   │   ├── FilterModal.tsx
    │   │   │   ├── PriceRangeSlider.tsx
    │   │   │   ├── ProductCard.tsx
    │   │   │   └── SearchBar.tsx
    │   │   ├── data/
    │   │   │   ├── useLikeProductMutation.ts
    │   │   │   ├── useProductDetailQuery.ts
    │   │   │   ├── useProductListQuery.ts
    │   │   │   └── useRelatedProductsQuery.ts
    │   │   ├── domain/
    │   │   │   ├── entities.ts
    │   │   │   └── usecases/
    │   │   │       └── getProductFeedUseCase.ts
    │   │   ├── hooks/
    │   │   │   ├── useFeedFilters.ts
    │   │   │   └── useSearchHistory.ts
    │   │   ├── navigation/
    │   │   │   └── FeedNavigator.tsx
    │   │   ├── schemas/
    │   │   │   └── productSchemas.ts
    │   │   ├── screens/
    │   │   │   ├── FeedScreen.tsx
    │   │   │   ├── FilterModalScreen.tsx
    │   │   │   ├── ProductDetailScreen.tsx
    │   │   │   └── SearchScreen.tsx
    │   │   ├── state/
    │   │   │   └── feedFiltersStore.ts
    │   │   └── __tests__/
    │   │
    │   ├── profile/
    │   │   ├── index.ts
    │   │   ├── _rules.md
    │   │   ├── analytics/
    │   │   │   └── profileAnalytics.ts
    │   │   ├── api/
    │   │   │   ├── fakeAddressApi.ts
    │   │   │   ├── fakeProfileApi.ts
    │   │   │   └── mapper.ts
    │   │   ├── components/
    │   │   │   ├── AccountDeletionDialog.tsx
    │   │   │   ├── AvatarPicker.tsx
    │   │   │   ├── ReviewCard.tsx
    │   │   │   └── SettingsRow.tsx
    │   │   ├── data/
    │   │   │   ├── useDeleteAccountMutation.ts
    │   │   │   ├── useProfileQuery.ts
    │   │   │   ├── useRecentlyViewedQuery.ts
    │   │   │   ├── useUpdateProfileMutation.ts
    │   │   │   └── useWishlistQuery.ts
    │   │   ├── domain/
    │   │   │   ├── entities.ts
    │   │   │   └── usecases/
    │   │   │       ├── deleteAccountUseCase.ts
    │   │   │       └── updateProfileUseCase.ts
    │   │   ├── hooks/
    │   │   │   └── useProfileActions.ts
    │   │   ├── navigation/
    │   │   │   └── ProfileNavigator.tsx
    │   │   ├── schemas/
    │   │   │   └── profileSchemas.ts
    │   │   ├── screens/
    │   │   │   ├── AccountDeletionScreen.tsx
    │   │   │   ├── EditProfileScreen.tsx
    │   │   │   ├── NotificationPreferencesScreen.tsx
    │   │   │   ├── ProfileScreen.tsx
    │   │   │   ├── RecentlyViewedScreen.tsx
    │   │   │   ├── SettingsScreen.tsx
    │   │   │   └── WishlistScreen.tsx
    │   │   ├── state/
    │   │   │   └── profileUIStore.ts
    │   │   └── __tests__/
    │   │
    │   ├── review/
    │   │   ├── index.ts
    │   │   ├── _rules.md
    │   │   ├── api/
    │   │   │   ├── fakeReviewApi.ts
    │   │   │   └── mapper.ts
    │   │   ├── components/
    │   │   │   ├── CharCounter.tsx
    │   │   │   └── StarRating.tsx
    │   │   ├── data/
    │   │   │   ├── useProductReviewsQuery.ts
    │   │   │   └── useSubmitReviewMutation.ts
    │   │   ├── domain/
    │   │   │   ├── entities.ts
    │   │   │   └── usecases/
    │   │   │       └── submitReviewUseCase.ts
    │   │   ├── hooks/
    │   │   │   └── useReviewFlow.ts
    │   │   ├── schemas/
    │   │   │   └── reviewSchemas.ts
    │   │   ├── screens/
    │   │   │   └── ReviewSubmissionScreen.tsx
    │   │   └── __tests__/
    │   │
    │   └── settings/
    │       ├── index.ts
    │       ├── _rules.md
    │       ├── api/
    │       │   ├── fakeSettingsApi.ts
    │       │   └── mapper.ts
    │       ├── components/
    │       │   ├── BiometricEnrollment.tsx
    │       │   └── ThemeSwitcher.tsx
    │       ├── data/
    │       │   ├── useSettingsQuery.ts
    │       │   └── useUpdateSettingsMutation.ts
    │       ├── domain/
    │       │   ├── entities.ts
    │       │   └── usecases/
    │       │       └── applyThemeUseCase.ts
    │       ├── hooks/
    │       │   └── useSystemAppearance.ts
    │       ├── navigation/
    │       │   └── SettingsNavigator.tsx
    │       ├── schemas/
    │       │   └── settingsSchemas.ts
    │       ├── screens/
    │       │   ├── LanguageScreen.tsx
    │       │   ├── SecuritySettingsScreen.tsx
    │       │   └── ThemeSettingsScreen.tsx
    │       ├── state/
    │       │   └── settingsUIStore.ts
    │       └── __tests__/
    │
    ├── platform/
    │   ├── index.ts
    │   ├── analytics/
    │   │   ├── analytics.ts
    │   │   └── events.ts
    │   ├── api/
    │   │   ├── axiosInstance.ts
    │   │   ├── errorNormalizer.ts
    │   │   ├── interceptors.ts
    │   │   ├── types.ts
    │   │   └── endpoints/
    │   │       ├── authEndpoints.ts
    │   │       ├── cartEndpoints.ts
    │   │       ├── productEndpoints.ts
    │   │       └── profileEndpoints.ts
    │   ├── auth/
    │   │   ├── sessionManager.ts
    │   │   └── tokenStorage.ts
    │   ├── feature-flags/
    │   │   └── flags.ts
    │   ├── monitoring/
    │   │   ├── errorReporter.ts
    │   │   └── sentry.config.ts
    │   ├── notifications/
    │   │   └── pushService.ts
    │   └── storage/
    │       ├── asyncStorage.ts
    │       ├── keychain.ts
    │       └── mmkv.ts
    │
    └── shared/
        ├── events/
        │   └── eventBus.ts
        ├── hooks/
        │   ├── useAccessibilitySettings.ts
        │   ├── useAppState.ts
        │   ├── useDebounce.ts
        │   ├── useNetworkStatus.ts
        │   ├── usePrevious.ts
        │   └── useReducedMotion.ts
        ├── i18n/
        │   ├── i18n.ts
        │   └── translations/
        │       ├── en.json
        │       └── es.json
        ├── mocks/
        │   ├── data/
        │   │   ├── addresses.ts
        │   │   ├── categories.ts
        │   │   ├── index.ts
        │   │   ├── notificationPreferences.ts
        │   │   ├── orders.ts
        │   │   ├── products.ts
        │   │   ├── reviews.ts
        │   │   └── users.ts
        │   └── db/
        │       ├── addressesDb.ts
        │       ├── authTokensDb.ts
        │       ├── cartDb.ts
        │       ├── categoriesDb.ts
        │       ├── index.ts
        │       ├── notificationPreferencesDb.ts
        │       ├── ordersDb.ts
        │       ├── productsDb.ts
        │       ├── recentlyViewedDb.ts
        │       ├── reviewsDb.ts
        │       ├── usersDb.ts
        │       └── wishlistDb.ts
        ├── theme/
        │   ├── darkTheme.ts
        │   ├── lightTheme.ts
        │   ├── ThemeContext.tsx
        │   └── tokens.ts
        ├── types/
        │   ├── entities.ts
        │   ├── errors.ts
        │   ├── global.d.ts
        │   ├── index.ts
        │   └── navigation.ts
        ├── ui/
        │   ├── BottomSheet.tsx
        │   ├── Button.tsx
        │   ├── Card.tsx
        │   ├── Chip.tsx
        │   ├── EmptyState.tsx
        │   ├── ErrorState.tsx
        │   ├── FormField.tsx
        │   ├── FormInput.tsx
        │   ├── Input.tsx
        │   ├── LoadingOverlay.tsx
        │   ├── Skeleton.tsx
        │   └── Toast.tsx
        └── utils/
            ├── delay.ts
            ├── formatting.ts
            ├── helpers.ts
            ├── retry.ts
            ├── tokens.ts
            └── validation.ts