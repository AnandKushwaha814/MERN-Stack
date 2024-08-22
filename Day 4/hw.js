// Write a program to add two numbers
function sum(a, b) {
  console.log("Sum Is = ", a + b);
}
sum(10, 20);

// write a program to find the greatest three numbers
function greaterthree(a, b, c) {
  if (a > b && a > c) {
    console.log("A is greater ", a);
  } else if (b > a && b > c) {
    console.log("B is greater ", b);
  } else {
    console.log("C is greater ", c);
  }
}
greaterthree(6000, 5000, 3000);

// program to find out the area of a triangle
function areaOf(base, height) {
  let area = (base * height) / 2;
  console.log("Area of Traingle is ", area);
}
areaOf(5, 4);

// make a function when we call function then great a persion

function greet(name) {
  console.log("Hello, " + name);
}
greet("Anand");
