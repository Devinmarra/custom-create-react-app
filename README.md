# @devinmarra/react-scripts
This is a custom package replacing react-scripts to include redux and some boilerplate code. The template is react with typescript and redux, including some basic file structures and skeleton functions with which to build on, with the intent on saving time and not having to go back to old projects to reference a pattern.

To install, add command argument as follows
create-react-app app-name --scripts-version=@devinmarra/react-scripts

*Note* For now, You will need to host this on your own NPM host such as verdaccio, and then configure your registry to that path
npm set registry http://localhost:4873

Full credit goes to original authors, and I've done my best to preserve their original content, while modifying only what I need.

# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
