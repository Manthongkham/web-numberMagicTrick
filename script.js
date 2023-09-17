document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const outputElement = document.getElementById("output");
  const inputElement = document.getElementById("numberInput");
  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    // Get the original number from the user input
    const secretNum = parseInt(inputElement.value);

    // Check if the input is a valid number
    if (isNaN(secretNum)) {
      outputElement.innerHTML = "Please enter a valid integer.";
      return;
    }

    // Start the magic trick
    let placeHolder = secretNum * 5;
    outputElement.innerHTML = `We'll multiply by 5 and get ${placeHolder}<br>`;

    placeHolder += 35;
    outputElement.innerHTML += `Then we'll add 35 and get ${placeHolder}<br>`;

    placeHolder /= 5;
    outputElement.innerHTML += `Then we'll divide by 5 and get ${placeHolder}<br>`;

    placeHolder -= secretNum;
    outputElement.innerHTML += `Then we'll subtract the original number and get ${Math.floor(placeHolder)}. Amazing!!!`;
  });
});
