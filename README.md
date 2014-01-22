#cli-clear
> Cross-platform clear for the CLI with Node.JS

## Getting Started
This plugin requires NodeJS `~0.8.0`

Just a simple script for clearing the console. ASCII tricks don't work in Windows.

```shell
npm install cli-clear -g
```

## Overview

```javascript
var clear = require("cli-clear");

clear();
```

### Arguments
#### callback
Type: `Function`  

Useful when using asynchronous prompts so that your prompts appear *after* the clear.

## Release History
* 0.1.0 initial release
