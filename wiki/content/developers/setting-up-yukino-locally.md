# Running Yukino locally

## Prerequisites

These tools are necessary to run Yukino locally if you wish to.

-   Flutter ([https://flutter.dev/](https://flutter.dev/))
-   Node.js ([https://nodejs.org/](https://nodejs.org/))
-   Git ([https://git-scm.com/](https://git-scm.com/))

## Installation

### Cloning the repository

```bash
git clone https://github.com/yukino-app/yukino.git
cd yukino
```

### Setup Flutter

We use the `master` channel of Flutter to support desktop platforms.

```bash
flutter channel master
```

### Installing dependecies

```bash
npm install -D
flutter pub get
```

## Predefined Scripts

-   Running the app - `npm run <platform>:run`
-   Building the app binaries - `npm build <platform>:run`
-   Packing the app binaries - `npm build <platform>:run:<format>`

!!! note

    - Replace `<platform>` with `windows`, `linux`, `android` or others)
    - Replace `<format>` with `installer`, `appimage`, `zip` or others)

    Refer the `package.json` for additional scripts.
