function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  
  // Змінюємо колір фону body
  body.style.backgroundColor = randomColor;
  
  // Встановлюємо текст у span з класом "color"
  colorSpan.textContent = randomColor;
});