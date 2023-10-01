// grab all classes from html - need user input, submit button, p tag to display user input

const formList = document.querySelector('.form-list');
const userInput = document.querySelector('.userInput');
const myTag = document.querySelector('.myTag');

// add eventlistener for submit button - submitting a form

formList.addEventListener('submit', addToList);

//function that will grab user input and display it

function addToList(e) {
  e.preventDefault();
  const task = userInput.value; 
  myTag.innerText = task;
}




