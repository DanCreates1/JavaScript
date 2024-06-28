//JS👇🏼
document.getElementById("submitbutton").onclick = function(){

   let temp;

   if(document.getElementById("cButton").checked){
      temp = document.getElementById("textBox").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°C"
   }
   else if(document.getElementById("fButton").checked){
      temp = document.getElementById("textBox").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°F"
   }
   else{
      document.getElementById("tempLabel").innerHTML = "Select a unit"
   }



}

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp)


function toCelsius(temp){
   return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
   return temp * 9 / 5 + 32;
}



//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>lol</title>
  </head>
  <body>

      <label>Enter a tempreture:</label>
      <input type="text"  id="textBox"><br>

      <label >convert to:</label><br>
      <input type="radio" id="cButton" name="unit">
      <label>Celsius</label><br>
      <input type="radio" id="fButton" name="unit">
      <label>Fahrenheit</label><br>

      <button type="button" id="submitbutton">submit</button><br>
      <label id="tempLabel"></label>

      
    <script src="script.js"></script>
  </body>
</html>
