import { html, css, LitElement } from "lit";
import formatDistanceToNow from "formatDistanceToNow";

class BeepElement extends LitElement {
  static properties = {
    message: { type: String },
    author: { type: String },
    date: { type: Date },
    likes: { type: Number },
  };

  constructor() {
    // Always call super first in constructor
    super();

    this.author = "";
    this.date = new Date();
    this.message = "";
    this.likes = 0;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="card mb-3">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary">
            ${this.author} - ${formatDistanceToNow(this.date)}
          </h6>
          <p class="card-text">${this.message}</p>
          <span>${this.likes} like(s)</span>
          <a href="#" class="card-link">Liker</a>
          <a href="#" class="card-link">Répondre</a>
        </div>
      </div>
    `;
  }
}

customElements.define("m-beep", BeepElement);
