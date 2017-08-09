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

## React boilerpate setup

Follow this process to install the default React boilerplate.

* [React](https://facebook.github.io/react/)

- Enter below code in terminal to install *create-react-app* globally.

```
npm i -g create-react-app
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

### Initiate web app

- Create a project root directory to house your app and cd to it in terminal.
- Enter below code in terminal to create *package.json* file, expect a prompt to enter app settings, press enter repeatedly to use default settings.

```
npm init
```

### Install dependencies

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

- Install file loaders

```
npm i -D file-loader node-sass css-loader sass-loader style-loader url-loader
```

### Configure dev scripts

- Open and edit *package.json* file with the below.
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
```

### Create directory structure

- In project root directory, create *src* directory and a *public* directory

### Configure Webpack

- In project root directory, create a *webpack.config.js* file
- Open and edit *webpack.config.js* file with the below.

```
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: __dirname + '/public',
		port: 3030
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{ 
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'url-loader?limit=10000'
			}
		]
	}
} 
```

### Configure Babel

- In project root directory, create a *.babelrc* file.
- Open and edit *.babelrc* file with the below.

```
{
	"presets": ["react", "es2015", "stage-2"]
} 
```

### Create root index.html file

- In *public* directory, create an *index.html* file.
- Open and edit *index.html* file with the below.

```
<!DOCTYPE html>
<html>
<head>
	<title>Basic app</title>
</head>
<body>
	<div id="root"></div>
</body>
<script type="text/javascript" src="bundle.js"></script>
</html> 
```

### Create react components

- In *src* directory, create an *index.js* file.
- Open and edit *index.js* file with the below.

```
import React from 'react'
import ReactDOM from 'react-dom'

import './scss/global.scss'

import App from './components/App'

ReactDOM.render(
	<App/>,
	document.getElementById('root')	
)
```
- In *src* directory, create a *components* directory.
- In *components* directory, create an *App.js* file.
- Open and edit *App.js* file with the below.

```
import React, { Component } from 'react'

import img from '../imgs/test-image.jpg'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>{"This is the app"}</h1>
				<img src={img} alt="plank"/>
			</div>
		)
	}
} 
```

### Add sass styles

- In *src* directory, create an *scss* directory.
- In *scss* directory, create an *global.scss* file.
- Open and edit *global.scss* file with the below.

```
* {
	padding: 0;
	margin: 0;
}
.App {
	margin: 10px;
}
```

### Add image

- In *src* directory, create an *imgs* directory.
- In *imgs* directory, add any image and name it *test-image*.

### Build and run app
- Enter below code in terminal to output *bundle.js*, expect a build log.

```
npm run build
```

- Enter below code in terminal to start app, expect dev server to start.

```
npm start 
```

- Enter below URL in internet browser to view running app.

```
http://localhost:3030/ 
```