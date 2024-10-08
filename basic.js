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





//how to kill your laptop with three lines of code(Do not try at home)
//for loop = repeat some code a certain amount of time 
//for(let counter = 1; 1 == 1; counter+=1 ){
   console.log(counter)
}

//Slice() extract a section of a sting
let fullName = "Mr.engine NB";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3)
//lastName = fullName.slice(0)

lastName = fullName.slice(0, fullName.indexOf(" ") + 1);
firstName = fullName.slice(fullName.indexOf(" ") + 1);





//method chaining = calling one method after another

let userName = "DAN";

let letter = userName.charAt(0).toUpperCase();
console.log(letter)



console.log(lastName);
console.log(firstName)





//----------------------------------------------------------------
// IF statment 
let age = 1;

if(age >= 18){
   console.log("you are over 18");
}
else{
   console.log("you are less then 18")
}

//A better version👇🏼

let age;

age = window.prompt("enter your age");
if(age >= 18){
   console.log("you are an adult");
}
else if( age < 0){
   console.log("you haven't been born yet");
}
else{
   console.log("you are not an adult");
}

console.log(`your age is ${age}`);









// Switch = statement that examines a value
// usually used when you have soo many else and if statment



let grade = "A";

switch(grade){
   case "A":
      console.log("you did great");
      break;

   case "B":
      console.log("you did good");
      break;

   case "C":
      console.log("you passed");
      break;

   case "F":
      console.log("you  failure");
      break;
   default:
      console.log(grade, "is not a letter grade!");
}






// gives us the abillity to check more then 1 condition concurrently
// && AND (BOTH conditions must be true)
// || or (Either condituin can be true)

//&& and👇🏼
let temp = 15;

if(temp > 0 && temp < 30){
   console.log("The weather is good!");
}
else{
   console.log('The weather is bad!');
}

// OR ||👇🏼
let temp = 15;

if(temp <= 0 || temp >= 30){
   console.log("The weather is Bad!");
}


//version 2.0 of &&
  let temp = 15;
let sunny = true;

if(temp > 0 && temp < 30 && sunny){
   console.log("The weather is good!");
}
else{
   console.log('The weather is bad!');
}





// Not ! logical operator
// typically used to reverse a condition's boolean value
// true -> false false -> true 

let temp = 16;
let sunny = true;

if(!(temp > 15)){
   console.log("It is cold outside");
}
else{
   console.log("It is warm outside");
}

if(!sunny){
   console.log("It is cloudy outside");
}
else{
   console.log("It's sunny outside");
}
else{
   console.log('The weather is Good!');
}





//while loop-------------------------------------------------------
// while something is true it repeats it self

let userName = "";

while(userName == "" || userName == null){
   userName = window.prompt("Enter your name:")
}
console.log("Hello", userName);
//document.getElementById("h1").innerHTML = "hello "+ userName;




//do while loop = do something
// then check the condition
// repeat if condition is true
let userName ;

do{
   userName = window.prompt("Enter your name:")
}while(userName == "")
   
console.log("Hello", userName);





//for loop = repeat some code a certain amount of time

for(let counter = 1; counter <= 100; counter+=1 ){
   console.log(counter)
}

//lets make it simple( i used "i" insted of counter)
for(let i = 1; i <= 100; i+=1 ){
   console.log(counter)
}

//negative counter👇🏼
for(let i = 10; i > 0; i-=1 ){
   console.log(i)
}
console.log("happy new year")




// break = break out of a loop entirely

for(let i = 1; i <= 20; i+=1){
   if(i == 13){
      break;
   }

   console.log(i)
}

// countinue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
   if(i == 13){
      continue;
   }

   console.log(i)
}



//nested loop = a loop inside of another loop

let rows = window.prompt('Enter # of rows')

let columns = window.prompt('Enter # of columns')

for(let i = 1; i <= rows; i+=1){
   for(let j = 1; j <= columns; j+=1){
      document.getElementById("myrectangel").innerHTML +=j;
   }
   document.getElementById("myrectangel").innerHTML += "<br>";
}




//nested loop = a loop inside of another loop
let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt('Enter # of rows')
let columns = window.prompt('Enter # of columns')

for(let i = 1; i <= rows; i+=1){
   for(let j = 1; j <= columns; j+=1){
      document.getElementById("myrectangel").innerHTML +=symbol;
   }
   document.getElementById("myrectangel").innerHTML += "<br>";
}



//function = Define code once, and use it as many times as you want

let username = "Dan";
let age = 21;

happyBirthday()

function happyBirthday(){
   console.log("happy birthday to you")
   console.log("happy birthday to you")
   console.log("happy birthday dear", username)
   console.log("happy birthday to you")
   console.log("You are", age,"years old")
}



//return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");


