import { LitElement, html } from "./lit-core.min.js";

class Third extends LitElement {
    createRenderRoot() {
        return this; // turn off shadow dom to access external css with bundler configuration
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
        <div class="bg-slate-600 text-center text-white">Hello World</div>
        <h1 class="bg-slate-900 text-gray-400 text-3xl font-bold underline">
        Title
        </h1>
        `
    }
}
customElements.define("my-third",Third)