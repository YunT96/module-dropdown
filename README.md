# Template

## Installation

You can install the required dependencies using one of the following methods:

### Method 1: Install specific packages

Run the following command to install all necessary packages:

```bash
npm install css-loader html-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server webpack-merge @eslint/eslintrc @eslint/js eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier globals prettier --save-dev
```

### Method 2: Install from package.json

Alternatively, if a `package.json` file is present, simply run:

```bash
npm install
```

## Adding a Dropdown

To add a dropdown to your project, follow these steps:

1. Add the following HTML to your desired location:

```html
<div class="dropdown">
  <div class="select">
    <span class="selected">Dog</span>
    <div class="caret"></div>
  </div>
  <ul class="menu">
    <li class="active">Dog</li>
    <li>Cat</li>
    <li>Hamster</li>
    <li>Bird</li>
    <li>Fish</li>
  </ul>
</div>
```

2. Initialize the dropdown by calling the following function in your JavaScript:

```javascript
initDropdown();
```

Make sure this function is called after the DOM
