const problem1 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem1-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number1-div");
  //   let inputValue = e.target[0].value;
  //   const displayDiv = document.getElementById("number-div");
  if (isNaN(inputValue)) return;

  let result = [];
  for (let i = 1; i <= inputValue; i++) {
    result.push(i);
  }
  //   e.target[0].value = "";
  displayDiv.textContent = result.join("-");
  inputElement.value = ""; // Clear input after submit
};

// Link the function to the form
document.getElementById("problem1-form").addEventListener("submit", problem1);


const problem2 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem2-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number2-div");
  let output = "";
  for (let i = 1; i <= inputValue; i++) {
    output += `${inputValue - i + 1} - `;
  }

  displayDiv.textContent = output;
};

// Link the function to the form
document.getElementById("problem2-form").addEventListener("submit", problem2);


const problem3 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem3-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number3-div");

  let output = [];
  for (let i = 1; i <= inputValue; i++) {
    if (i % 2 == 0) {
      output.push(i)
    }
  }

  displayDiv.textContent = output.join('-');
};

// Link the function to the form
document.getElementById("problem3-form").addEventListener("submit", problem3);


const problem4 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem4-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number4-div");

  let sum = 0;

  for(let i = 1; i<= inputValue; i++){
    sum += i
  }

  displayDiv.textContent = sum;
};

// Link the function to the form
document.getElementById("problem4-form").addEventListener("submit", problem4);


const problem5 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem5-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number5-div");

  let product = 1;

  for(let i = 1; i<= inputValue; i++){
    product = product *  i;
  }

  displayDiv.textContent = product;
};

// Link the function to the form
document.getElementById("problem5-form").addEventListener("submit", problem5);


const problem6 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem6-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number6-div");

  let sum = 0;

  for(let i = 1; i<= inputValue; i++){
    if(i % 2 == 0){
      sum += i
    }
  }

  displayDiv.textContent = sum;
};

// Link the function to the form
document.getElementById("problem6-form").addEventListener("submit", problem6);



const problem7 = (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("problem7-input");
  const inputValue = parseInt(inputElement.value);
  const displayDiv = document.getElementById("number7-div");

  let result = [];

  for(let i = 1; i<= inputValue; i++){
    result.push(i * i)
  }

  displayDiv.textContent = result.join('-');
};

// Link the function to the form
document.getElementById("problem7-form").addEventListener("submit", problem7);