# Getting Started with the App Factory Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This template attempts to keep its opinions low while still providing some basic defaults for working in the app factory. We found that the barebones nature of react didn't answer quite enough questions about project structure for our liking.

Dependencies this includes and accounts for:

- Routing | react-router-dom@v6 [site](https://reactrouterdotcom.fly.dev/docs/en/v6) and [npm](https://www.npmjs.com/package/react-router-dom) | We have specifically updated for the use of react router v6 which was a rewrite. Older guides online may not be compatible.
    - This is pretty standard to use for routing in the react community.
    - Routing is what will allow you to resolve what page is shown based on the url in a fairly dynamic and creative way.
- Firebase | firebase@v9 [site](https://firebase.google.com/docs/web/setup) and [npm](https://www.npmjs.com/package/firebase) | We have specifically targeted version 9 of the js library which was a major rewrite. Older guides may be incompatible or inconsistent.
    - Version 9 of firebase shifted in a major way from version requiring a more complex import tree, but rewarding you with an optimized bundle size if done right. (aka it only makes the browser download the stuff you use in it.)
    - We will place a default `firebase.js` in the root of the project. You just need to copy the `firebaseConfig` constant over from firebase to wire it up.
- ReactFire | reactfire@v4 [site](https://firebaseopensource.com/projects/firebaseextended/reactfire/) and [npm](https://www.npmjs.com/package/reactfire) |  This version of reactfire works with both version 9 of firebase and react-hooks to provide sensible "providers" and "consumers" in react.
    - Makes integrating with react and surfacing state from firebase easy at all levels of the application.
    - The template configures the base provider and the auth provider in `index.js`. You should use these as reference to implement for other services by editing both the `firebase.js` and the `index.js` accordingly.

These are the dependencies I felt accurately carve out the basis of things that are both necessary for our workflow and answers the question "Where should my files go?" for these pieces 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
