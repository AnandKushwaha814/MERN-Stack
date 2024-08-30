# JavaScript Project

## Project 1

# This JavaScript code changes the background color of the webpage based on which button the user clicks.
## Breakdown of the Code:
1. Element Selection:

``` javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');
```
* `buttons` selects all elements with the class .button and stores them in a NodeList (like an array of elements).
* `body` selects the <body> element of the document.
2. Loop Through Buttons:

``` javascript
buttons.forEach(function (button) {
  console.log(button);
```
* This loop iterates over each element in the buttons NodeList.
`console.log(button);` logs each button to the console.
3. Event Listener for Click Events:

``` javascript
button.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
```
* An event listener is added to each button to listen for a `"click"` event.
* When a button is clicked, it triggers a function that:
* Logs the event object e to the console (`console.log(e);`).
* Logs the specific element that was clicked (`console.log(e.target);`).
4. Change Background Color Based on Button ID:

``` javascript
if (e.target.id === "red") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "blue") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "black") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "green") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "yellow") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "cyan") {
  body.style.backgroundColor = e.target.id;
}
if (e.target.id === "reset") {
  body.style.backgroundColor = "";
}
```
* This part checks the `id` of the button that was clicked.
* If the `id` matches any of the specified colors (`red`,` blue`, `black`, `green`, `yellow`, `cyan`), the background color of the `body` is changed to that color.
* If the reset button is clicked (id="reset"), the background color is reset to its default (empty string).

