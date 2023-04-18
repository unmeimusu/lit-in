import { LitElement, html } from "./lit-all.min.js";

class Second extends LitElement {
    render() {
        return html`
        <span>expanded.<span>
        `
    }
}

customElements.define("my-second",Second)