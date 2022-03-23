// THESE ARE VARIABLES*****

const MainButton = document.getElementById("MainButton");

// console.log(MainButton)

const MainDiv = document.getElementById("MainDiv");

// console.log(MainDiv)

// lets try to change the text?

// THESE ARE FUNCTIONS*****

function colorAndShapeChange() {
  MainDiv.style.backgroundColor = "cadetblue";
  MainDiv.style.borderRadius = "50px";
  
  // how can we change the MainText?
   // how can we make the MainDiv larger instead of a circle?    
}

// These are Event Listeners

MainButton.addEventListener("click", colorAndShapeChange);
