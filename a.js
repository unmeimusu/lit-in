import {LitElement, html, css} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"

export class Timer extends LitElement {
    static properties = {
        v: {}
    }

    static styles = css`
    :host {
        color: blue
    }
    `

    constructor() {
        super()
        this.v = "World"
    }

    render() {
        return html`
        <p>Hello ${this.v} page.<p>
        `;
    }
}
customElements.define('my-timer',Timer)