area = getArea(width, height);

console.log("The area is:", area)

function getArea(width, height){
   return width * height;
}




// ternary operator = shortcut for ab 'if/else statement'
//                   takes 3 operands

//                   1.a condition with?
//                   2. expression
//                   3. expression if False


let adult = CheckAge(18);
console.log(adult)

function CheckAge(age){
    return age >= 18 ? true : false;
}

//another version of the ternary operator👇🏼

CheckWinner(true);

function CheckWinner(win){
   win ? console.log('You win') :  console.log('You lose');
}



// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

//global variable = is declared outside any function
// (if global, var will CHAMGE  browser's window properties)

let name = "Bro";

doSomething();

function doSomething(){
   for(let i = 1; i <= 3 ; i+=1){
      console.log(i)
   }
}


// Template literals = delimited with (`(back tikes))
//                      instead of double or single quotes
//                      allow embedded variables and expressions


let userName = "Dan";
let items = 3;
let total = 75;



console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

console.log("--------------------------------")


console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);


console.log("-------------------------")


let text = 
`Hello ${userName}
You have ${items} items in your cart
Your total is $${total}`

console.log(text)




//toLocaleString() = return a string with a language
//                   sensitive representation

// number.toLocaleString(locale, {options});

//'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // Standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})

//myNum = myNum.toLocaleString(undefined, {style: "percent"})

//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})

console.log(myNum);



//array = think of it as a variable
//           that can store multiple values

let fruits = ["appl", "orange", "banana"];

//fruits[2] = "coconut";

fruits.push("lemon")    //add an element
fruits.pop();           //remove last element
fruits.unshift("mango");//add element to beginning
fruits.shift();         //remove element from beginnig

let lenght = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(index);



//loop through an array
let prices = [5, 10, 15, 20];
   /*
for(let i = prices.length -1; i >=0; i-=1){
   console.log(prices[i])
}  
   */

for(prices of prices){
   console.log(prices)
}



//how to sort arrays👇🏼
let fruits = ["appl", "orange", "banana", "mango"]

//fruits = fruits.sort();
fruits = fruits.sort().reverse();

for(let fruit of fruits){
   console.log(fruits);
}



//2D array = An array of arrays

let fruit =      ["appels", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruit, vegetables, meats];

groceryList[2][2] = "steak";

for(let list of groceryList){
   for(let food of list){
      console.log(food);
   }
}




//spread operator = allows an  iterable such as an or string
//                  to be expanded in places where zero or more
//                  arguments are expected (unpacks the elements)

let userName = "Mr engine"
//It will spread the string👇🏼
console.log(...userName)


let calss1 = ["bob", "patrick", "sandy"];
let calss2 = ["squidward", "Mr.krabs", "plankton"];

calss1.push(...calss2);

console.log(...calss1);




//rest parameters = represents an indefinitie number of parameters
//       (packs arguments into an array)


let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(x, y, ...numbers){
   let total = 0;
   for(let number of numbers){
      total += number
   }
   return total
}



//array.forEach() = executes a provided callback function
//                  once for each array element

let students = ["spongrbob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
   array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element){
   console.log(element)
}



//array.map() = executes a provided callback function
//             once for each array element 
//             AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squRES = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);

function square(element){
   return Math.pow(element, 2);
}

function cube(element){
   return Math.pow(element, 3);
}
function print(element){
   console.log(element);
}



//array.filter() = creates a new array with all elements
//                 that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
   return element >= 18;
}
function print(element){
   console.log(element)
}



// sort an array of numbers
   
let grades = [100, 50, 30, 60, 80, 70];


grades = grades.sort(descendingSort)
grades = grades.sort(aescendingSort)

grades.forEach(print);

function descendingSort(x, y){
   return y - x;
}

function aescendingSort(x, y){
   return x - y;
}

function print(element){
   console.log(element);
}




//45.arrow function = compact alternative to a traditional function
   /*
const greating = function(userName){
   console.log(`Hello ${userName}`);
}

greating("Dan");
   */
      /*
const greating = userName => console.log(`Hello ${userName}`);

greating("Dan");     */

   /*
const percent = (x, y) => x / y * 100;

console.log(`${percent(2, 10)}%`)
                  */

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
console.log(cards)

function shuffle(array){
   let currentIndex = array.length;

   while(currentIndex != 0){
      let randomIndex = Math.floor(Math.random() * array.length);
      currentIndex-=1;

      let temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
   }
   return array;
}
      



//nested function = Functions inside other function
//                  Inner functions are "hidden" from ourside

let userName = "Dan";
let userInbox = 0;

login();

function login(){
   displayUserName();
   displayInbox();

   function displayUserName(){
      console.log(`Welcome ${userName}`);
   }
   function displayInbox(){
      console.log(`You have ${userInbox} new messages`)
   }
}



