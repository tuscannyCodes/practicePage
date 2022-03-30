// this is lesson 1\/
// THESE ARE VARIABLES*****
const MainButton = document.getElementById("MainButton");
const MainText = document.getElementById("MainText");
const MainDiv = document.getElementById("MainDiv");
const MainTextContainer = document.getElementById("MainTextContainer");
const ButtonAndDiv = document.getElementById("ButtonAndDivContainer");
// console.log(MainDiv)

// lets try to change the text?

// THESE ARE FUNCTIONS*****

function colorAndShapeChange() {
  MainDiv.style.backgroundColor = "cadetblue";
  MainDiv.style.borderRadius = "50px";
  // this is lesson 1 ^
  // this is lesson 2\/
  MainText.innerHTML = "what is your name?";
  const inputBox = document.createElement("input");
  inputBox.className = "InputBox";
  MainTextContainer.appendChild(inputBox);

  // add another button and remove the old one
  ButtonAndDiv.removeChild(MainButton);
  const SecondButton = document.createElement("button");
  SecondButton.className = "MainButton";
  ButtonAndDiv.appendChild(SecondButton);
  SecondButton.innerHTML = "ENTER";
  // This is lesson 2 ^
  // how can we change the MainText?
  // how can we make the MainDiv larger instead of a circle?
}

// These are Event Listeners

MainButton.addEventListener("click", colorAndShapeChange);
