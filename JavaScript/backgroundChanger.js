const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener("click", (a) => {
    const color = a.target.id;
    if (color === "reset") {
      body.style.backgroundColor = "";
    } else {
      body.style.backgroundColor = color;
    }
  });
});
