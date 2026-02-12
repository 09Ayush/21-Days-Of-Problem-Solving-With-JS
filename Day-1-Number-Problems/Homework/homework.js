const homework1 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("homework1-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("homework1-div");

  if (isNaN(inputValue)) {
    return;
  }
  let result = [];
  for (let i = 1; i <= inputValue; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push(i);
    }
  }

  displayDiv.textContent =
    result.length > 0 ? result.join(" - ") : "No numbers found.";
  inputElement.value = "";
};

// Link the function to the form
document.getElementById("homework1-form").addEventListener("submit", homework1);

const homework2 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("homework2-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("homework2-div");

  if (isNaN(inputValue)) {
    return;
  }
  let result = [];
  for (let i = 1; i <= inputValue; i++) {
    if (i % 2 != 0) {
      result.push(i);
    }
  }

  displayDiv.textContent =
    result.length > 0 ? result.join(" - ") : "No numbers found.";
  inputElement.value = "";
};

// Link the function to the form
document.getElementById("homework2-form").addEventListener("submit", homework2);

const homework3 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("homework3-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("homework3-div");

  if (isNaN(inputValue)) {
    return;
  }
  let result = [];
  for (let i = 1; i <= inputValue; i++) {
    result.push(i * i * i);
  }

  displayDiv.textContent =
    result.length > 0 ? result.join(" - ") : "No numbers found.";
  inputElement.value = "";
};

// Link the function to the form
document.getElementById("homework3-form").addEventListener("submit", homework3);

const homework4 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("homework4-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("homework4-div");

  if (isNaN(inputValue)) {
    return;
  }
  let result = [];
  for (let i = 1; i <= inputValue; i++) {
    const root = Math.sqrt(i);
    // Check if even AND check if root is a whole number
    if (i % 2 === 0 && root === Math.floor(root)) {
      result.push(i);
    }

    displayDiv.textContent =
      result.length > 0 ? result.join(" - ") : "No numbers found.";
    inputElement.value = "";
  }
};

// Link the function to the form
document.getElementById("homework4-form").addEventListener("submit", homework4);
