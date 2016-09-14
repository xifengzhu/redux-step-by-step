### Set up project

#### Create project
```
mkdir ${project_name}
cd ${project_name}
```
#### Init project
```
  npm init
```
#### Install our dependencies

1. Add follow dependencies to you package.json

  ```
  "dependencies": {
    "immutable": "^3.7.5",
    "react": "^0.14.8",
    "react-dom": "^0.14.2",
    "react-redux": "^4.0.0",
    "redux": "^3.0.4"
  },
  "devDependencies": {
    "babel-core": "^6.1.21",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",
    "babel-preset-react": "^6.1.18",
    "webpack": "^1.12.6",
    "webpack-dev-middleware": "^1.2.0",
    "webpack-hot-middleware": "^2.9.1",
    "extract-text-webpack-plugin": "^0.8.2",
    "react-hot-loader": "^1.2.7",
    "open": "0.0.5",
    "babel-polyfill": "^6.3.14"
  }
  ```

2. Run npm Install get it all

#### Add entry file `index.html`

```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${project_name}</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/static/bundle.js"></script>
  </body>
  </html>
```

#### Config webpack

* [server.js](https://github.com/xifengzhu/redux-step-by-step/blob/master/server.js)
* [webpack.config.js](https://github.com/xifengzhu/redux-step-by-step/blob/master/webpack.config.js)

#### Run Project
`npm start`

#### Dividing components
1. header
  a. TodoInput
2. mainSection
  a. TodoList -> todoItem
3. footer
