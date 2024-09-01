const form = document.querySelector("form");

// this useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // get the values from the form fields and calculate BMI
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // validate input fields
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Pleaase Give a valid height &#128680;`;
    return;
  }
  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Pleaase Give a valid weight &#128680;`;
    return;
  }

  // calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine the BMI category
  let bmiCategory=''
  if (bmi < 18.6) {
    bmiCategory = `Under weight &#128530`;
  }
    else if (bmi >= 18.6 && bmi <= 24.9) {
    bmiCategory = `Normal weight &#128525`;
  }
    else if (bmi >= 24.9 && bmi <= 29.9) {
    bmiCategory = `Overweight &#128542`;
  } else {
    bmiCategory = `Obese &#128556`;
  }
  // show the result
  results.innerHTML = `${bmiCategory}:- <span>${bmi}</span>`;
});
