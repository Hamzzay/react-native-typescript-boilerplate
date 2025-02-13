# React Native Boilerplate

## 📱 Project Overview

This is a React Native boilerplate for building cross-platform mobile applications with essential tools and libraries for efficient development.

## 🛠️ Tech Stack & Dependencies

- **React Native** (v0.69.5) - Core framework for building native mobile apps
- **React** (v18.0.0) - JavaScript library for building user interfaces
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React
- **Redux Persist** - Persist Redux state across app reloads
- **React Navigation** - Navigation solutions including bottom tabs, drawers, and stacks
- **React Native Paper** - Material Design components
- **Formik & Yup** - Form handling and validation
- **i18next & react-i18next** - Internationalization support
- **React Native Bootsplash** - Manage app splash screen
- **React Native Gesture Handler & Reanimated** - Gesture handling and animations
- **React Native Elements** - UI components
- **React Native Vector Icons** - Customizable icons
- **React Native Responsive Screen** - Responsive layouts
- **React Native Snackbar** - In-app notifications
- **Async Storage** - Persistent storage

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v9.1.3) or yarn
- React Native CLI
- Android Studio / Xcode for running on devices or emulators

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/BoilerPlate.git
   cd BoilerPlate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**

- For Android:
   ```bash
   npm run android
   ```

- For iOS (Mac only):
   ```bash
   npm run ios
   ```

- Start Metro Bundler manually if needed:
   ```bash
   npm run start
   ```

### Environment Configuration

Ensure you configure necessary environment variables and platform-specific permissions before running the app.

## 🧪 Running Tests

Run the tests using Jest:
```bash
npm run test
```

## 🧹 Linting & Formatting

To lint and format the codebase:
```bash
npm run lint
```

Lint-staged and Prettier are configured to format code automatically on commits.

## 🌐 Internationalization
This boilerplate includes `i18next` and `react-i18next` for localization. Update translations in the `src/locales` directory.

## 📲 Additional Libraries

- **react-native-global-font** - Custom global fonts
- **react-native-restart** - Restart the app programmatically
- **react-native-confirmation-code-field** - Code input fields

## 💡 Best Practices

- Use Redux Toolkit for state management
- Structure components into reusable, modular files
- Follow ESLint rules and Prettier formatting

## 🚧 Troubleshooting

- **Metro bundler stuck?** Run:
  ```bash
  npm start --reset-cache
  ```

- **Android build fails?** Ensure Android Studio is installed and properly configured.

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## 🏷️ License

MIT License

---

Happy Coding! 🚀

