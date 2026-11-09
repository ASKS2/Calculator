# JavaScript Mini Project: Calculator

A simple calculator built with HTML, CSS and JavaScript (DOM manipulation).

## Features
- Addition, subtraction, multiplication, division and percentage
- Clear (C) and delete (DEL) buttons
- Shows "Error" for invalid input or divide by zero
- Keyboard support (numbers, operators, Enter, Backspace, Escape)
- Responsive layout (works on mobile too)

## Technologies Used
- HTML for the structure
- CSS (Grid) for the layout of the buttons
- JavaScript for the logic

## How It Works
1. Every button calls a JavaScript function using `onclick`.
2. `appendValue()` adds the pressed number/operator to the display.
3. `calculate()` solves the expression using `eval()` and shows the result.
4. `clearDisplay()` and `deleteLast()` clear or edit the display.
5. An event listener on `keydown` lets the user type from the keyboard.

## What I Learned
- Selecting elements with `document.getElementById`
- Handling click and keyboard events
- Using `try...catch` to handle errors
- Making a layout with CSS Grid


## Author
Ashish Kumar Sharma
