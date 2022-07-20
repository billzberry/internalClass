const HelperFunctions = require("../modules/Index.module")



class VehicleTypeModel {
    #_id
    #_name
    #_description
    #_status
    #_dateTime
    #_sessionId
    #_db
    #_hf

    constructor(Database, Id) {
        this.#_hf = new HelperFunctions()
        this.#_id = Id ? Id : this.#_hf.getTimeStamp()
        this.#_db = Database
        this.#_name = ''
        this.#_description = ''
        this.#_status = 'active'
        this.#_dateTime = this.#_hf.getDateTime()
        this.#_sessionId = this.#_hf.getTimeStamp()
    }

    setValues(object) {
        this.#_id = object && object.vehicle_type_id ? object.vehicle_type_id : this.#_id
        this.#_name = object && object.name ? object.name : ''
        this.#_description = object && object.description ? object.description : ''
        this.#_status = object && object.status ? object.status : this.#_status
        this.#_dateTime = object && object.date_time ? object.date_time : this.#_dateTime
        this.#_sessionId = object && object.session_id ? object.session_id : this.#_sessionId
    }

    async getSelf() {
        const result = await this.get({
            whereClause: 'vehicle_type_id = ?',
            order: '',
            limit: 1,
            offset: 0,
            columns: [this.#_id]
        })
        
        if (result && Array.isArray(result) && result.length > 0) {
            this.setValues(result[0])
        }

        return {
            vehicle_type_id: this.#_id,
            name: this.#_name,
            description: this.#_description,
            status: this.#_status,
            date_time: this.#_dateTime,
            session_id: this.#_sessionId
        }
    }

    async insertData() {
        const result = await this.#_db.query(String.raw`
            INSERT INTO vehicle_type (vehicle_type_id, name, description, status, date_time, session_id)
            VALUES(?, ?, ?, ?, ?)
        `, [this.#_id, this.#_name, this.#_description, this.#_status, this.#_dateTime, this.#_sessionId])
        return result
    }

    async updateData(fields, columns, whereClause) {
        const result = await this.#_db.query(String.raw`
            UPDATE vehicle_type SET ${fields} WHERE ${whereClause}
        `, columns)
        return result
    }

    async deleteData(whereClause, columns) {
        const result = await this.#_db.query(String.raw`
            UPDATE vehicle_type SET status = 'inactive' WHERE ${whereClause}
        `, columns)
        return result
    }

    /**
     * 
     * @param {object} object - {whereClause, order, limit, offset, columns}
     * @param {string} object.whereClause - SQL where clause statement eg. name = ?
     * @param {string} object.order - SQL order by clause eg. ORDER BY name ASC
     * @param {number} object.limit - SQL LIMIT clause statement eg. LIMIT 10
     * @param {number} object.offset - SQL OFFSET clause statement eg. OFFSET 0
     * @param {array} object.columns - SQL ??? values eg. ['value', 'active']
     * @returns 
     */
    async get(object) {
        const result = await this.#_db.query(String.raw`
            SELECT * FROM vehicle_type 
            WHERE ${object.whereClause} 
            ${object.order} 
            LIMIT ${object.limit ? object.limit : 10} OFFSET ${object.offset ? object.offset : 0}
        `, object.columns)
        return result
    }
}

module.exports = VehicleTypeModel