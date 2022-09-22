
(() => {

    const displayData = (data) => {
        const profileListDiv = document.getElementById('profileListDiv')
        profileListDiv.innerHTML = ''
        let html = ''
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const user = data[i]
                html += `
                    <div class="col-md-3 col-12 mb-4">
                        <div class="card">
                            <img src="${user.image}" class="card-img-top" alt="user profile picture">
                            <div class="card-body">
                                <h5 class="card-title"> ${user.firstName} ${user.lastName} </h5>
                                <p class="card-text"> ${user.email} </p>
                                <p class="card-text"> ${user.phone} </p>
                                <p class="card-text"> ${user.address.address}, ${user.address.city} - ${user.address.state} </p>
                                <a href="#" class="btn btn-primary" data-userid="${user.id}">View Profile</a>
                            </div>
                        </div>
                    </div>
                `
            }
        } else {
            html = `
                <div class="col-12 mb-4">
                    <h4> No data found </h4>
                </div>
            `
        }
        profileListDiv.innerHTML = html
    }

    let skip = 0
    let listData = []
    
    const fetchData = async (value) => {
        fetch(value ? `https://dummyjson.com/users/search?q=${value}` : `https://dummyjson.com/users?skip=${skip}&limit=12`)
        .then((response) => response.json())
        .then((result) => {
            if (value) {
                listData = result.users
            } else {
                listData = [...listData, ...result.users]
            }
            skip = skip + Number(result.limit) + 1
            displayData(listData)
        })
        .catch((error) => {
            console.log('Error: ', error)
        })
    }

    fetchData()

    let checkTime

    const filterUsers = (e) => {
        clearTimeout(checkTime)
        const value = e.target.value
        checkTime = setTimeout(() => {
            fetchData(value)
        }, 1000)
        
    }

    const searchBox = document.getElementById('searchBox')
    searchBox.addEventListener('keyup', filterUsers)

    let height = 0

    const onScroll = (e) => {
        let scrollY = e.target.scrollTop
        if (scrollY > 1000 && scrollY > height) {
            height += scrollY
            fetchData()
        }
    }

    const mainProfileContainer = document.getElementById('mainProfileContainer')
    mainProfileContainer.addEventListener('scroll', onScroll)

})()