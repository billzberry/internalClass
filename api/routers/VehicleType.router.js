const VehicleTypeController = require("../controllers/VehicleType.controller")



class VehicleTypeRouter {
    #_server
    #_database

    constructor(Server, Database) {
        this.#_server = Server
        this.#_database = Database
        this.#__init__()
    }

    #__init__() {
        this.#_server.get('/vehicle-type', (request, response) => {
            new VehicleTypeController(this.#_database, request, response, 'GET')
        })

        this.#_server.post('/vehicle-type', (request, response) => {
            new VehicleTypeController(this.#_database, request, response, 'POST')
        })

        this.#_server.put('/vehicle-type', (request, response) => {
            new VehicleTypeController(this.#_database, request, response, 'PUT')
        })

        this.#_server.delete('/vehicle-type', (request, response) => {
            new VehicleTypeController(this.#_database, request, response, 'DELETE')
        })
    }
}

module.exports = VehicleTypeRouter