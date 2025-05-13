// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #1: Click event

// Fetch elements
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputBox = document.querySelector(".output");

// Add event listener
copyButton.addEventListener("click", () => {
  outputBox.textContent = userInput1.value;
});

// Exercise #2: Input event

// Fetch elements
const userInput2 = document.getElementById("userInput2");

// Create output element and add to DOM
const liveOutput = document.createElement("div");
liveOutput.className = "output";
document.querySelector("#inputEventExample").appendChild(liveOutput);

// Add event listener
userInput2.addEventListener("input", () => {
  liveOutput.textContent = userInput2.value;
});