//Map = object that holds key-value pairs of any data type

const store = new Map([
   ["t-shirt", 20],
   ["jeans", 30],
   ["socks", 50],
   ["underwear", 50]
]);

//get method
store.get("t-shirt");

//set method
store.set("hat", 40);

//delete method
store.delete("hat");

//has method
console.log(store.has("underwear"));

//size method
console.log(store.size);

store.forEach((value, key) => console.log(`${key} ${value}`))



//---------------------------------------
//OOP
//object = A group of properties and methods
//         properties = what an object has 
//         methods = what an object can do 
//         use . to access properties/methods

const car1 = {
   model:"Mustang",
   color:"red",
   year:2023,

   drive : function(){
      console.log("You drive the car");
   },

   brake : function(){
      console.log("You step in the brakes");
   }
}

const car2 = {
   model:"Nissan",
   color:"black",
   year:2024,

   drive : function(){
      console.log("You drive the car");
   },

   brake : function(){
      console.log("You step in the brakes");
   }
}

car1.drive()
car1.brake()

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

console.log("------------------------------")

car2.drive()
car2.brake()

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);



// this = reference to a particular object
//        the object depends on the immediate context

const car1 = {
   model:"Mustang",
   color:"red",
   year:2023,

   drive : function(){
      console.log(`You drive ${this.model}`);
   },

   brake : function(){
      console.log("You step in the brakes");
   }
}

const car2 = {
   model:"Nissan",
   color:"black",
   year:2024,

   drive : function(){
      console.log(`You drive ${this.model}`);
   },

   brake : function(){
      console.log("You step in the brakes");
   }
}

car1.drive()
car1.brake()

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

console.log("------------------------------")

car2.drive()
car2.brake()

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);



//-------------------------------------------------------------------------------------
//class = a blue print for creating cbjects 
//        define what properties and methods the have
//        use a constuctor for unique properties

class Player{
   score = 0;

   pause(){
      console.log("you paused the game");
   }
   exit(){
      console.log("you exited the game");
   }

}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();



// constructor = a special method of a class,
//               accepts arguments and assigns properties

class Student{

      constructor(name, age, gpa){
         this.name = name;
         this.age = age;
         this.gpa = gpa;
      }
      study(){
         console.log(`${this.name} is studying`);
      }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);


console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();




//static keyword = belongs to he class, not the objects
//                 properties: useful for caches, fixed-configuration
//                 methods:    uselful for utility functions

class Car{

   static numberOfCars = 0;
   constructor(model){
      this.model = model;
      this.numberOfCars += 1;
   }
   static startRace(){
      console.log("3...2...1...GO!");
   }
}

const car1 = new Car("Mustang");
const car2 = new Car("Nissan");
const car3 = new Car("BMW");

console.log(car1.numberOfCars);
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);



// inheritance = a child can inherit all the 
//               methods and properties from another calss

class Animal{
   alive = true;

   eat(){
      console.log(`${this.name} is eating`)
   }
   sleep(){
      console.log(`This ${this.name} is sleeping`)
   }
}


class Rabbit extends Animal{
   name = "rabbit";

   run(){
      console.log(`This ${this.name} is runing`)
   }
} 

class Fish extends Animal{
   name = "fish";

   swim(){
      console.log(`This ${this.name} is swimming`)
   }
}

class Hawk extends Animal{
   name = "hawk";

   fly(){
      console.log(`This ${this.name} is flying`)
   }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();




console.log(`The rabbit is alive = ${rabbit.alive}`)
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log("-----------------------------------------");

console.log(`The fish is alive = ${fish.alive}`)
fish.eat();
fish.sleep();
fish.swim();

console.log("-----------------------------------------");

console.log(`The Hawk is alive = ${hawk.alive}`)
hawk.eat();
hawk.sleep();
hawk.fly();



// super keyWord = Refers to the parent class.
//                 commonly used to invoke constructor of a parent class


class Animal{
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
}

class Rabbit extends Animal{
   
   constructor(name, age, runSpeed){
      super(name, age);
      this.runSpeed = runSpeed;
   }
}


class Fish extends Animal{

    
   constructor(name, age, swimSpeed){
      super(name, age);
      this.swimSpeed = swimSpeed;
   }
}


class Hawk extends Animal{

   constructor(name, age, flySpeed){
      super(name, age);
      this.flySpeed = flySpeed;
   }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log("----------------------------------------");

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log("----------------------------------------");

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);



//getter = special method that makes a property readable
//setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property

   /* function rectanlgeArea(widht, height){
   x = widht * height 
   console.log(x)
}
   */
class Rectangle {

   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   set width(newWidth) {
      if (newWidth > 0) {
         this._width = newWidth;
      } else {
         console.error("Width must be a positive number");
      }
   }

