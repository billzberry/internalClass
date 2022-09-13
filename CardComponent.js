

class Card extends HTMLElement {

    constructor() {
        super()

        this.attachShadow({ mode: 'open'})

        this.#addHtml()
    }

    #addHtml() {
        const template = document.createElement('template')
        template.innerHTML = (String.raw`
            <link rel="stylesheet" href="CardComponent.css">
            <div class="card">
                <div class="imageHolder">
                    <img src="${this.getAttribute('image')}" alt="card image">
                </div>

                <h1 class="cardTitle"> ${this.getAttribute('title')} </h1>
                <p class="cardSubTitle"> ${this.getAttribute('subtitle')} </p>

                <ul class="cardDetails">
                    <li><b>Phone Number: </b> ${this.getAttribute('phone')} </li>
                    <li><b>Email: </b> ${this.getAttribute('email')} </li>
                    <li><b>Address: </b> ${this.getAttribute('address')} </li>
                </ul>

                <button type="button" class="cardButton">Show Details</button>
            </div>
        `)
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


(() => {

    customElements.define('card-cp', Card)

})()