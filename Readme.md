# Sliding Menu App

This project is a Sliding Menu App built using React Native Expo. It features a sliding menu navigation system with various libraries enhancing its functionality.

## Setup Instructions

Follow these steps to set up and run the app:

1. **Server Setup:**

    - Navigate to the `server` directory:

        ```bash
        cd server
        ```

    - Install dependencies for the server:

        ```bash
        npm install
        ```

    - Start the server:

        ```bash
        node index.js
        ```

2. **App Setup:**

    - Go back to the root directory of the app:

        ```bash
        cd ..
        ```

    - Install app dependencies:

        ```bash
        npm install
        ```

    - Launch the Expo app:

        ```bash
        expo start
        ```

3. **Android Setup (if applicable):**

    - If you're running the app on Android, execute the following command to set up reverse port forwarding with adb:

        ```bash
        adb reverse tcp:3001 tcp:3001
        ```

## Libraries Used

The app utilizes the following libraries to enhance its features:

- **@react-native-community/blur**
- **@react-navigation/bottom-tabs**
- **@react-navigation/drawer**
- **@react-navigation/native**
- **react-native-gesture-handler**
- **react-native-reanimated**
- **react-native-safe-area-context**
- **react-native-screens**
- **react-redux**
- **redux**
- **redux-thunk**
- **expo-blur**
- **axios**
