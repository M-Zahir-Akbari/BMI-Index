function CalculateShowResult() {
  // Get user input values and convert to float
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Initialize additional note for unit correction
  let additionalNote = "";

  // ===============================
  // Weight Input Validations
  // ===============================

  if (isNaN(weight)) {
    alert("Please enter a value for Weight.");
    return;
  }

  if (weight < 0) {
    alert("Weight can't be a negative number!");
    return;
  }

  if (weight === 0) {
    alert("Weight can't be Zero.");
    return;
  }

  // If weight seems too high, assume it's in grams and convert to kilograms
  if (weight > 999.99) {
    weight /= 1000;
    additionalNote = "The entered value for weight or height is/are too high, we treated them as Gram & Centi Meter";
  }

  // ===============================
  // Height Input Validations
  // ===============================

  if (isNaN(height)) {
    alert("Please enter a value for Height.");
    return;
  }

  if (height < 0) {
    alert("Height can't be a negative number!");
    return;
  }

  if (height === 0) {
    alert("Height can't be Zero.");
    return;
  }

  // If height seems too high, assume it's in centimeters and convert to meters
  if (height > 2.5) {
    height /= 100;
    additionalNote = "The entered value for weight or height is/are too high, we treated them as Gram & Centi Meter";
  }

  // ===============================
  // BMI Calculation
  // ===============================
  let bmi = (weight / (height * height)).toFixed(2);

  // ===============================
  // BMI Classification
  // ===============================
  let status = "";
  let alertMessage = "";

  if (bmi < 18.5) {
    status = "Underweight";
    alertMessage = "⚠️ Consider consulting a healthcare provider.";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal";
    alertMessage = "🎉 Congratulations!, try to keep yourself fit. 💪";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Overweight";
    alertMessage = "⚠️ Consider making healthy lifestyle changes.";
  } else {
    status = "Obese";
    alertMessage = "🚨 It’s important to consult a doctor!";
  }

  // ===============================
  // Display the Result
  // ===============================
  document.getElementById("BMI-result").textContent = bmi;
  document.getElementById("BMI-info").innerHTML =
    `${status}<br/>${alertMessage}<br/><br/>${additionalNote}`;
  document.querySelector(".result-container").style.display = "block";
}
