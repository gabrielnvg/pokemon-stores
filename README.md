## Description

A React app that shows multiple products for the user to choose and stores them in a shopping cart. It builds different apps, depending of the flag used on the build script.

## Demo
- ### Grass type store
  https://gabrielnvg-pokemon-store-grass.surge.sh

- ### Fire type store
  https://gabrielnvg-pokemon-store-fire.surge.sh

- ### Water type store
  https://gabrielnvg-pokemon-store-water.surge.sh

---

## Dependencies

- [Node](https://nodejs.org/en/) 12.15.0
- [npm](https://www.npmjs.com/get-npm) 6.13.4

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and ejected.

## Available Scripts

In the project directory, you can run:

### `npm start`

The `npm start` script is set to run the `npm start:grass` script.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start:<store-name>`

The same as `npm start`, but runs the chosen store.

No matter which store you choose to run with `npm run start:<store-name>`, the changes made will affects all the stores.\
The differences between the stores, are the variables displayed on the page, such as the page title, the theme color and the products.

### `npm run build:<store-name>`

Builds the chosen store for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy:<store-name>`

Runs the `npm run build:<store-name>` (using the same `<store-name>`) and deploys the build folder using [Surge](https://surge.sh).

### `npm run deploy:all`

Runs all the `npm run deploy:<store-name>`.\
All scripts it runs, are manually added on it.

### `npm run test`

Launches the test runner in the interactive watch mode.

---

## Adding a new store

To add a new store, the following needs to be added:

  - The new store JSON file.
  - The respective lines in package.json (the build script, the deploy script and add the new deploy script to the `npm run deploy:all`).
  - The logos, favicon and the manifest.json in the respective store public folder.

---

## Observations

  - Since no product stock quantity information comes from the JSON, each product stock value is inifnite in the app.