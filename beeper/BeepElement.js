class BeepElement extends HTMLElement {
  static observedAttributes = ["message", "author", "date", "likes"];

  constructor() {
    // Always call super first in constructor
    super();

    const beepTemplate = document.querySelector("#beep-template");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(beepTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`, oldValue, newValue);

    if (name === "message") {
      // Set message value in beep instance
      const beepMessage = this.shadowRoot.querySelector(".beep-message");
      beepMessage.textContent = newValue;
    } else if (name === "author") {
      // Set author value in beep instance
      const beepAuthor = this.shadowRoot.querySelector(".beep-author");
      beepAuthor.textContent = newValue;
    } else if (name === "date") {
      // Set date value in beep instance
      const beepDate = this.shadowRoot.querySelector(".beep-date");
      beepDate.textContent = newValue;
    } else if (name === "likes") {
      // Set likes value in beep instance
      const beepLikes = this.shadowRoot.querySelector(".beep-likes");
      beepLikes.textContent = newValue;
    }
  }
}

customElements.define("m-beep", BeepElement);
