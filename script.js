// Get the display input from the page
const display = document.getElementById("display");

// Add a number or operator to the display
function appendValue(value) {
  display.value = display.value + value;
}

// Clear everything
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  if (display.value === "") {
    return;
  }

  try {
    // eval() is used here to keep the project simple
    let result = eval(display.value);

    // Handle divide by zero
    if (!isFinite(result)) {
      display.value = "Error";
      return;
    }

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Bonus: allow keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ("0123456789+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