   set height(newHeight) {
      if (newHeight > 0) {
         this._height = newHeight;
      } else {
         console.error("Height must be a positive number");
      }
   }

   get width() {
      return `${this._width.toFixed(1)}cm`;
   }

   get height() {
      return `${this._height.toFixed(1)}cm`;
   }

   get area() {
      return `${(this._width * this._height).toFixed(1)}cm^2`;
   }
}

const rectangle = new Rectangle(5, 6);

console.log(rectangle.width); 
console.log(rectangle.height);
console.log(rectangle.area); 



class person{

   constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   set firstName(newFirstName){
      if(typeof newFirstName === "string" && newFirstName.lenght > 0){
         this._firstName = newFirstName;
      }
      else{
         console.error("First name must be a non-empty string");
      }
   }
}

const percent = new person(420, 69, "pizza");

console.log(percent.firstName);
console.log(percent.lastName);
console.log(percent.age);



class Person {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   set firstName(newFirstName) {
      if (typeof newFirstName === "string" && newFirstName.length > 0) {
         this._firstName = newFirstName;
      } else {
         console.error("First name must be a non-empty string");
      }
   }


   set lastName(newLastName) {
      if (typeof newLastName === "string" && newLastName.length > 0) {
         this._lastName = newLastName;
      } else {
         console.error("Last name must be a non-empty string");
      }
   }

   set age(newAge){
       if(typeof newAge === "number" && newAge >= 0){
          this._age = newAge;
      }
      else{
         console.error("Age must be a non-negative number");
      }
   }

   get firstName() {
      return "First name: " + this._firstName;
   }

   get lastName() {
      return "Last name: " + this._lastName;
   }

   get fullName(){
      return "Full name: " + this._firstName + " " + this._lastName;
   }

   get age(){
      return "Age: " + this._age;
   }
}

const person = new Person("John", "Doe", 26);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);


// destructuring = extract values fromm arrays and objects,
//                 then assign to varibles in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

//--------------- EXAMPLE 1 ----------------
// SWAP THE VALUE OF TWO VARIABLES
      
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
   

//--------------- EXAMPLE 2 ----------------
// SWAP 2 ELEMENTS IN AN ARRAY
   
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4]];

console.log(colors)


//--------------- EXAMPLE 3 ----------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...exteraColors] = colors


//--------------- EXAMPLE 4 ----------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
   firstName: "Spongebob",
   lastName: "squarePants",
   age: 30,
   job: "Fry Cook",
}

const person2 = {
   firstName: "Patrick",
   lastName: "Star",
   age: 30,
}
/*
const {firstName, lastName, age ,job="Unemployed"} = person1;

console.log(person1);

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
   */   

const {firstName, lastName, age ,job="Unemployed"} = person2;

console.log(person2);

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(exteraColors);




//--------------- EXAMPLE 5 ----------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}){
   console.log(`Name: ${firstName} ${lastName}`)
   console.log(`age: ${age}`)
   console.log(`jog: ${job}`)
}

const person1 = {
   firstName: "Spongebob",
   lastName: "squarePants",
   age: 30,
   job: "Fry Cook",
}

const person2 = {
   firstName: "Patrick",
   lastName: "Star",
   age: 30,
}

displayPerson(person1)


//nested objects = Objects inside of other Objects.
//                 Allows you to represent more complex data structures
//                 child Objects is enclosed by a Parent Object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{keyboard{}, Mouse{}, Monitor}


const person = {
   fullName: "Spongbob squardpants",
   age:30,
   isStudent: true,
   hobbies: ["karate", "jellyfishing", "cooking"],
   adress: {
      street: "123 Conch St.",
      city: "Bikini Bottom",
      country: "Int. Water"
   } 
}


class Person{
   constructor(name, age, ...adress){
      this.name = name;
      this.age = age;
      this.adress = new Address(...adress);
   }
}

class Address{

   constructor(street, city, country){
      this.street = street;
      this.city = city;
      this.country = country;
   }
}

const person1 = new Person("Spongebob", 30, "124 Counch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

const person2 = new Person("Patrick", 37, "128 Counch St.",
                                          "Bikini Bottom",
                                          "Int. Waters")
                                          
const person3 = new Person("Squidward", 35, "126 Counch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

console.log(person3.adress)  


console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);



//Arrays of objects

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 59},
                {name: "pineapple", color: "yellow", calories: 37}];

console. log(fruits[2].name)


//push() to add something
//pop() to remove something


//------------forEach()----------------
fruits.forEach(fruits => console.log(fruits.name))


//----------------map()---------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);


console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//-----------filter()--------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);


//------------reduce----------------
const maxFruits = fruits.reduce((max, fruit) =>
                                 fruit.calories > max.calories ?
                                 fruit : max);



