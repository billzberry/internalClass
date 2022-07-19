import VehicleType from "./Type.js";

const allVehicles = []

class Vehicle extends VehicleType {
    #_vehicleType
    #_yearModel
    #_color
    #_engineCapacity
    #_brand

    constructor() {
        super()

        this.#_vehicleType = {type: '', description: ''}
        this.#_yearModel = ''
        this.#_color = ''
        this.#_engineCapacity = ''
        this.#_brand = ''
    }

    setData(data) {
        this.setName(data.vehicleType.type)
        this.setDescrition(data.vehicleType.description)
        allVehicles.push(data)
    }
    
    get(value) {
        return allVehicles.filter(item => JSON.stringify(item).includes(value))
    }

    getAll() {
        return allVehicles
    }
}


export default Vehicle

