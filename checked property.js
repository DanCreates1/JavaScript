//checked property

document.getElementById("mybutton").onclick = function(){

   if(document.getElementById("myCheakBox").checked){
      console.log("you are subscribed")
   }
   else{
      console.log("you are not sunscribed")
   }
}


//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <label for="myCheakBox">Subscribe</label>
    <input type="checkbox"  id="myCheakBox"><br>

    <button id="mybutton">submit</button>
    <script src="script.js"></script>
  </body>
</html>




//version 2.0
//html👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <label for="myCheakBox">JavaScript</label>
    <input type="checkbox" id="myCheakBox" /><br />


    <label for="vissabtn">Visa</label>
    <input type="radio" name="card" id="vissabtn" />

    <label for="mastercard">mastercard</label>
    <input type="radio" name="card" id="mastercardbtn" />

    <label for="Paypal">Paypal</label>
    <input type="radio" name="card" id="paypalbtn" /><br />


    <button id="mybutton">submit</button>
    <script src="script.js"></script>
  </body>
</html>


//js👇🏼
document.getElementById("mybutton").onclick = function(){
   const myCheakBox = document.getElementById("myCheakBox");
   const vissabtn = document.getElementById("vissabtn");
   const mastercardbtn = document.getElementById("mastercardbtn");
   const paypalbtn = document.getElementById("paypalbtn");

   if(document.getElementById("myCheakBox").checked){
      console.log("you are subscribed");
   }
   else{
      console.log("you are not sunscribed");
   }

   if(vissabtn.checked){
      console.log("you are paying with a Visa!");
   }
   else if(paypalbtn.checked){
      console.log("you are paying with Paypal!");
   }
   else{
      console.log("you are paying with a Visa!")
   }
}