const minFruits = fruits.reduce((min, fruit) =>
                                 fruit.calories < min.calories ?
                                 fruit : min);

console.log(maxFruits);
console.log(minFruits);



// sort() = method used to sort elements of an array in place
//          sorts elements as strtings in lexicographic prder, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings
/*
let numbers = [1, 4, 2, 3, 6, 5, 10, 9, 7, 8];

numbers = numbers.sort((a, b) => a - b);

console.log(numbers);
*/
//---------------------------------------------
const people = [
   {name: "Spongebob", age: 30, gpa: 3.0},
   {name: "Patrick", age: 37, gpa: 1.5},
   {name: "Squidward", age: 51, gpa: 2.5},
   {name: "Sandy", age: 27, gpa: 4.0}
 ];
 
 people.sort((a, b) => b.age - a.age);

 peopleNameSorted = people.sort((a, b) => b.name.localeCompare(a.name))
 
 console.log(people);
 




 // Date objects = Objects the contain values that represent dates and times
 //                These date objects can be changed and formatted

const date = new Date();



const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()
const hour = date.getHours()
const minutes = date.getMinutes()
const second = date.getSeconds()
const milliseconds = date.getMilliseconds()


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(milliseconds);


const date2 = new Date()

date2.setFullYear(2020);
date2.setMonth(6);
date2.setDate(1);
date2.setHours(2);
date2.setMinutes(3);
date2.setSeconds(4);

console.log(date2);


const Date1 = new Date("2023-12-31");
const Date2 = new Date("2024-01-01");

if(Date2 > Date1){
   console.log("Happy new year")
}



// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular
   /*
function outer(){

   let message = "Hello";
   function inner(){
      console.log(message);
   }

   inner()
}

outer()
            */


