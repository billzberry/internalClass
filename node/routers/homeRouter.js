

module.exports = (server) => {
    server.get('/', (request, response) => {
        response.render('index', {name: 'Alexander', username: 'oseiGyapong'})
    })
}