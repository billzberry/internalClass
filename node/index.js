const express = require('express')
const homeRouter = require('./routers/homeRouter')

const server = express()

//Use template engine
server.set('view engine', 'ejs')

//Use static files
server.use(express.static('stuff'))

homeRouter(server)


server.listen(9090, () => {
    console.log('Server is running on http://localhost:9090')
})


