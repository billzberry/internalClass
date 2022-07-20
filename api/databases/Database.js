const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, `../.env`)})
const mysql = require('mysql')

class Database {
    #_dbConnection

    constructor() {
        this.#_dbConnection = undefined
        this.#_createConnection()
    }

    #_createConnection() {
        try {
            this.#_dbConnection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME
            })

            this.#_dbConnection.connect((error) => {
                if (error) throw error
                console.log('Database is connected!')
            })
        } catch (error) {
            console.log('An error occurred while creating connection', error)
        }
    }

    query(sql, columns) {
        try {
            return new Promise((resolve, reject) => {
                const formattedSqlStatement = mysql.format(sql, columns)
                this.#_dbConnection.query(formattedSqlStatement, function(error, result) {
                    if (error) throw error
                    resolve(result)
                })
            })
        } catch (error) {
            console.log('Error running query: ==> ', error)
            return false
        }
    }
}

module.exports = Database