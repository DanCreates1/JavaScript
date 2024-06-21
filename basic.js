//This file contains the basics of JavaScript


//How to fill up an H1 tag with js👇🏼
//first you have to chose an ID for your h1 tag and then write this in the js file
document.getElementById("myH1").textContent = 'hello';

//to find a type of something we use the method (typeof)
let price = 100
console.log(typeof price);



// variable = A container that stores a value

// First declaration    let x;
// Second assignment    x = 100;

let x;
x = 200;

console.log(x);


//let age = 25;
//let price = 100

//console.log(`You are ${age} years old`);
//console.log(`The price is $${price}`)



//STRINGS
//Strings can contain numbers
let firstName = "Pouyan";
let favoriteFood =  "pizza"
let email = "pouayn123@gmail.com";

console.log(typeof firstName);
console.log(`your name is ${firstName}`);
console.log(`you like ${favoriteFood}`);
console.log(`your email is ${email}`);



//Booleans
//They are either true or false

let online = true;
let forSale = true;
let isStudent = false;


console.log(typeof online);
console.log(`pouyan is online: ${online}`);
console.log(`Is this house for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`)




//arithmetic operators = values, variables, etc
// + - * /
//example 11 = x + 8


//let students = 30;

//students = students + 1;    //PLUS
//students = students - 1;    //minus 
//students = students * 2;    //times
//students = students / 2;    //division
//students = students ** 2;   //to the power
//let extraStudent = students % 3;   


//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;


//console.log(students);


//CONST = a variable that can't be changed
//you just need this p element in your html file <p id="p1"><p1>
const PT = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PT * radius;

//console.log("The circumference is:", circumference)
document.getElementById("p1").textContent = ("The circumference is:", circumference)





//JavaScript MATH
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x)
//x = Math.floor(x)
//x = Math.ceil(x)
//x = Math.pow(x, 2)
//x = Math.sqrt(x)
//x = Math.abs(x)
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI


console.log(x)







//hypotenuse calc program
//HTML file👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  
      <label id="aLabel">Side A:</label><br>
      <input type="text" id="ATextBox">
      <label id="bLabel">Side B:</label><br>
      <input type="text" id="bTextBox"><br>
      <button type="button" id="submitButton">submit</button><br>
      <label id="cLabel">Side C:</label><br>

    <script src="script.js"></script>
  </body>
</html>


//JS file👇🏼
let a;
let b;
let c;
/*
a = window.prompt("Enter side A")
a = Number(a);

b = window.prompt("Enter side B")
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C:", c)
*/

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("ATextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "side C: " + c;
}



// useful string propersties & methods
let username = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("0"));
console.log(username.lastIndexOf("0"));
console.log(username.trim(0));
console.log(username.toUpperCase());
console.log(username.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);

