const beepsDiv = document.querySelector("#beeps");
const beepTemplate = document.querySelector("#beep-template");
const form = document.querySelector("#add-beep-form");

form.addEventListener("submit", (event) => {
  // Prevent form from being sent and page to reload
  event.preventDefault();

  // Get message value from form
  const formData = new FormData(event.target);
  const message = formData.get("message");

  const beepElement = document.createElement("m-beep");
  beepElement.setAttribute("author", "Moi");
  beepElement.setAttribute("date", new Date().toISOString());
  beepElement.setAttribute("message", message);
  beepElement.setAttribute("likes", Math.round(Math.random() * 100));

  // Add beep to list
  beepsDiv.prepend(beepElement);

  // Reset form
  event.target.reset();
});
