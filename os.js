const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)
const ver = os.version()
console.log(ver)


const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMenua: os.totalmem(),
    feeMem: os.freemem(),
}
console.log(currentOS)