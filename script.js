console.log("first");

const btn = document.getElementById("calculate-btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = weight / ((height / 100) * (height / 100));
  let result = document.getElementById("result");

  if (height === "" && weight === "" || height <= 0 && weight <= 0||isNaN(height)&&isNaN(weight)) {
    document.getElementById("height-error").innerHTML =
      "Please enter a valid height!";
    document.getElementById("weight-error").innerHTML =
      "Please enter a valid weight!";
  }
  else if(height&&weight){
    if (bmi < 18.5) {
        result.innerHTML = "Underweight: Less than 18.5";
      } else if (bmi < 24.9) {
        result.innerHTML = "Normal weight: 18.5 - 24.9";
      } else if (bmi < 29.9) {
        result.innerHTML = "Overweight: 25.0 - 29.9";
      } else {
        result.innerHTML = "Obesity: 30.0 and Above";
      }
  }
  else
  {
    result.innerHTML = "Please enter a valid height and weight!";

  }
  document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
   
  
  
  
});
