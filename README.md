# My Personal Modules

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

## Modules

<details>
<summary><strong>Dropdown Module</strong></summary>

### Adding a Dropdown

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

2. Import the module:

```javascript
import initDropdown from "yunt-modules";
```

3. Initialize the dropdown by calling the following function in your JavaScript:

```javascript
initDropdown();
```

Make sure this function is called after the DOM has loaded.

### CSS Styles

Override these rules to customise the dropdown:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dropdown {
  min-width: 15rem;
  position: relative;
  margin: 2rem;
}

.select {
  background: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #ddd solid;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.select-clicked {
  border: 2px #007bff solid;
  box-shadow: 0 0 0.8rem rgba(0, 123, 255, 0.5);
}

.menu li.active:hover {
  background: #007bff;
  color: #fff;
}

.select:hover {
  background: #f7f7f7;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #333;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2rem 0.5rem;
  background: #fff;
  border: 1px #ddd solid;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  color: #333;
  position: absolute;
  top: 3rem;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
  margin-top: 10px;
}

.menu li {
  padding: 0.7rem 0.5rem;
  margin: 0.3rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
}

.menu li:hover {
  background: #f7f7f7;
}

.active {
  background: #007bff;
  color: #fff;
}

.menu-open {
  display: block;
  opacity: 1;
}
```

</details>
