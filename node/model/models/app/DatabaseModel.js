const mysql = require('mysql')


class Database {

    constructor() {
        this.host = ''
        this.port = ''
        this.username = ''
        this.password = ''
        this.database = ''
        this.dbcon = ''
    }


    connection() {
        this.dbcon = mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.username,
            password: this.password,
            database: this.database
        })

        if (this.dbcon) {
            this.dbcon.connect()
        }
    }
}