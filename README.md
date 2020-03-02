# is-valid-ip [![Build Status](https://travis-ci.org/gokulkrishh/is-valid-ip.svg?branch=master)](https://travis-ci.org/gokulkrishh/is-valid-ip)

> Check if a string is valid ip address

## Install

```bash
$ npm install is-valid-ip
```

## Usage

```js
const isValidIP = require("is-valid-ip");

isValidIP("0.0.0.0"); // true

isValidIP("12.255.56.1"); // true

isValidIP("01.02.03.04"); // false

isValidIP("abc.def.ghi.jkl"); // false
```

#### MIT Licensed

[@gokulkrishh](https://github.com/gokulkrishh)
