# app_mediatama

# Context and purpose

I have made an application according to the design given, has two pages, namely the home page and the detailed book page

The app is built with ReactJS, React Native, React Navigation v6 & Redux, plus some extra packages to handle routing, dataflow and UI elements.

# Installation and Setup Instructions:

#### Example:  

Clone down this repository. You will need `node` verson 18 and `npm` installed globally on your machine.  

# Installation:

`cd ./app_mediatama && yarn install`

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

To Start Server:

```
npm start
```

To Run App Android:

```
npx react-native run-android
```

### IOS steps

- Then, run the project in executing on your project folder:

To Install Pods:

```
cd ios/ && pod install && cd ..
```

To Start Server:

```
npm start
```

To Run App Android:

```
npx react-native run-ios
```