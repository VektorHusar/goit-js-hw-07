const randomColor = document.querySelector("body");
const randomColorButton = document.querySelector(".widget button");
const colorDisplay = document.querySelector(".widget .color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

randomColorButton.addEventListener("click", () => {
    const color = getRandomHexColor();
    colorDisplay.textContent = color;
    randomColor.style.backgroundColor = color;
});