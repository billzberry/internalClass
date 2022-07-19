


class VehicleController {
    #_db
    #_req
    #_res
    #_method

    constructor(Database, Request, Response, Method) {
        this.#_db = Database
        this.#_req = Request
        this.#_res = Response
        this.#_method = Method
        this.#__init__()
    }

    #__init__() {
        if (this.#_method === 'GET') {
            
        } else if (this.#_method === 'POST') {
            
        } else {
            this.#_res.json({
                status: 'invalid',
                message: 'Invalid request'
            })
        }
    }

    #_getHandler() {

    }

    #_postHandler() {
        
    }
}

module.exports = VehicleController