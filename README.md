[![Build Status](https://travis-ci.org/tandrewnichols/sad-trombone.png)](https://travis-ci.org/tandrewnichols/sad-trombone) [![downloads](http://img.shields.io/npm/dm/sad-trombone.svg)](https://npmjs.org/package/sad-trombone) [![npm](http://img.shields.io/npm/v/sad-trombone.svg)](https://npmjs.org/package/sad-trombone) [![Code Climate](https://codeclimate.com/github/tandrewnichols/sad-trombone/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/sad-trombone) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/sad-trombone/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/sad-trombone) [![dependencies](https://david-dm.org/tandrewnichols/sad-trombone.png)](https://david-dm.org/tandrewnichols/sad-trombone)

# sad-trombone

Throw errors with sound effects

## Installation

`npm install --save sad-trombone`

## Usage

```
var sadTrombone = require('sad-trombone');
sadTrombone.throw('Uh oh');
```

## N.B.

Using this module actually blows up node on my system (with an OS-level error that says "Illegal instruction: 4") so it's possible this will happen for you as well. Sad trombone!
