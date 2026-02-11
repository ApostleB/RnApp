## Step 1: Start Metro

```sh
npm start
npm run start --reset-cache
```

## Step 2: Build and run your app

### Android
#### Start AOS App
```sh
npx run aos | npx run android
```

### iOS
#### init iOS App
```sh
cd ios
bundle install
bundle exec pod install
```

#### Build App

```sh
npx run ios
npx react-native run-ios --simulator="iPhone 16"
npx react-native run-ios --device "VerserRe"
```
