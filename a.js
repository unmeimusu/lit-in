import {LitElement, html, css} from "./lit-all.min.js"

class FirstTime extends LitElement {
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
customElements.define('my-start',FirstTime)