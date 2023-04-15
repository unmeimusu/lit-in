import { LitElement, html } from "./lit-core.min.js";

export class Third extends LitElement {
    createRenderRoot() {
        return this; // turn off shadow dom to access external css with bundler configuration (rollup,vite) or tailwind-cli
    }
    render() {
        return html`
        <div>List item</div>
        <ul>
            <li>First list</li>
            <li>Second list</li>
            <li>Third list</li>
        </ul>

        <!-- Dropdown -->
        <details>
        <summary>Dropdown</summary>
        <ul>
            <li><a>Action</a></li>
            <li><a>Another action</a></li>
            <li><a>Something else here</a></li>
        </ul>
        </details>

        <!-- Select -->
        <select>
        <option value="" disabled selected>Select</option>
        <option>…</option>
        </select>

        <!--Tailwind Integration-->
        <div class="bg-red text-center">Hello World</div>
        <h1 class="text-3xl font-bold underline">
        Title
        </h1>
        `
    }
}

customElements.define("my-third",Third)