function createCounter(){
      let count = 0;

   function increment(){
      
      count++;
      console.log(`Count increased to ${count}`)
   }

   function getCount(){
      return count;
   }

 return {increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


function createGame(){
   let score = 0;

   function increaseScore(points){
      score += points;
      console.log(`+${points}pts`);
   }

   function decreaseScore(points){
      score -= points;
      console.log(`-${points}pts`);
   }
   function getScore(){
      return score;
   }

 return{increaseScore, decreaseScore, getScore}  
}

const game = createGame()

game.increaseScore(3);
game.increaseScore(1);
game.decreaseScore(2)

console.log(`your score is ${game.getScore()}`);










// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (millisecinds)
//                Times are approximate
//                (execution time may very based on the workload the JavaScript runtime env.)

//                setTimeout(callback, dely);


let timeoutID;

function startTimer() {
   timeoutID = setTimeout(() => window.alert("Hello"), 3000);
   console.log("STARTED");
}

function clearTimer() {
   clearTimeout(timeoutID);
   console.log("CLEARED");
}

//HTML👇🏼
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>lol</title>
  </head>
  <body>
    <button onclick="startTimer()">start</button>
    <button onclick="clearTimer()">stop</button>
    <script src="script.js"></script>
  </body>
</html>
*/




//Digital clock program

function updateClock(){
   const now = new Date();
   let hours = now.getHours();
   const meridim = hours >= 12 ? "PM" : "AM";
   hours = hours % 12 || 12;
   hours = hours.toString().padStart(2, 0);
   const minutes = now.getMinutes().toString().padStart(2, 0);
   const seconds = now.getSeconds().toString().padStart(2, 0);
   const timeString = `${hours}:${minutes}:${seconds} ${meridim}`;
   document.getElementById("clock").textContent = timeString;
}

updateClock()
setInterval(updateClock, 1000);

//html👇🏼
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>lol</title>
  </head>
  <body>
    <div id="clock-container">
      <div id="clock">00:00:00</div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
*/

//css👇🏼
/*
body{
    margin: 0;
}

#clock-container{
    display: flex;
    justify-content: center;
    align-items: center;
   
    backdrop-filter: blur(10px);
    height: 100vh;
   
}

#clock{
    font-family: monospace;
    font-size: 6.5rem;
    width: 100%; 
}
*/



// synchronous = Executes line by line consecutively in a sequential manner.
// Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await

function func1(callback){
    setTimeout(() => {console.log("Task 1");
    callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");



  
// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or stablishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try{ }
// finally { } = (optional) Always executes. Used mostly for clean up 
//               ex. close files, close connections, release resources
   /*
try{
   console.log(x);
   // NETWORK ERRORS
   // PROMISE REJECTION
   // SECURITY ERRORS
}

catch(error){
   console.error(error);
}

finally{
   // CLOSE FILES
   // CLOSE CONNECTIONS
   // RELEASE RESOURCES
}

console.log("You have reached the end!");
   */

try{
   const dividend = Number(window.prompt("Enter a dividend: "));
   const divisor = Number(window.prompt("Enter a divisor: "));

   if(divisor == 0){
      throw new Error("You can't divide by zero!");
   }
   if(isNaN(dividend) || isNaN(divisor)){
      throw new Error("value must be a number");
   }

   const result = dividend / divisor;
   console.log(result);
}
catch(error){
   console.error(error)
}

console.log("You have reached the end!");
    console.log("Task 4");
}

func1(func2);




// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

const userName = "Dan creates";
const welcomeMsg = document.getElementById("Welcome-msg");




//element selectors = Methods used to target and manipulate HTMl elemensts
//                    They allow you to select one or multiple HTML elements
//                    from the DOM (Document Object Model)

// 1. document.getElementByID()        //ELEMENT OR NULL
// 1. document.getElementByID()    // HTML COLLECTION
// 3. document.getElementByTagName()   // ELEMENT OR NULL
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll        // NODELOST


//--------2. document.getElementByID()----------------
/*
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center"

console.log(myHeading);
            */


//---------1. document.getElementByClassName()------------------
/*
 const fruits = document.getElementsByClassName("fruits");

// fruits[1].style.backgroundColor = "yellow"

for(let fruit of fruits){
  fruit.style.backgroundColor = "yellow"

}
*/

/*
//---------3. document.getElementByTagName() ------------------

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";

for(let h4Element of h4Elements){
   h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
   liElement.style.backgroundColor = "lightGreen"
}
     

Array.from(h4Elements).forEach(h4Element =>{
   h4Element.style.backgroundColor = "yellow"
});

Array.from(liElements).forEach(liElement =>{
   liElement.style.backgroundColor = "lightGreen"
});
 */

//---------4. document.querySelector() ------------------
/*
const element = document.querySelector("ol");
console.log(element)
//element.style.backgroundColor = "yellow";
console.log(element);
      */


//----------------5. document.querySelectorAll-------------------
const foods = document.querySelectorAll("li");

foods.forEach(food => {
   food.style.backgroundColor = "yellow";
})
welcomeMsg.textContent += userName === "" ? 'Guest' : userName

//html👇🏼
//<h1 id="Welcome-msg">Welcome </h1>


// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextELementSibling
// .previousElementSibling
// .parentElement
// .children

// ----------------- .firstElementChild ----------

/*const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"*/
   /*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
   const firstChild = ulElement.firstElementChild;
   firstChild.style.backgroundColor = "yellow"
})
   */


//---------------.lastElementChild----------------
/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow"
*/
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
   const lastChild = ulElement.lastElementChild;
   lastChild.style.backgroundColor = "yellow"
});
   */

//----------.nextELementSibling------------
/*
const element = document.getElementById("carrots");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
*/

//--------------.previousElementSibling--------------
/*
const element = document.getElementById("onions");
const prevSiblings = element.previousElementSibling;
prevSiblings.style.backgroundColor = "yellow";
*/


//-----------.parentElement---------------
   /*
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/


//-----------------.children------------------

const element = document.getElementById("fruits");
const children = element.children;


Array.from(children).forEach(child => {
   child.style.backgroundColor = "yellow"
})





//62.Add % change HTML

//------------- EXAMPLE 1 <h1> -----------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box4").append(newH1);
//document.getElementById("box4").prepend(newH1);


//const box2 = document.getElementsByTagName("box2");
//document.body.insertBefore(newH1, box1)


//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[1])

// REMOve HTML ELEMENT
document.getElementById("box1").removeChild(newH1);
//html👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>
   <div id="box1" class="box">
    <p>Box1</p>
   </div>

   <div id="box2" class="box">
    <p>Box2</p>
   </div>

   <div id="box3" class="box">
    <p>Box3</p>
   </div>

   <div id="box4" class="box">
    <p>Box4</p>
   </div>
    <script src="script.js"></script>
  </body>
</html>






//eventListener = Listen for specific events to create interacive web pages
//                events: click, mouseover, mouseout
//                .addEventListener(event, callback);

const myBox = document.getElementById("myBox");


myBox.addEventListener("click", function(event){
   event.target.style.backgroundColor = "tomato";
   event.target.textContent = "Ouch💀!";
});

myBox.addEventListener("mouseover", event =>{
   event.target.style.backgroundColor = "yellow";
   event.target.textContent = "Don't do it😭";
});

myBox.addEventListener("mouseout", event =>{
   event.target.style.backgroundColor = "lightGreen";
   event.target.textContent = "Click Me😁";
});

//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>
  <div id="myBox">Click Me 😁</div>
    <script src="script.js"></script>
  </body>
</html>

//CSS👇🏼
#myBox{
    background-color: lightgreen;
    width: 300px;
    height: 300px;
    font-size: 4.5rem;
    font-weight: bold;
    display: flex;
    text-align: center;
    align-items: center;
}






// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

   if(event.key.startsWith("Arrow")){

      switch(event.key){
         case"ArrowUp":
            y -= moveAmount;
            break;
         case "ArrowDown":
            y += moveAmount;
            break;
         case "ArrowLeft":
            x -= moveAmount;
            break;
         case "ArrowRight":
            x += moveAmount;
            break;
      }
      myBox.style.top = `${y}px`
      myBox.style.left = `${x}px`
   }
})

document.addEventListener("keydown", event => {
   myBox.textContent = "😮";
   myBox.style.backgroundColor =  "tomato"
});

document.addEventListener("keyup", event => {
   myBox.textContent = "😁";
   myBox.style.backgroundColor =  "lightBlue"
});

//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>

    <div id="myBox">😁</div>
    <script src="script.js"></script>
  </body>
</html>

//CSS
#myBox{
    background-color: lightblue;
    width: 200px;
    height: 200px;
    font-size: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}




//65
//Hide/show
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

   if(myImg.style.visibility === "hidden"){
      myImg.style.visibility = "visible";
      myButton.textContent = "Hide"
   }
   else{
   myImg.style.visibility = "hidden";
   myButton.textContent = "Show"
   }
});

//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>

<img src="Gtr.png" id="myImg"><br>
<button id="myButton">Hide</button><br>

    <script src="script.js"></script>
  </body>
</html>

//CSS👇🏼
#myButton{
    font-size: 3rem;
}



//66
//Nodelist = Static collection of HTML elements by (id, class, element)
//           Can be created by using querySelectorAll()
//           Similar to an array, but no (map, filter, reduce)
//           Nodelist won't update to autoatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
   button.style.backgroundColor = "lightgreen";
   button.textContent += "💀"
});

// CLICK event listener

buttons.forEach(button => {
   button.addEventListener("click", event => {
      event.target.style.backgroundColor = "tomato"
   });
});

//mouseover and mouseout

buttons.forEach(button => {
   button.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "black"
   });
});

buttons.forEach(button => {
   button.addEventListener("mouseout", event => {
      event.target.style.backgroundColor = "lightGreen"
   });
});

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "bUTTON 5"; // STEP 2
newButton.classList = "myButtons"; 
document.body.appendChild(newButton); // STEP 3

//how to add the new button to the NodeList👇🏼
buttons = document.querySelectorAll(".myButtons");

console.log(buttons);
   

// REMOVE AN ELEMENT

buttons.forEach(button => {
   button.addEventListener("click", event => {
      event.target.remove();
      buttons = document.querySelectorAll(".myButtons");
      console.log(buttons);
   });
});
//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>
    <button class="myButtons">Button 1</button>
    <button class="myButtons">Button 2</button>
    <button class="myButtons">Button 3</button>
    <button class="myButtons">Button 4</button>

    <script src="script.js"></script>
  </body>
</html>

//CSS`👇🏼
.myButtons{
    font-size: 4rem;
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: hsl(205, 100%, 60%);
    color: white;
}


//67
//classList = Element property in JavaScript used to interact
//            with an element's list of classes (CSS classes)
//            Allows you to make reusable classes for many elements
//            across your webpage

// add()
// remove()
// toggle(rempve if present, add if not)
// replace(oldClass, newClass)
// contains()

//const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");
/*
myButton.addEventListener("mouseover", event => {
      myButton.classList.add("hover")
});

myButton.addEventListener("mouseout", event => {
   myButton.classList.remove("hover")
});
//you can replace the .add and .remove function with the toggle function it will do the same thing


const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {

   if(event.target.classList.contains("disabled")){
      event.target.textContent += "🤬";
   }
   else{
      event.target.classList.replace("enabled", "disabled");
   }
});
   //HTML for 👆🏼
   <h1 id="myH1">Hello</h1>
    <button id="myButton">My Button</button>
    */




let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
   button.classList.add("enabled");
});

