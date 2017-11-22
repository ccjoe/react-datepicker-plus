# react-datepicker-plus

__react datepicker for salar and lunar, for props and callback to config, ie8 && ie8+__
__react dependency migrate react from v0.12 to v15.3, then below ie9 is not support__

## Demo & Examples

Live demo: [https://ccjoe.github.io/react-datepicker-plus](https://ccjoe.github.io/react-datepicker-plus)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8800`](http://localhost:8800) in a browser.


## Installation

The easiest way to use react-datepicker-plus is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-datepicker-plus.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-datepicker-plus --save
```

## Usage

__EXPLAIN USAGE HERE__

```
var ReactDatepickerPlus = require('react-datepicker-plus');

<ReactDatepickerPlus>Example</ReactDatepickerPlus>
```

### Properties

### Notes


## for ie8 support, pls add es5-shim and es5 sham

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License


Copyright (c) 2016 ccjoe.