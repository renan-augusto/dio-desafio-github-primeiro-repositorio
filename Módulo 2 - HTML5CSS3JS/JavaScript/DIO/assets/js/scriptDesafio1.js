var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

var listeningIncrement = document.getElementById("increment");
var listeningDecrement = document.getElementById("decrement");

listeningIncrement.addEventListener("click", increment);
listeningDecrement.addEventListener("click", decrement);
