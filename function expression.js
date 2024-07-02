//html👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>lol</title>
  </head>
  <body>
    <label id="MyLabel">0</label>
    <button id="decreaseButton">decrease</button>
    <button id="increaseButton">increase</button>
    <script src="script.js"></script>
  </body>
</html>


//JS👇
let count = 0;
   /*
function increaseCount(){
   count +=1;
   document.getElementById("MyLabel").innerHTML = count;
}

function dencreaseCount(){
   count -=1;
   document.getElementById("MyLabel").innerHTML = count;
}
   */

document.getElementById("increaseButton").onclick = function(){
   count +=1;
   document.getElementById("MyLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
   count -=1;
   document.getElementById("MyLabel").innerHTML = count;
}
