This repo is an app build from react native and published to expo go application.

It create by expo-cli, and use different branches to introduce foundation components and how to visit with your phone or virtual device. you can use `Expo Go app`.

## Preview

## Core Librarys

| Library name | Version |
| ------------ | ------- |
| react        | 17.0.2  |
| react-native | 0.68.2  |
| Expo SDK     | 45      |

## Android Play Store build

## Releases

## Branches

- fc-Text
- fc-Image
- fc-Button
- fc-TouchableOpacity
- fc-TouchableHighlight
- fc-TouchableWithoutFeedback
- android-TouchableNativeFeedback
- ios-SafeAreaView
- api-Alert
- api-StyleSheet
- api-Platform
- Forms
- Device-Features
- Navigation
- Networking
- Distribution
- Offline
- Notifications

## Test Accounts


## Prerequisites

Install [node 16.15.0](https://nodejs.org/en/)

```bash
$ nvm install 16.15.0
```

Install [yarn 3+](https://yarnpkg.com/)

```bash
$ npm i -g yarn
$ yarn set version berry
$ yarn -v
3.2.0 -------------> this is my yarn version
```

## How to use

Step01, install Mobile Application Developer Tools

- [Android Studio](https://developer.android.com/studio) and `Android SDK`
- [xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

Step02, install `adb` Platform Tool, make it work in the Terminal.

Step03, create virtual Device with Developer Tools, and play it, then you can lookup the attached devices list

```bash
$ adb devices
List of devices attached
emulator-5554   device  -------------> this is my virtual device
```

Step04, install [expo-cli](https://docs.expo.dev/get-started/installation/), [eas-cli](https://github.com/expo/eas-cli), [electron](https://www.npmjs.com/package/electron), [react-devtools](https://www.npmjs.com/package/react-devtools) globally.

```bash
$ yarn dlx expo-cli
$ yarn dlx eas-cli
$ yarn dlx electron
$ yarn dlx react-devtools ----> for React Native Debugger
```

> this repo created by below command line, then choose managed workflow's blank (TypeScript) same as blank but with TypeScript configuration

```bash
$ expo-cli init demo
```

Step05, install [Expo Go app](https://docs.expo.dev/get-started/installation/) for development

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) - android
- [Expo Go](https://apps.apple.com/app/expo-go/id982107779) - ios

Step06, [sign up expo](https://expo.dev/signup), if you have an account, ignore this step and go next step.

Step07, clone the repo.

```bash
$ git clone https://github.com/3vand0ng/rn-demo.git
```

Step08, Install the dependencies.

```bash
$ yarn
```

> Some command-line options you should know.

- `?` – show all commands
- `a` – open Android (android virtual device and android phone will open expo app automatically)
- `r` – reload app (virtual device and phone will reload automatically)
- `m` – toggle menu (as hot key Ctrl+M -windows or Command+M -ios, you don't have to shake the phone to show the menu)
- `d` – show developer tools (open http://localhost:19002/ in broswer automatically)
- `w` – open web (open http://localhost:19006/ in broswer automatically)

Step09, start the project.

```bash
$ yarn start
```

Step10, start the local server. Run the following commands in a new teminal.

```bash
$ cd server
$ yarn
$ yarn start
```

> You should replace real local IP in `development.json`

```bash
// server/config/development.json
{
  "assetsBaseUrl": "http://{yourIP}:9000/assets/",
  "port": 9000
}
```

Step11, deploy app to the virtual device and your android phone. please confirm the phone and pc connect to the same wifi network, and keep the phone connect to pc with the debug mode.

- open Expo Developer tools on http://localhost:19002
- select `Run on Android device/emulator` menu - android
- select `Run on iOS simulator` menu - ios

Step12, publish application to Expo Go app for Development

- open Expo Developer tools on http://localhost:19002
- select `publish and republish project...` menu
- input infomation of the application , if you are log out to the expo, you should login in the teminal.
- click `publish project` button to finish publish.

now, you will find your published app in your Profile in `Expo Go app`.

## Testing with Jest (Unit Tests & Snapshot Tests)

```bash
yarn test
```

## FAQ

- Why xiaomi devices can't show local notifications?

  - You should disable `Do Not Disturb Mode`

- How to fixed notifications not opening app on Android 12?

```bash
# update Expo SDK to the latest version, 45.0.0
expo upgrade
```

- How to fix some dependencies are incompatible with the installed expo package version?

```bash
# install the correct versions of these packages
$ expo doctor --fix-dependencies
# or install individual packages
$ expo install [package-name ...]
```

- How to fix running `yarn build:android` occurs error?

make sure you have Loged in to `EAS`, if you don't, run the command below as you see fit:

```bash
eas login
// Enter your Email or username eg: jimvinhuang@gmail.com
// Enter Password eg: **********
Logged in --------> success loged
```

## Recommend vscode plugins

- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Expo Tools

## Recommend ui libraries

- [React Native Elements](https://react-native-elements.github.io/react-native-elements/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Native Base](https://nativebase.io/)

## Useful links

- [React Native Tutorial for Beginners](https://www.youtube.com/watch?v=0-S5a0eXPoc)
- [React Native Docs](https://reactnative.dev/docs/)
- [Expo Docs](https://docs.expo.dev/get-started/installation/)
- [System Fonts On IOS And Android](https://github.com/react-native-training/react-native-fonts)
- [Android Icon Design GuideLine](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
- [IOS Icon Design GuideLine](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/)
- [Distributing To The Google Play Store](https://docs.expo.io/distribution/uploading-apps/)
- [Fastlane](https://fastlane.tools/)
- [How To Use Fastlane To Deploy Expo Apps](https://blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool-9b2f5ad0a2cd)
- [Expo Push Notifications Tool](https://expo.dev/notifications)

## License

MIT
