import { LitElement, html } from "./lit-core.min";

export class Second extends LitElement {
    render() {
        return html`
        <span>expanded.<span>
        `
    }
}

customElements.define("my-second",Second)