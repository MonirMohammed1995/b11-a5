let increaseText = document.getElementById("increaseText");
let decreaseText = document.getElementById("decreaseText");
let title = document.querySelectorAll(".title");
let buttons = document.querySelectorAll(".actionBtn");

function addMsg() {
  let container = document.getElementById("msgBox");
  let currentTime = new Date().toLocaleTimeString();
  const p = document.createElement("p");
  p.innerText = `You have Complete The Task ${title} at ${currentTime}`;
  container.appendChild(p);
}

function checkAllDisabled() {
  let allDisabled = Array.from(buttons).every((button) => button.disabled);
  if (allDisabled) {
    alert("All Task are done successfully");
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    increaseText.innerText = parseInt(increaseText.innerText) + 1;
    decreaseText.innerText = parseInt(decreaseText.innerText) - 1;
    button.disabled = true;
    alert("Updated Successfully");
    checkAllDisabled();
    addMsg();
  });
});

p = document.getElementById("msgBox");
const removeTextBtn = document.getElementById("clearText");

clearText.addEventListener("click", function () {
  p.innerText = ""; // Remove the text
});
