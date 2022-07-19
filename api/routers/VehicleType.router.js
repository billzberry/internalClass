const VehicleController = require("../controllers/VehicleType.controller")



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
            new VehicleController(this.#_database, request, response, 'GET')
        })

        this.#_server.post('/vehicle-type', (request, response) => {
            new VehicleController(this.#_database, request, response, 'POST')
        })
    }
}

module.exports = VehicleTypeRouter