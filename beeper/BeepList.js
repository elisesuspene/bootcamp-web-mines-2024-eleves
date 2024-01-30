import { html, css, LitElement } from "lit";

class BeepList extends LitElement {
  static properties = {
    beeps: { type: Array },
  };

  constructor() {
    // Always call super first in constructor
    super();

    this.beeps = [];
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        ${this.beeps.map(
          (beep) =>
            html`<m-beep
              message="${beep.message}"
              author="${beep.author}"
              date="${beep.date}"
              likes="${beep.likes}"
            ></m-beep>`
        )}
      </div>
    `;
  }
}

customElements.define("m-beep-list", BeepList);
