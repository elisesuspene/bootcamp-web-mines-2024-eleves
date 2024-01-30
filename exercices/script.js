console.log("Hello World!");

function handleInput(event) {
  const value = event.target.value;

  if (value === "alert") {
    alert("Alerte 2 !");
  }
}

const messageInput = document.querySelector("#message");
messageInput.addEventListener("input", handleInput);

const labels = document.querySelectorAll("label");
labels.forEach((label) => {
  label.textContent = "Test";
  label.style.color = "red";
});

const beepsDiv = document.querySelector("#beeps");
const creerButton = document.querySelector("#creer");
const beepTemplate = document.querySelector("#beep-template");

creerButton.addEventListener("click", () => {
  beepsDiv.prepend(beepTemplate.content.cloneNode(true));
});

// ******************* //

const form = document.querySelector("#add-beep-form");

form.addEventListener("submit", (event) => {
  // Prevent form from being sent and page to reload
  event.preventDefault();

  // Get message value from form
  const formData = new FormData(event.target);
  const message = formData.get("message");

  const beepInstance = beepTemplate.content.cloneNode(true);

  // Set message value in beep instance
  const beepMessage = beepInstance.querySelector(".beep-message");
  beepMessage.textContent = message;

  // Add beep to list
  beepsDiv.prepend(beepInstance);

  // Reset form
  event.target.reset();
});

// form.addEventListener("submit", (event) => {
//   // Prevent form from being sent and page to reload
//   event.preventDefault();

//   // Get message value from form
//   const formData = new FormData(event.target);

//   fetch("http://localhost:3000/beeps", {
//     method: "POST",
//     body: formData,
//   }).then((response) => {
//     if (!response.ok) {
//       console.error("Error while sending beep", response);
//       return;
//     }

//     response.json().then((data) => {
//       const message = data.content;

//       const beepInstance = beepTemplate.content.cloneNode(true);

//       // Set message value in beep instance
//       const beepMessage = beepInstance.querySelector(".beep-message");
//       beepMessage.textContent = message;

//       // Add beep to list
//       beepsDiv.prepend(beepInstance);

//       // Reset form
//       event.target.reset();
//     });
//   });
// });

// form.addEventListener("submit", async (event) => {
//   // Prevent form from being sent and page to reload
//   event.preventDefault();

//   // Get message value from form
//   const formData = new FormData(event.target);

//   const response = await fetch("http://localhost:3000/beeps", {
//     method: "POST",
//     body: formData,
//   });

//   if (!response.ok) {
//     console.error("Error while sending beep", response);
//     return;
//   }

//   const data = await response.json();

//   const message = data.content;

//   const beepInstance = beepTemplate.content.cloneNode(true);

//   // Set message value in beep instance
//   const beepMessage = beepInstance.querySelector(".beep-message");
//   beepMessage.textContent = message;

//   // Add beep to list
//   beepsDiv.prepend(beepInstance);

//   // Reset form
//   event.target.reset();
// });

function slowResponse(request) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(request), 2000);
  });
}

function quickResponse(request) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(request), 100);
  });
}

function immediateResponse(request) {
  return new Promise((resolve) => {
    resolve(request);
  });
}

async function fakeFetch() {
  console.log("Start fetching");

  const immediate = await immediateResponse("Immediate");
  console.log(immediate);

  const slow = await slowResponse("Slow");
  console.log(slow);

  const quick = await quickResponse("Quick");
  console.log(quick);

  console.log("End fetching");
}

console.log("Call fakeFetch");
fakeFetch();
console.log("End fakeFetch");
