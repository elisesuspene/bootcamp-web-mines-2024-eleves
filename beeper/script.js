const beepsData = [
  {
    message: "Hello world!",
    author: "Lui",
    date: new Date(),
    likes: 10,
  },
  {
    message: "Hello world 2!",
    author: "Lui",
    date: new Date(),
    likes: 13,
  },
  {
    message: "Hello world 3!",
    author: "Lui",
    date: new Date(),
    likes: 16,
  },
  {
    message: "Hello world 4!",
    author: "Lui",
    date: new Date(),
    likes: 18,
  },
];

const beepsDiv = document.querySelector("#beeps");
const beepTemplate = document.querySelector("#beep-template");
const form = document.querySelector("#add-beep-form");

const beepList = document.createElement("m-beep-list");
updateList();

beepsDiv.prepend(beepList);

function updateList() {
  beepList.setAttribute("beeps", JSON.stringify(beepsData));
}

form.addEventListener("submit", (event) => {
  // Prevent form from being sent and page to reload
  event.preventDefault();

  // Get message value from form
  const formData = new FormData(event.target);
  const message = formData.get("message");

  beepsData.splice(0, 0, {
    message: formData.get("message"),
    author: "Moi",
    date: new Date(),
    likes: Math.round(Math.random() * 100),
  });

  updateList();

  // Reset form
  event.target.reset();
});
