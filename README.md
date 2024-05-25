# Project Skeleton

## Components

Maintain a flat structure without nesting. This directory contains components that are used throughout the application. These components might be registered globally or locally, though local registration is preferred in general.

Prefix components with `App` to indicate they are used at the application level and are widely utilized. Components that primarily consist of HTML markup and minor customizations should be prefixed with `Base` (this applies to module-specific `components` as well).

For globally used components like modals, use the `The` prefix.

The component naming follows **PascalCase** naming convention.

Example:

```
- components/
    - AppFooter.vue
    - AppHeader.vue
    - BaseButton.vue
    - TheModal.vue
```

## Composables

This directory is for storing composable functions. These are reusable pieces of logic that can be shared across multiple components. Composables help to keep your code DRY (Don't Repeat Yourself) and make it more modular.

Example:

```
- composables/
    - useAuth.js
    - useFetchData.js
```

## Assets

Store general assets such as images, fonts, and global styles in this directory.

## Layouts

This directory holds the common layouts and themes used throughout the codebase.
