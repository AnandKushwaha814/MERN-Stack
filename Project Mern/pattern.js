// pattern

// const row = 5;

// for (let i = 0; i < row; i++) {
//   console.log("*".repeat(row - i));
// }
// let row = 5;
// for (let i = 1; i <= row; i++) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     a += "*";
//   }
//   console.log(a);
// }

// *
// **
// ***
// ****
// *****


// let row = 6;

// First triangle (pointing upwards)
// for (let i = 1; i <= row; i++) {
//     let a = "";
//     for (let j = 1; j <= row - i; j++) {
//         a += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         a += "*";
//     }
//     console.log(a);
// }

// // Second triangle (pointing downwards)
// for (let i = row-1; i >= 1; i--) {
//     let a = "";
//     for (let j = 1; j <= row - i; j++) {
//         a += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         a += "*";
//     }
//     console.log(a);
// }

// *
// ***
// *****
// *******
// *********
// ***********
// *********
// *******
// *****
// ***
//  *


// let row = 5;
// for (let i = 1; i <= row; i++) {
//   let a = ""; // Initialize the string before the inner loops
//   for (let j = 1; j <= row - i; j++) {
//     a += " "; // Add spaces for left alignment
//   }
//   for (let j = 1; j <= i; j++) {
//     a += "*"; // Add asterisks
//   }
//   console.log(a); // Print the constructed string
// }


// *
// **
// ***
// ****
// *****