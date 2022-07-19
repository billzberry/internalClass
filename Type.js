
const AllVehicleTypes = []

class VehicleType {
    #_type
    #_description

    constructor() {
        this.#_type = ''
        this.#_description = ''
    }

    setName(value) {
        this.#_type = value
    }

    setDescrition(value) {
        this.#_description = value
        this.#_saveData()
    }

    #_saveData() {
        if (AllVehicleTypes.length > 0) {
            for (let i = 0; i < AllVehicleTypes.length; i++) {
                if (AllVehicleTypes[i].type == this.#_type || AllVehicleTypes[i].description == this.#_description) {
                    AllVehicleTypes[i].type = this.#_type
                    AllVehicleTypes[i].description = this.#_description
                } else {
                    AllVehicleTypes.push({
                        type: this.#_type,
                        description: this.#_description
                    })
                }
            }
        } else {
            AllVehicleTypes.push({
                type: this.#_type,
                description: this.#_description
            })
        }
    }

    getName() {
        return this.#_type
    }

    getDescription() {
        return this.#_description
    }

    get(value) {
        return AllVehicleTypes.filter(item => JSON.stringify(item).includes(value))
    }

    getAll() {
        return AllVehicleTypes
    }
}

export default VehicleType
