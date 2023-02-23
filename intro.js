
const names = require('./1_module')
const sayHi = require('./app')
const data = require('./alternetiv')
require('./add')

console.log(data)
sayHi('TOHID')
sayHi(names.john)
sayHi(names.peter)

