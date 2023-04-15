import { LitElement, html } from "./lit-core.min.js";

class Fourth extends LitElement {
    static properties = {
        name: {},
    }

    constructor() {
        super()
        this.name = "Your name"
    }

    render() {
        return html`
        <p>Hello, ${this.name}</p>
        <input @input=${this.changeName} placeholder="Enter your name">
        `
    }

    changeName(evnt) {
        const input = evnt.target
        this.name = input.value
    }
}

customElements.define("my-fourth",Fourth)