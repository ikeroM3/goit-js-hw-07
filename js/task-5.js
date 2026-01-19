const btn = document.querySelector(".change-color");
const out = document.querySelector(".color");
const body = document.body;
btn.addEventListener("click", (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const color = getRandomHexColor();

  out.textContent = color;
  body.style.backgroundColor = color;
});
