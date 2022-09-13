

(() => {

    const userForm = document.getElementById('userForm')

    const formSubmit = (e) => {
        e.preventDefault()

        const firstName = document.getElementById('firstName')
        const lastName = document.getElementById('lastName')
        const dob = document.getElementById('dob')
        const phone = document.getElementById('phone')
        const email = document.getElementById('email')
        const address = document.getElementById('address')

        if (firstName && lastName && dob && email) {

            saveData({
                firstName: firstName.value, 
                lastName: lastName.value, 
                dob: dob.value, 
                phone: phone.value, 
                email: email.value, 
                address: address.value
            })

            drawTable()

            firstName.value = ''
            lastName.value = ''
            dob.value = ''
            phone.value = ''
            email.value = ''
            address.value = ''

            alert('User data is saved successfully !')

        } else {
            alert('Some fields are required!')
        }
    }

    userForm.addEventListener('submit', formSubmit)

    const saveData = (data) => {
        let result = window.localStorage.getItem('userData')
        if (result) {
            const oldData = JSON.parse(result)
            oldData.push(data)
            window.localStorage.removeItem('userData')
            window.localStorage.setItem('userData', JSON.stringify(oldData))
        } else {
            const userData = [data]
            window.localStorage.setItem('userData', JSON.stringify(userData))
        }
    }

    const deleteDataFromLocalStorage = (value) => {
        let userdata = window.localStorage.getItem('userData')
        if (userdata) {
            userdata = JSON.parse(userdata)
            const result = []
            for (let i = 0; i < userdata.length; i++) {
                const item = userdata[i]
                if (JSON.stringify(item) != value) {
                    result.push(item)
                }
            }
            window.localStorage.removeItem('userData')
            window.localStorage.setItem('userData', JSON.stringify(result))
            drawTable()
        }
    }

    const deleteRecord = (e) => {
        e.preventDefault()
        console.log(e.target.dataset.userdata)
        deleteDataFromLocalStorage(e.target.dataset.userdata)
    }

    const buttonEvents = () => {
        const userTableBtns = document.getElementsByClassName('userTableBtn')
        for (let i = 0; i < userTableBtns.length; i++) {
            const element = userTableBtns[i]
            element.addEventListener('click', deleteRecord)
        }
    }

    const drawTable = () => {
        let html = ''
        let data = window.localStorage.getItem('userData')
        if (data) {
            data = JSON.parse(data)
            if (Array.isArray(data) && data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    const item = data[i]
                    html += (String.raw`
                        <tr>
                            <td> ${i + 1} </td>
                            <td> ${item.firstName} ${item.lastName} </td>
                            <td> ${item.dob} </td>
                            <td> ${item.phone} </td>
                            <td> ${item.email} </td>
                            <td> ${item.address} </td>
                            <td>
                                <button type="button" class="btn btn-danger userTableBtn" data-userdata='${JSON.stringify(item)}'> delete </button>
                            </td>
                        </tr>
                    `)
                }
            } else {
                html = `
                    <tr>
                        <td colspan="7"> No data found </td>
                    </tr>
                `
            }
        } else {
            html = `
                <tr>
                    <td colspan="7"> No data found </td>
                </tr>
            `
        }

        const userTableBody = document.getElementById('userTableBody')
        userTableBody.innerHTML = html
        buttonEvents()
    } 

    drawTable()

})()