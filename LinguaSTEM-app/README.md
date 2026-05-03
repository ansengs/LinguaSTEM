# STEM Study Lab — React Native / Expo

A separated React Native version of the original single-file STEM Study Lab HTML app.

## Requirements

- Node.js 20.19+
- npm 10+
- Expo CLI through `npx expo`

## Install

```bash
npm install
```

## Run

```bash
npm run start
```

Then press:

- `i` for iOS simulator
- `a` for Android emulator
- `w` for web
- or scan the QR code with Expo Go where supported

## Validation performed

```bash
npm run typecheck
npx expo install --check
npx expo config --type public
```

## Notes

- Uses Expo SDK 55, React Native 0.83, and React 19.2.
- The original HTML data has been extracted into `src/data` modules.
- The original app structure is preserved: language modes, practice modes, Formula Lab, Study Science, timer, streak, progress bar, and mobile tabs.
- SVG formula diagrams render with `react-native-svg` instead of `WebView`, which avoids blank-screen and web bundling problems.
