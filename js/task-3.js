const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (input.value.trim() === "" || input.value.trim() === " ") {
    output.textContent = "Anonymous";
  }
});
