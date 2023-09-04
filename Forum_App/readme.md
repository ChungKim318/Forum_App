## Setup Project

### Setting Up Development Environment

1. Install Android studio and SDK: https://developer.android.com/studio

2. Install Xcode via App store (only for MacOS)

3. Install NodeJs: https://nodejs.org/en/ Note: Node version > 12

4. Install Java JDK or using OpenSDK from Android studio folder https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html

5. Setup environment variable JAVA_HOME: https://confluence.atlassian.com/conf59/setting-the-java_home-variable-in-windows-792499849.html

6. Install React Native Command Line Interface (CLI):
   npm install -g react-native-cli
   Please visit React Native setting up the development environment for more details: https://reactnative.dev/docs/environment-setup

### Setting Up Project

1. Clone the project from git repository:

```bash
   git clone https://github.com/ChungKim318/Forum_App.git
   cd Forum_App
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

3. Install pods:

```bash
   cd ios && pod install && cd ..
```

4. Run the project:
   iOS:

```bash
   react-native run-ios
```

Android:

```bash
   react-native run-android
```

### Troubleshooting

1. If you have error with pod install, please try to run the following command:

```bash
sudo gem install cocoapods
pod repo update
pod install
```

2. If you have error with react-native run-ios, please try to run the following command:

```bash
cd ios && pod install && cd ..
react-native run-ios

```

3. If you have error with react-native run-android, please try to run the following command:

```bash
cd android && ./gradlew clean
cd ..
react-native run-android

```
