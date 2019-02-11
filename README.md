- Init project

```bash
npm init
```

-- Install webpack dev dependencies

```bash
npm install --save-dev webpack webpack-cli
```

- Add `build` script in `package.json` file

```json
{
    ...
    "scripts": {
        "build": "webpack"
    },
    ...
}
```

- Install babel dev dependencies

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/register
```

- Install webpack babel loader

```bash
npm install --save-dev babel-loader
```

- Install webpack plugins

```bash
npm install --save-dev html-webpack-plugin script-ext-html-webpack-plugin
```

- Create `webpack.config.babel` file

```javascript
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.template.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
```

- Create `.babelrc` file

```json
{
  "presets": ["@babel/preset-env"]
}
```

- Create `src/index.js` file

```javascript
const a = 'hello!';
console.log(a);
```

- Create `src/index.template.html` file

```html
<h1>Webpack + Babel + Eslint + Prettier</h1>
```

## Dev Server

- Install dev dependencies

```bash
npm install --save-dev webpack-dev-server
```

- Update `webpack.config.babel.js` file

```javascript
{
    ...
    mode: 'development',
    devServer: {
        contentBase: './dist',
        inline: true,
        port: 3000,
    },
    ...
}
```

- Add `start` script in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "start": "webpack-dev-server --open",
        ...
    }
}
```

## eslint

- Install dev dependencies

```bash
npm install --save-dev eslint
npm install --save-dev babel-eslint
```

- Init eslint config /// standard

```bash
./node_modules/.bin/eslint --init
```

- Add `babel-eslint` parser in `.eslintrc.json` file

```json
{
    "parser": "babel-eslint",
    ...
}
```

- Add `eslint`, and `eslint:fix` scripts in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "eslint": "eslint src/**/*.js",
        "eslint:fix": "npm run eslint -- --fix",
        ...
    }
}
```

## prettier

- Install dev dependencies

```bash
npm install --save-dev prettier
```

- Create `.prettierrc` file

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxBracketSameLine": false,
  "proseWrap": "always"
}
```

- Add `prettier`, and `prettier:write` scripts in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "prettier": "prettier src/**/*.js",
        "prettier:write": "npm run prettier -- --write",
        ...
    }
}
```

## Fix potential conflicts between eslint and prettier

- Install dev dependencies

```bash
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

- Update `.eslintrc.json` file.
  [Here](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
  more info

```json
{
    ...
    "extends": [
        "standard",
        "plugin:prettier/recommended",
        "prettier/standard"
    ]
    ...
}
```

## Cross platform scripts

- Install dev dependencies

```bash
npm install npm-run-all --save-dev
```

- Add `format` script in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "format": "npm-run-all prettier:write eslint:fix"
        ...
    }
}
```

## React support

- Install babel preset for react

```bash
npm install --save-dev @babel/preset-react
```

- Add preset in `.babelrc` file

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

- Install eslint plugin for react

```bash
npm install --save-dev eslint-plugin-react
```

- Add react plugin in `.eslintrc.json` file

```json
{
    ...
    "extends": [
        "standard",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/standard",
        "prettier/react"
    ],
    "settings": {
        "react": {
        "version": "detect"
        }
    }
    ...
}
```

## HMR

- Install dev dependencies

```bash
npm install --save-dev react-hot-loader
```

- Add `react-hot-loader/babel` plugin in `.babelrc` file

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["react-hot-loader/babel"]
}
```

- Update `start` script in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "start": "webpack-dev-server --hot --open"
        ...
    }
}
```

## Make env variables cross platform

- Install dev dependencies

```bash
npm install --save-dev cross-env
```

- Update `build` script in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "start": "webpack-dev-server --hot --open"
        ...
    }
}
```

## Utils

- Install dev dependencies

```bash
npm install --save-dev rimraf
```

- Add `clean` script in `package.json` file

```json
{
    ...
    "scripts": {
        "clean": "rimraf dist",
        ...
    }
}
```

- Add `webpack` script and update `build` script in `package.json` file

```json
{
    ...
    "scripts": {
        ...
        "webpack": "cross-env NODE_ENV=production webpack",
        "build": "npm-run-all clean webpack",
        ...
    }
}
```
