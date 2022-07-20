const VehicleTypeModel = require("../models/VehicleType.model")
const HelperFunctions = require("../modules/Index.module")



class VehicleTypeController {
    #_db
    #_req
    #_res
    #_method
    #_hf
    #_table

    constructor(Database, Request, Response, Method) {
        this.#_db = Database
        this.#_req = Request
        this.#_res = Response
        this.#_method = Method
        this.#_hf = new HelperFunctions()
        this.#_table = new VehicleTypeModel(this.#_db)
        this.#__init__()
    }

    #__init__() {
        if (this.#_method === 'GET') {

            this.#_getHandler()

        } else if (this.#_method === 'POST') {
            
            this.#_postHandler()

        } else if (this.#_method === 'PUT') {
            
            this.#_putHandler()

        } else if (this.#_method === 'DELETE') {
            
            this.#_deleteHandler()

        } else {
            this.#_res.json({
                status: 'invalid',
                message: 'Invalid request'
            })
        }
    }

    async #_getHandler() {
        /**
         * http://localhost:4000/vehicle-type?limit=100&offset=0&where=status-active,vehicle_type_id-12345&order=name-asc,date_time-desc
         * {
         *  "limit":"100",
         *  "offset":"0",
         *  "where":"status-active,vehicle_type_id-12345",
         *  "order":"name-asc,date_time-desc"
         * }
         */
        const params = this.#_req.query
        const whereClause = this.#_hf.getParams(params.where, params.order)
        const VehicleType = new VehicleTypeModel(this.#_db)
        const result = await this.#_table.get({
            whereClause: whereClause.sql ? whereClause.sql : 'status = ?',
            order: whereClause.orderBy ? whereClause.orderBy : '',
            limit: params.limit ? params.limit : 10,
            offset: params.offset ? params.offset : 0,
            columns: whereClause.columns.length > 0 ? whereClause.columns : ['active']
        })
        this.#_res.json({
            status: 'ok',
            data: result
        })
    }

    async #_postHandler() {
        const data = this.#_req.body
        let message = ''
        //Check if there is a value for 'data.name' 
        if (this.#_requiredFields()) {
            //Check for existence
            let result = await this.#_checkExistence(false)
            if (result) {
                message = 'Name of vehicle type already exist!'
            } else {
                this.#_table.setValues({
                    name: data.name,
                    description: data.description
                })
                result = await this.#_table.insertData()
                if (result && result.affectedRows) {
                    message = 'Vehicle type has been inserted successfully!'
                } else {
                    message = 'Could not insert vehicle type!'
                }
            }
        } else {
            message = 'Name of vehicle type is required!'
        }

        this.#_res.json({status: 'ok', message: message})
    }

    async #_putHandler() {
        const data = this.#_req.body
        let message = ''
        //Check if there is a value for 'data.name' 
        if (this.#_requiredFields()) {
            //Check for existence
            if (!this.#_checkExistence(true)) {
                message = 'Name of vehicle type already exist!'
            } else {
                let result = await this.#_table.updateData(
                    'name = ?, description = ?', 
                    [data.name, data.description, data.hiddenid ? data.hiddenid : 0], 
                    'vehicle_type_id = ?')
                if (result && result.affectedRows) {
                    message = 'Vehicle type has been updated successfully!'
                } else {
                    message = 'Could not update vehicle type!'
                }
            }
        } else {
            message = 'Name of vehicle type is required!'
        }

        this.#_res.json({status: 'ok', message: message})
    }

    async #_deleteHandler() {
        let id = this.#_req.body.id
        id = id ? id : 0
        let message = ''
        let result = await this.#_table.updateData(
            'status = ?', 
            ['inactive', id], 
            'vehicle_type_id = ?')
        if (result && result.affectedRows > 0) {
            message = 'Vehicle type has been deleted successfully!'
        } else {
            message = 'Could not delete vehicle type!'
        }

        this.#_res.json({status: 'ok', message: message})
    }

    #_requiredFields() {
        const data = this.#_req.body
        return data && data.name
    }

    async #_checkExistence(withId) {
        const data = this.#_req.body
        const hiddenid = data.hiddenid ? data.hiddenid : 0
        let result = await this.#_table.get({
            whereClause: `name = ? ${withId ? 'AND vehicle_type_id != ?' : ''} AND status = ?`, 
            columns: withId ? [data.name, hiddenid, 'active'] : [data.name, 'active']
        })
        return Array.isArray(result) && result.length > 0
    }
}

module.exports = VehicleTypeController