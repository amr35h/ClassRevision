// console.log(window); //Works on browser not on nodejs

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBackgroundColor("black");
    themeBtn.innerText = "Light Mode";
  } else {
    changeBackgroundColor("white");
    themeBtn.innerText = "Dark Mode";
  }
});

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
