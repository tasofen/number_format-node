## Ported PHP function "number_format" in JavaScript 
[![Build Status](https://travis-ci.org/tasofen/number_format-node.svg?branch=master)](https://travis-ci.org/tasofen/number_format-node)

[![npm](https://img.shields.io/npm/dt/number_format-php.svg)](https://www.npmjs.com/package/number_format-php)
[![npm](https://img.shields.io/npm/dy/number_format-php)](https://www.npmjs.com/package/number_format-php)
[![npm](https://img.shields.io/npm/dm/number_format-php)](https://www.npmjs.com/package/number_format-php)

## Install
NodeJS
```bash
npm i number_format-php --save
```
Web
```html
<script src="number-format.js"></script>
```

## Usage

NodeJS
```js
var number_format = require("number_format-php");
number_format(1234567.125, 2, ".", " "); // 1 234 567.13
```
Web
```js
number_format(1234567.125, 2, ".", " "); // 1 234 567.13

// AMD
requirejs(["helper/number_format"], function(number_format) {
  number_format(1234567.125, 2, ".", " "); // 1 234 567.13
});
```

