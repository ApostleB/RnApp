# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native 0.83.1 project using TypeScript, bootstrapped with `@react-native-community/cli`. The app uses React 19.2.0 and requires Node.js >= 20.

## Common Commands

### Development
```bash
# Start Metro bundler
npm start

# Run on Android (requires Android Studio/emulator)
npm run android

# Run on iOS (requires Xcode/simulator)
npm run ios
```

### iOS Setup
iOS requires CocoaPods for native dependencies:
```bash
# Install bundler dependencies (first time only)
bundle install

# Install CocoaPods dependencies (required after native dependency changes)
cd ios && bundle exec pod install && cd ..
```

### Testing and Quality
```bash
# Run tests with Jest
npm test

# Run ESLint
npm run lint
```

## Project Structure

- `src/App.tsx` - Main application entry with bottom tab navigation
- `src/screens/` - Screen components
  - `HomeScreen.tsx` - Home tab screen
  - `Menu1Screen.tsx` - Menu 1 tab screen
  - `Menu2Screen.tsx` - Menu 2 tab screen
  - `ProfileScreen.tsx` - Profile tab screen
  - `*.styles.ts` - Screen-specific styles
- `src/styles/` - Global style system
  - `colors.ts` - Color palette (light/dark themes)
  - `typography.ts` - Font sizes and weights
  - `spacing.ts` - Spacing values
  - `common.ts` - Reusable common styles
  - `index.ts` - Style exports
- `index.js` - React Native app registration
- `__tests__/` - Jest test files
- `ios/` - iOS native project (Xcode workspace: `ios/RnApp.xcworkspace`)
- `android/` - Android native project

## Architecture

The app follows a standard React Native architecture:

1. **Entry Point**: `index.js` registers the app with React Native's AppRegistry
2. **Root Component**: `src/App.tsx` sets up navigation with bottom tabs
3. **Navigation**: Uses React Navigation with bottom tab navigator
   - 4 tabs: 홈 (Home), 메뉴1 (Menu1), 메뉴2 (Menu2), 프로필 (Profile)
   - Each tab has its own screen component in `src/screens/`
   - Navigation theme syncs with system dark mode
4. **Styling System**:
   - Global styles in `src/styles/` define colors, typography, spacing, and common styles
   - Screen-specific styles in separate `.styles.ts` files (e.g., `HomeScreen.styles.ts`)
   - Uses React Native's StyleSheet API with dark mode support via `useColorScheme` hook
   - Each screen imports global styles and defines its own specific styles
5. **Safe Areas**: Implements `react-native-safe-area-context` for proper edge-to-edge layout handling

### Navigation Structure

- **Bottom Tab Navigator**: Main navigation with 4 tabs
- **Adding new screens**: Create screen component in `src/screens/` and add to `Tab.Navigator` in `App.tsx`
- **Navigation theme**: Automatically adapts to light/dark mode using global color system

### Style Organization

- **Global styles** (`src/styles/`): Reusable design tokens (colors, typography, spacing)
- **Screen styles** (`src/screens/*.styles.ts`): Screen-specific styles that use global design tokens
- Import pattern: `import { colors, typography, spacing } from '../styles'`

## Key Dependencies

- `react-native-safe-area-context` - Safe area handling for notches and system UI
- `@react-navigation/native` - Navigation library
- `@react-navigation/bottom-tabs` - Bottom tab navigation
- `react-native-screens` - Native screen optimization for navigation
- `react-native-webview` - WebView component for displaying web content (used in Menu1)

## Development Notes

- The project uses TypeScript with React Native's default config
- Jest is configured with the `react-native` preset
- ESLint uses the `@react-native` config
- Metro bundler is used for JavaScript bundling (configured in `metro.config.js`)
- Babel transpilation uses `@react-native/babel-preset`

## Platform-Specific Commands

### iOS
```bash
# Run on specific simulator
npm run ios -- --simulator="iPhone 15 Pro"

# Clean build
cd ios && xcodebuild clean && cd ..
```

### Android
```bash
# Run on specific device/emulator
npm run android -- --deviceId=<device_id>

# Clean build
cd android && ./gradlew clean && cd ..
```