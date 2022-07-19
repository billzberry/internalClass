


class IndexRouter {
    #_server

    constructor(Server) {
        this.#_server = Server
        this.#__init__()
    }

    #__init__() {
        this.#_server.get('/', (request, response) => {
            response.json({
                status: 'ok'
            })
        })
    }
}

module.exports = IndexRouter