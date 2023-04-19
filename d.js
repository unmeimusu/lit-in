import { LitElement, html, unsafeCSS, css } from "./lit-all.min.js";
import * as styles2 from "./pico.css" assert { type: "css" }

class Fourth extends LitElement {
    static properties = {
        name: {},
    }

    static styles = [unsafeCSS(styles2)]
  
    constructor() {
        super()
        this.name = "Your name" // reactive property
    };
    
    render() {
        return html`
        <p>Hello, ${this.name}</p>
        <input @input=${this.changeName} placeholder="Enter your name">
<!-- Button to trigger the modal -->
<button class="contrast"
  data-target="modal-example"
  onClick="toggleModal(event)">
  Launch demo modal
</button>

<!-- Modal -->
<dialog id="modal-example">
  <article>
    <a href="#close"
      aria-label="Close"
      class="close"
      data-target="modal-example"
      onClick="toggleModal(event)">
    </a>
    <h3>Confirm your action!</h3>
    <p>
      Cras sit amet maximus risus. 
      Pellentesque sodales odio sit amet augue finibus pellentesque. 
      Nullam finibus risus non semper euismod.
    </p>
    <footer>
      <a href="#cancel"
        role="button"
        class="secondary"
        data-target="modal-example"
        onClick="toggleModal(event)">
        Cancel
      </a>
      <a href="#confirm"
        role="button"
        data-target="modal-example"
        onClick="toggleModal(event)">
        Confirm
      </a>
    </footer>
  </article>
</dialog>
        `
    }

    changeName(evnt) {
        const inpt = evnt.target
        this.name = inpt.value
    }
}
customElements.define("my-fourth",Fourth)