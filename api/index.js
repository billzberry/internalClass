const express = require('express')
const cors = require('cors')
const Database = require('./databases/Database')
const VehicleTypeRouter = require('./routers/VehicleType.router')
const IndexRouter = require('./routers/Index.router')
const IndexMigration = require('./databases/migrations/Index.migration')

const Server = express()
Server.use(express.urlencoded({extended: false}))
Server.use(express.json())
Server.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))


const dbConnection = new Database()
new IndexMigration(dbConnection)

new IndexRouter(Server)
new VehicleTypeRouter(Server, dbConnection)


Server.listen(4000, () => {
    console.log('API is running on port http://localhost:4000')
})