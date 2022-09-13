

class CardList extends HTMLElement {

    constructor() {
        super()

        this.attachShadow({ mode: 'open' })

        this.#addHtml()
    }

    connectedCallback() {
        this.#getData()
    }

    async #addHtml() {
        let html = ''
        const fetchedData = await this.#getData()
        if (fetchedData && fetchedData.users.length > 0) {
            for (let i = 0; i < fetchedData.users.length; i++) {
                const item = fetchedData.users[i]
                html += (String.raw`
                    <div class="column">
                        <card-cp 
                            image="${item.image}" 
                            title="${item.firstName} ${item.lastName}" 
                            subtitle="${item.university}" 
                            phone="${item.phone}" 
                            email="${item.email}" 
                            address="${item.address.address}"></card-cp>
                    </div>
                `)
            }

        } else {
            html = (String.raw`
                <h1>No data found</h1>
            `)
        }

        const template = document.createElement('template')
        template.innerHTML = (String.raw`
            <link rel="stylesheet" href="CardList.css">
            <div class="row">
                ${html}
            </div>
        `)
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    #getData() {
        return new Promise((resolve, reject) => {
            fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                console.log('Error: ', error)
                reject(error)
            })
        })
    }
}

(() => {

    customElements.define('card-list', CardList)

})()