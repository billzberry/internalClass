const VehicleMigration = require("./Vehicle.migration")
const VehicleTypeMigration = require("./VehicleType.migration")



class IndexMigration {
    #_db

    constructor(Database) {
        this.#_db = Database
        this.#__init__()
    }

    #__init__() {
        new VehicleTypeMigration().createTable(this.#_db)
        const VehicleTable = new VehicleMigration()
        VehicleTable.createTable(this.#_db)

        VehicleTable.createForeignKeys(this.#_db)
    }
}

module.exports = IndexMigration