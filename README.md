# Forum_App
# Setup guide

## 1. Setting Up Development Environment

1.  Install Android studio and SDK:
    https://developer.android.com/studio

2.  Install Xcode via App store (only for MacOS)

3.  Install NodeJs:
    https://nodejs.org/en/
    Note: Node version > 12

4.  Install Java JDK or using OpenSDK from Android studio folder
    https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html

5.  Install Git:
    https://git-scm.com/

6.  Setup environment variable JAVA_HOME:
    https://confluence.atlassian.com/conf59/setting-the-java_home-variable-in-windows-792499849.html

7.  Install React Native Command Line Interface (CLI):

```shell
npm install -g react-native-cli
```

Please visit React Native setting up the development environment for more details: https://reactnative.dev/docs/environment-setup

## 2. Build

1.  Clone from repository (Skip if you are using code folder):

```shell
git clone <path>
```

2.  Open terminal at project folder:

```shell
npm install
```

or

```shell
npm i
```

3.  Run Android (rebuild and run):

```shell
react-native run-android
```

or

```shell
npx react-native run-android
```

Build release:

```shell
cd android && ./gradlew clean && ./gradlew app:assembleRelease && cd ..
```

4.  Run IOS:

### Using CocoaPods

After installing the npm package, we need to install the pod.

Note: If you have installed CocoaPods before, please skip the 1st and 2nd step

1.  Install CocoaPods:

```shell
gem install cocoapods
```

Use sudo if you must, but preferably install with:

```shell
sudo gem install cocoapods
```

2.  Generates the template Podfile:

```shell
cd ios && pod init
```

3.  Install Podfile in folder ios:

```shell
 pod install
```

4. Run IOS:

   Open file .xcworkspace in folder ios and click Run

   or

```shell
react-native run-ios
```

Archive app to release:

- In Scheme, Choose "TopenFintech" => `Build` (`Any iOS Device`)

- In Xcode menu, `Product` => `Archive`

Note: Checking provisioning profile's developer certificate validity

5. Add a new package into project

```shell
npm i --save "{package_name}"
```

## 3. Uninstall and Create bundle

1. Uninstall application:

```shell
adb uninstall "{package_name}"
```

2. Detect the device connection:

```shell
adb devices
```

3. For offline bunduling of JS into android:

```shell
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

## 4. Add reference to Android SDK path

Create file `./android/local.properties` with the following contents:

```
sdk.dir = PATH_TO_SDK
```

## 5. Update display and package name

Display name: The name of the app as it appears on the device screen, e.g. TapOff.
Package name: The signature used by the app and play stores, e.g. co.za.auxstudio.tapoff.

(ONCE-OFF).

```shell
npm install -g react-native-rename
```

1.  Update the display and package name (android only):

NOTE: The display name will need to be different to the name you initialised the project with.

```shell
react-native-rename "NEW DISPLAY NAME" -b NEW_PACKAGE_NAME
```

2.  Update the package name in XCode (iOS only):

NOTE: Follow this step to a tee, don't modify Info.plist's bundle identifier, you will run into build issues.

In Xcode, `Project` => `General` => `Identity` => `Bundle Identifier` => `NEW_PACKAGE_NAME`.

3.  Setup iOS app signing (since you have XCode open):

In Xcode, `Project` => `General` => `Signing` => Select team.

## 6. Add android app signing

If you have a keystore before, please skip the 1st and 2nd step

1.  Generate keystore:

```shell
keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2.  Enter a password and your details.

3.  Move the generated `./src/my-upload-key.keystore` to `./android/app/`.

4.  In `./android/gradle.properties`, add:

```gradle
KEYSTORE_FILE=my-upload-key.keystore
KEYSTORE_ALIAS=my-key-alias
STORE_PASSWORD=YOUR_PASSWORD
KEY_PASSWORD=YOUR_PASSWORD
```

5.  In .`/android/app/build.gradle`, add (in android.defaultConfig):

```java
signingConfigs {
    release {
        if (project.hasProperty('KEYSTORE_FILE')) {
            storeFile file(KEYSTORE_FILE)
            storePassword STORE_PASSWORD
            keyAlias KEYSTORE_ALIAS
            keyPassword KEY_PASSWORD
        }
    }
}
```

6.  In the same file add (in android.buildTypes.release):

```java
signingConfig signingConfigs.release
```

7.  If you want to commit the keystore to git:

In `./gitignore`, remove `*.keystore`.

## Push notifications (OneSignal SDK)

Follow [OneSignal document](https://documentation.onesignal.com/docs/react-native-sdk-setup) to add package and setup for application

Add below code into app:

```script
    OneSignal.setLogLevel(6, 0);
    OneSignal.init(Config.ONESIGNAL_APP_ID);
    // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    });

    OneSignal.setNotificationOpenedHandler(notification => {
      // Handle open notification
    });
    OneSignal.addEventListener('ids', this.onIds);
```

