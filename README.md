# Web app basic setup

The following instructions document the processes of setting up a basic React web app.

## Tools used

Homebrew, Node/NPM, React, Webpack, Babel

## Initial computer setup

Ensure you are connected to the wifi when downloading repositories and dependencies, the Bourne network will block all required downloads.

### Install Homebrew

* [Homebrew](https://brew.sh/) - Package manager for macOS

- Enter below code in terminal 

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
``` 

### Install Node & NPM

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) - Package manager for JavaScript

- Enter below code in terminal 

```
brew install node
``` 

- Check it was installed by checking the versions 

```
node -v
``` 
```
npm -v
``` 
- Expect a version number for each

## Raect boilerpate setup

Follow this process to install the default React boilerplate

* [React](https://facebook.github.io/react/)

- Enter below code in terminal to install *create-react-app* globally

```
 -g creat-react-app
``` 

- Enter below code in terminal to initiate React boilerplate

```
create-react-app (name of your choice - delete brackets)
``` 

- Enter below code in terminal to change directory to new React boilerplate

```
cd (new directory path)
```

- Enter below code in terminal to start app

```
npm start
```

- Expect app to open in browser