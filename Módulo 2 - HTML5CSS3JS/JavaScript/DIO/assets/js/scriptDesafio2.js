var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  if (currentNumber >= 10) {
    currentNumberWrapper.innerHTML = "Você atingiu o limite do increment";
  } else if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  if (currentNumber <= 0) {
    currentNumberWrapper.innerHTML = "Erro";
  } else if (currentNumber >= 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

var listeningIncrement = document.getElementById("increment");
var listeningDecrement = document.getElementById("decrement");

listeningIncrement.addEventListener("click", increment);
listeningDecrement.addEventListener("click", decrement);
