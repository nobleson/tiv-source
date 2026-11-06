# Android Project

The full native Android project (`android/`) is not yet generated in this scaffold.

## Why?

Generating the complete Android Gradle project requires the React Native CLI and a working network + Android SDK. In this environment we created a clean TypeScript + source structure first.

## What you should do on your machine

From `apps/mobile`:

```bash
# Option A – recommended: let React Native generate the native project
npx @react-native-community/cli init TempApp --version 0.76.5 --skip-install
# Then copy the android/ folder from TempApp into this directory
# and adjust the applicationId / package name to org.tivsource.mobile

# Option B – if you prefer a cleaner monorepo approach later
# we can add a proper native Android project in a follow-up step
```

After you have the `android/` folder:

1. Update `android/app/build.gradle` → `applicationId "org.tivsource.mobile"`
2. Update the package name in the Java/Kotlin files if needed
3. Run `npm run android`

We will refine the native project and add the matrix-rust-sdk bridge in the next steps of Phase 0.
