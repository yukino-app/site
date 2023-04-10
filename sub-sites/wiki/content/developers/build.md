# Setting up from source

In order to set up or build the source code some of the projects from the yukino repository, additional beforehand setup is required.

# Kazahana

Requirements:
- [Flutter SDK](https://docs.flutter.dev/get-started/install)
- [Android SDK](https://developer.android.com/studio)
- (Optional)[Git](https://git-scm.com/downloads)

In your browser, navigate to the [Kazahana Repository](https://github.com/yukino-org/kazahana) and press the green code button and download the zip.

Once you have the source downloaded and opened in visual studio code, run `flutter pub get`.
Next, run `flutter packages pub run build_runner build --delete-conflicting-outputs`
You should now be set to begin developing or building from source.

For any additional information on contributing or the custom dependencies used within Kazahana, please check their corresponding tabs.
