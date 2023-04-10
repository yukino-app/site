# Setting up from source

In order to set up or build the source code some of the projects from the yukino repository, additional beforehand setup is required.

# Kazahana

Requirements:
- [Flutter SDK](https://docs.flutter.dev/get-started/install)
- [Android SDK](https://developer.android.com/studio)
- (Optional)[Github Desktop](https://desktop.github.com/)
- (Optional)[Git](https://git-scm.com/downloads)

To begin, you have three options for getting source:
Option one:
In your browser, navigate to the [Kazahana repo](https://github.com/yukino-org/kazahana) and press the green code button and download the zip.
Option two(Github Desktop):
In your browser, navigate to the [Kazahana repo](https://github.com/yukino-org/kazahana) and press the green code button and open with Github dekstop. 
Option three(Git):
Open a new terminal and run the following command
```
git clone https://github.com/yukino-org/kazahana.git
```

Once you have the source downloaded and opened in Visual Studio Code, run `Flutter pub get`. 
Next, run `flutter packages pub run build_runner build --delete-conflicting-outputs`
You should now be set to begin developing or building from source.

For any additional information on contributing or the custom dependencies used within Kazahana, please check their corresponding tabs.