buttons.forEach(button =>{
   button.addEventListener("mouseover", event => {
      event.target.classList.toggle("hover");
   });
});

buttons.forEach(button =>{
   button.addEventListener("mouseout", event => {
      event.target.classList.toggle("hover");
   });
});

buttons.forEach(button => {
   button.addEventListener("click", event => {
      if(event.target.classList.contains("disabled")){
         event.target.textContent += "🤬";
      }
      else{
         event.target.classList.replace("enabled", "disabled");
      }
      
   });
});
//html👇🏼
<button class="myButtons">Button 1</button>
<button class="myButtons">Button 2</button>
<button class="myButtons">Button 3</button>
<button class="myButtons">Button 4</button>
//CSS👇🏼
.myButtons{
   font-size: 4rem;
   margin: 10px;
   border: none;
   border-radius: 5px;
   padding: 10px 15px;
}

.enabled{
   background-color: hsl(204, 100%, 50%);
   color: white;
}

.hover{
   box-shadow: 0 0 10px black;
   font-weight: bold;
}

.disabled{
   background-color: hsl(0, 0%, 60%);
   color: hsl(0, 0%, 80%);
}






//70
// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell

function task1(callback){
   setTimeout(() => {
      console.log("Task 1 complete");
      callback();
   }, 2000);
}

