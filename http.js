const http = require('http')
const server = http.createServer((req,res) => {
    res.write('welcome to our home')
    res.end()

})
server.listen(4000)
