// CommanJS, every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utilts')
const data = require('./6-alternative-flavor')
require('./7-mind-grenede')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);