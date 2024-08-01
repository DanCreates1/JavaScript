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
