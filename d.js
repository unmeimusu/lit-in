import { LitElement, html } from "./lit-core.min.js";

class Fourth extends LitElement {
    static properties = {
        name: {},
    }

    constructor() {
        super()
        this.name = "Your name" // reactive property
    }

    render() {
        return html`
        <p>Hello, ${this.name}</p>
        <input @input=${this.changeName} placeholder="Enter your name">
        `
    }

    changeName(evnt) {
        const inpt = evnt.target
        this.name = inpt.value
    }
}
customElements.define("my-fourth",Fourth)