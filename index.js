/**
 * Vehicle
 * Type
 * Destination
 * Traveller
 * 
 */
import Vehicle from "./Vehicle.js"


(() => {

    const form = document.getElementById('add_vehicle_form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const vehicle_type = document.getElementById('vehicle_type').value
        const vehicle_type_description = document.getElementById('vehicle_type_description').value
        const vehicle_year_model = document.getElementById('vehicle_year_model').value
        const vehicle_color = document.getElementById('vehicle_color').value
        const vehicle_engine = document.getElementById('vehicle_engine').value
        const vehicle_brand = document.getElementById('vehicle_brand').value

        const myCar = new Vehicle()
        myCar.setData({
            vehicleType: {
                type: vehicle_type,
                description: vehicle_type_description
            },
            yearModel: vehicle_year_model,
            color: vehicle_color,
            engineCapacity: vehicle_engine,
            brand: vehicle_brand
        })

        displayVehicles()
    })


    function displayVehicles () {
        const Cars = new Vehicle()
        const data = Cars.getAll()
        let html = ''
        if (Array.isArray(data) && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const item = data[i]
                html += String.raw`
                    <tr>
                        <td> ${item.vehicleType.type} </td>
                        <td> ${item.vehicleType.description} </td>
                        <td> ${item.yearModel} </td>
                        <td> ${item.color} </td>
                        <td> ${item.engineCapacity} </td>
                        <td> ${item.brand} </td>
                    </tr>
                `
            }
        } else {
            html = String.raw`
                <tr> <td colspan="6"> No data found </td> </tr>
            `
        }

        const tableBody = document.getElementById('table_body')
        tableBody.innerHTML = html
    }

})()