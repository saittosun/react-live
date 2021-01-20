<h1 align="center">Aplaudo Project - HYF Bootcamp</h1>
<h3 align="center">Hi 👋, We are Aplaudo Team</h3>
<p align="center">Demanded by passionate artists, made by professional-souled amateurs...</p>

[![GitHub issues](https://img.shields.io/github/issues/Rashaali84/Aplaudo)](https://github.com/Rashaali84/Aplaudo/issues) [![GitHub forks](https://img.shields.io/github/forks/Rashaali84/Aplaudo)](https://github.com/Rashaali84/Aplaudo/network) [![GitHub stars](https://img.shields.io/github/stars/Rashaali84/Aplaudo)](https://github.com/Rashaali84/Aplaudo/stargazers)[![GitHub license](https://img.shields.io/github/license/Rashaali84/AplaudoApi)](https://github.com/Rashaali84/AplaudoApi)

## Table of contents

1. [ General Information. ](#desc)
2. [ Used Technologies and Libraries. ](#used)
3. [ Structure of the Project. ](#structure)
4. [ Getting Started. ](#GettingStarted)
5. [ Demo of the Project. ](#DemooftheProject)
6. [ TODOs. ](#TODOs)
7. [ Links to Other Repositories. ](#Linkstootherrepositoriesoftheproject)
8. [Contact & Contributors. ](#Contact&Contributors)
9. [ Generic CRA Documentation. ](#GenericCRADocumentation)

<a name="desc"></a>

## General Information

This project is designed to be a platform dedicated for artists to have an account and create/arrange concert streaming.

- Artist can create profile, add/schedule events
- Live video environment with 1-to-many connection
  (owner has camera and microphone access, audience doesn't)

<a name="used"></a>

## Used Technologies and Libraries

- Create-React-App
- Axios, http-proxy-middleware
- Bootstrap, react-bootstrap, node-sass, styled-components
- React-hook-form, react-bootstrap-country-select, react-elastic-carousel
- React-multi-select-component
- Redux, react-redux, redux-logger, redux-thunk

<a name="structure"></a>

## Structure of the Project

- [Please check the main README file in backend folder for further info over system architecture](https://github.com/Rashaali84/AplaudoApi)

```
|backend
|-public
|--script.js
|-views
|--room.ejs
|-.gitignore
|-package.json
|-server.js
|-TODO.md
|frontend
|-public
|-src
|--actions
|--assets
|--components
|--constants
|--containers
|----About
|----Carousel
|------ConcertInfo
|------Item
|----Concert
|----Footer
|----Navbar
|----VideoEnvironment
|------ConcertVideo
|------ConcertVideoList
|----profile
|----register
|--context
|--helpers
|--reducers
|--services
|--App.js
|--App.scss
|--App.test.js
|--index.js
|--setupProxy.js
|--setupTests.js
|-.gitignore
|-package.json
|-README.md
```

<a name="GettingStarted"></a>

## Getting Started

Run the project:

- `yarn` or `npm install`
- `yarn start` or `npm start`
  You will be able to access the website from http://localhost:3000

  also in backend folder (cd .. && cd backend)

  - `npm install`
  - `npm devStart`
    You will be able to access the video streaming window from http://localhost:3007

<a name="DemooftheProject"></a>

## Demo of the Project

[LINK TO DEPLOYED PROJECT](https://aplaudo.herokuapp.com/signin)

<img src="./src/assets/aplaudo.gif" alt="My Project GIF" width="900" height="600">

- [Link to project](https://aplaudo.herokuapp.com/signin)

<a name="TODOs"></a>

## TODOs:

- `styling`: Remove the duplicate styles and apply the styled-components overall. Due to educational reasons, every sort of styling has been applied and tested.

- `backend connection`: Fully integrate the auth process. Due to late and untested integration with backend APIs, for now, there are two different logic inside. One working with redux and making authentication via localStorage and simulating the api calls according the routes; the other one making calls directly to "https://aplaudoapi.azurewebsites.net/api". After stabile and tested connection with backend, fakebackend.js file can be updated accordingly and api calls inside the components can be moved outside again, this way, redux structure can be more robust without memory leaks caused by unmounted components.

- `add search and filter functionality`: After having enough concert/artist in database, those features can be applied and tested easier.

- `add redux overall`: Redux is applied for only user registration operations. Can be applied also to concert operations.

- `add dark mode`

- `add integration with other social accounts for register`

- `scale up streaming` [Further info](https://github.com/Rashaali84/Aplaudo/blob/main/backend/TODO.md)

<a name="Linkstootherrepositoriesoftheproject"></a>

## Links to other repositories of the project:

- [Backend-API repository](https://github.com/Rashaali84/AplaudoApi)

- [Main repository that includes create-react-app and video-broadcasting repo](https://github.com/Rashaali84/Aplaudo)

- [Credits for RTCMultiConnection and broadcasting](https://github.com/muaz-khan/RTCMultiConnection/blob/master/demos/video-broadcasting.html)

- [Please check the main README file in backend folder for further info over system architecture](https://github.com/Rashaali84/AplaudoApi)

<a name="Contact&Contributors"></a>

## Contact & Contributors

- [Sait Tosun](https://github.com/saittosun)

- [Engin Kosure](https://github.com/EnginKosure)

- [Rasha Ali](https://github.com/Rashaali84)

- [Rahal Semu](https://github.com/Rahela-HYF)

- [Yavuz Ugurtas](https://github.com/yavuzugurtas)

- [Wouter Wouters](https://github.com/WouterWouters)

<a name="GenericCRADocumentation"></a>

## Generic CRA Documentation - Getting Started with Create React App

This project was generated with [Create React App](https://github.com/facebook/create-react-app) version 17.0.1

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