function task2(callback){
   setTimeout(() => {
      console.log("Task 2 complete");
      callback();
   }, 1000);
}

function task3(callback){
   setTimeout(() => {
      console.log("Task 3 complete");
      callback();
   }, 3000);
}

function task4(callback){
   setTimeout(() => {
      console.log("Task 4 complete");
      callback();
   }, 1500);
}


task1(() => {
   task2(() => {
      task3(() => {
         task4()
      })
   })
})




//Promise = An object that manages asynchronous operations.
//            Wrap a Promise object around {asynchronous code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve, reject) => {asynchronous code})

// DO this chores in order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH 

function walkDog(){

   
   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const dogwalked =true;
         if(dogwalked){
            resolve("you walk the dog");
         }
         else{
            reject("you didn't walk the dog");
         }
         
      }, 1500);
   })
}

function cleanKitchen(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const kitchenCleaned = true;

         if(kitchenCleaned){
         resolve("you clean the kitchen");
         }
         else{
         reject("you didn't clean the kitchen")
         }
      }, 2500)
   })
}

function takeOutTrash(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const trashTakenOut = false;
         if(trashTakenOut){
            resolve("you take outh the trash");
         }
         else{
            reject("you didn't take out the trash")
         }
         
      }, 1500)
   })
}

walkDog().then( value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finshed all the tasks")})
         .catch(error => console.error(error));






// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise


//               Allows you write asynchronous code in a synchronous manner
//               Async dosen't have resolve or reject parameters
//               Everything after Await is placed in an event queue

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH 

function walkDog(){

   
   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const dogwalked =true;
         if(dogwalked){
            resolve("you walk the dog");
         }
         else{
            reject("you didn't walk the dog");
         }
         
      }, 1500);
   })
}

function cleanKitchen(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const kitchenCleaned = false;

         if(kitchenCleaned){
         resolve("you clean the kitchen");
         }
         else{
         reject("you didn't clean the kitchen")
         }
      }, 2500)
   })
}

function takeOutTrash(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const trashTakenOut = true;
         if(trashTakenOut){
            resolve("you take outh the trash");
         }
         else{
            reject("you didn't take out the trash")
         }
         
      }, 1500)
   })
}

async function doChores(){
   try{
   const walkDogResult = await walkDog();
   console.log(walkDogResult);

   const cleanKitchenResult = await cleanKitchen();
   console.log(cleanKitchenResult);
   
   const takeOutTrashResult = await takeOutTrash();
   console.log(takeOutTrashResult);
   }
   catch(error){
      console.error(error)
   }
}

doChores()











//74
//----------------------------------------------------------------------------------------------------
//JSON = (JavaScript Object Notation) data-interchange format
//       used for exchanging data between a server and a web application
//       JSON files {Key;value} OR [value1, value2, calue3]

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward"]`;
const jsonPerson = `{"name":"Spongebob","age": 30,"isEmployed": true,"hobies":["jellyFishing", "Karate", "Cooking"]}`
const jsonPeople = `[{"name": "Spongebob", "age": 30,"isEmployed": true},
                     {"name": "Squidward", "age": 50,"isEmployed": true},
                     {"name":"Sandy", "age": 27,"isEmployed": false }]`;
               
const parseData = JSON.parse(jsonPeople);

//console.log(parseData)

// fetch👇🏼
fetch("person.json")
     .then(response => response.json())
     .then(value => console.log(value))
     .catch(error => console.error(error))












//-------------------------------------------------------------------------------------------------------
// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web
//         fetch(url, {options})
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => {

         if(!response.ok){
            throw new Error("Could not fetch resource");
         }
         return response.json();

      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
      ;                                         */

fetchData()
async function fetchData() {
 
   try{
      const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if(!response.ok){
         throw new Error("Could not fetch resource")
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block"
   }
   catch(error){
      console.error(error);
   }
}


//HTML👇🏼
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript</title>
  </head>
  <body>

    <input type="text" id="pokemonName" placeholder="Enter pokemon name">
    <button onclick="fetchData()">Fetch Pokemon</button>

    <img src="" id="pokemonSprite" style="display: none;">

    <script src="script.js"></script>
  </body>
</html>
*/
