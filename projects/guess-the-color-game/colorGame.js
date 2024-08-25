let numCircles = 6;
let colors = [];
let pickedColor;
let circles = document.querySelectorAll(".circle");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

init();

function init() {
  setupModeButtons();
  setupCircles();
  reset();
}

function setupModeButtons() {
  //figure out how many circles
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numCircles = 3) : (numCircles = 6);
      //update page to reflect changes
      reset();
    });
  }
}

function setupCircles() {
  for (let i = 0; i < circles.length; i++) {
    // add click listeners to circles
    circles[i].addEventListener("click", function() {
      // grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#fff";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numCircles);
  // pick a new random color
  pickedColor = pickColor();
  // change colorDissplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of circles
  for (var i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.display = "block";
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all circles, change all to give color
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //add num random colors to arr
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  //return arr
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to 255
  let r = Math.floor(Math.random() * 256);
  //pick a "red" from 0 to 255
  let g = Math.floor(Math.random() * 256);
  //pick a "red" from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
