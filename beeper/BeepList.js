import { html, css, LitElement } from "lit";

class BeepList extends LitElement {
  static properties = {
    beeps: { type: {} },
  };

  constructor() {
    // Always call super first in constructor
    super();

    this.beeps = [
      {
        message: "Hello world!",
        author: "Lui",
        date: new Date(),
        likes: 10,
      },
    ];
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
