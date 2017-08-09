# Web app basic setup

The following instructions document the processes of setting up a basic React web app.

## Tools used

Homebrew, Node/NPM, React, Webpack, Babel

## Initial computer setup

Ensure you are connected to the wifi when downloading repositories and dependencies, the Bourne network will block all required downloads.

### Install Homebrew

* [Homebrew](https://brew.sh/) - Package manager for macOS.

- Enter below code in terminal.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
``` 

### Install Node & NPM

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) - Package manager for JavaScript.

- Enter below code in terminal. 

```
brew install node
``` 

- Check it was installed by checking the versions, expect a version number for each. 

```
node -v
``` 
```
npm -v
``` 

## Raect boilerpate setup

Follow this process to install the default React boilerplate.

* [React](https://facebook.github.io/react/)

- Enter below code in terminal to install *create-react-app* globally.

```
-g create-react-app
``` 

- Enter below code in terminal to initiate React boilerplate.

```
create-react-app (name of your choice - delete brackets)
``` 

- Enter below code in terminal to change directory to new React boilerplate.

```
cd (new directory path)
```

- Enter below code in terminal to start app, expect app to open in browser.

```
npm start
```

## Manual setup

Follow this process to create a basic React web app using webpack and babel.

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.js.org/) - File bundler
* [Babel](https://babeljs.io/) - Code transpiler

- Enter below code in terminal to create *package.json* file, expect a prompt to enter app settings, press enter repeatedly to use default settings.

```
npm init
```
- Enter below code in terminal to install dependencies.
- Install React
```
npm i -S react react-dom
```
- Enter below code in terminal to install dev dependencies.
- Install Webpack and Webpack dev sever
```
npm i -D webpack webpack-dev-server
```
- Install Babel
```
npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
```
- Open and edit *package.json* file.
- Swap
```
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
}
```
- for
```
"scripts": {
	"build": "webpack",
	"start": "webpack-dev-server"
}