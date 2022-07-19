const HelperFunctions = require("../modules/Index.module")



class VehicleTypeModel {
    #_name
    #_description
    #_db
    #_hp

    constructor(Database) {
        this.#_db = Database
        this.#_name = ''
        this.#_description = ''
        this.#_hp = new HelperFunctions()
    }

    setValues(object) {
        this.#_name = object && object.name ? object.name : ''
        this.#_description = object && object.description ? object.description : ''
    } 

    async saveData() {
        const result = await this.#_db.query(String.raw`
            INSERT INTO vehicle_type (vehicle_type_id, name, description, status, date_time)
            VALUES(?, ?, ?, ?)
        `, [this.#_hp.getTimeStamp(), this.#_name, this.#_description, 'active', this.#_hp.getDateTime()])
    }
}