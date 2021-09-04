# React + Electron + SQLite + TypeOrm

Desktop project with Electron+React focused for Offline Apps, having SQLite Database and TypeOrm for queries.

## Clone project

To start coding run the codes:

`git clone https://github.com/pitfritsch/offline-electron-boilerplate.git your-project-name`\
`cd your-project-name`\
`git remote rm origin`\
`yarn`\
`yarn dev`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode. \
It will automatically open Electron Window and DevTools

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn electron-pack`

It uses [Electron Builder](https://www.electron.build/) to build a production app in `dist` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

Electron-builder builds Electron app for current platform and current architecture.