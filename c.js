import { LitElement, html } from "./lit-core.min";

export class Third extends LitElement {
    render() {
        return html`
        <div>List item</div>
        <ul>
            <li>First list</li>
            <li>Second list</li>
            <li>Third list</li>
        </ul>
        `
    }
}

customElements.define("my-third",Third)