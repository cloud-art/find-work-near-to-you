# Find work near to you

Проект представляет из себя приложение, которое, в зависимости от вашей геолокации, предлагает доступные подработки рядом.

## Запуск dev версии:

### Подготовка

Включите `corepack` для использоваться `pnpm`:
```sh
corepack enable
```

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
pnpm start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
pnpm run android
```

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

```sh
pnpm run ios
```