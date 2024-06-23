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
