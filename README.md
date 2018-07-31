
## Set up the Development Enviroment

You need to set up your development before you can do anything.
Install `Node.js®` and `npm` if they are not already on your machine.

## Create new project folder

Create new project folder and go to project directory
```
mkdir my-zoomchartsApp && cd my-zoomchartsApp
```
Create a package.json file
```
npm init
```
If you want to skip all the questions, add the -y flag
```
npm init -y
```

## Install webpack

Install `webpack`, `webpack-cli` and `copy-webpack-plugin` as a dev dependency 
```
npm i webpack webpack-cli webpack-dev-server copy-webpack-plugin --save-dev
```
Add the following scripts to your package.json
```json
 "scripts": {
   "build": "webpack --mode production",
   "start": "webpack-dev-server --mode development --open"
 },
 ```
 
## Install React and Babel

Install `react` and `react-dom` as a dependency
```
npm i react react-dom --save
```
Install `babel` `babel-core`, `babel-loader`, `babel-preset-env` and `babel-preset-react` as a dev dependency.
```
npm i babel babel-core babel-loader babel-preset-env babel-preset-react --save-dev
```

## Create src folder with index.js

The `index.js` file will be as entry point in application.

## Create and set up a webpack.config.js file

```javascript
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
 entry: [
   './src/index.js',
 ],

 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'main.js'
 },

 resolve: {
   extensions: ['.js', '.jsx'],
 },

 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: [
         {
           loader: 'babel-loader',
           options: {
             presets: ['env', 'react']
           }
         }
       ],
     },
   ],
 },

 plugins: [
   new CopyWebpackPlugin([
     {
       from: './node_modules/@dvsl/zoomcharts/lib/assets',
       to: 'assets'
     }
   ]),
 ],

 devServer: {
   contentBase: path.join(__dirname),
   compress: true,
   port: 9000
 }
};
```

## Create ZoomCharts component

Install `ZoomCharts library` via npm
```
npm  install --save @dvsl/zoomcharts
```

### src/ZoomCharts.js

Create new react component named `ZoomCharts`.
```javascript
import React, { Component } from 'react';
import zc from "@dvsl/zoomcharts";

let TimeChart = zc.TimeChart;

// Zoomcharts license and license key
window.ZoomChartsLicense = "";
window.ZoomChartsLicenseKey = "";

class ZoomCharts extends Component {
 componentDidMount() {
   //
   var t = new TimeChart({
     container: document.getElementById("chartTimeChart"),
     area: { height: 350 },
     data: {
       preloaded: {
         values: [
           ["2017-01-09 00:00:00", 100],
           ["2017-01-20", 200],
           [1485907200, 300],
           ["2017-02-05 15:20:00", 400],
           ["2017-02-15 22:59:59", 500]
         ],
         dataLimitFrom: "2017-01-09 00:00:00",
         dataLimitTo: "2017-02-15 22:59:59",
         unit: 's'
       }
     }
   });
 }

 render() {
   return (
     <div className="chart-wrapper">
       <div id="chartTimeChart" className="chart"></div>
     </div>
   );
 }
}

export default ZoomCharts;
```

### src/index.js

Render an instance of `ZoomCharts` into document.getElementById('root')
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ZoomCharts from './ZoomCharts';

ReactDOM.render(<ZoomCharts />, document.getElementById('root'));
```

## Launch the server

```
npm start
```

