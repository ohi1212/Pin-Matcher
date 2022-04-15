function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log("got 3 digit and calling again", pin);
    getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");

  if (isNaN(number)) {
    if (number == "c");
    {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const success = document.getElementById("success");
  const fail = document.getElementById("fail");

  if (pin == typedNumbers) {
    success.style.display = "block";
    fail.style.display = "none";
  } else {
    fail.style.display = "block";
    success.style.display = "none";
  }
}
