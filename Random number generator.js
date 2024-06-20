//HTMl👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
  </head>
  <body>
    <label id="xlabel"></label><br>
    <label id="zlabel"></label><br>
    <label id="ylabel"></label><br>
    <button type="button" id="rollButton">roll</button>
    <script src="script.js"></script>
  </body>
</html>



//JS👇🏼

let x = Math.floor(Math.random() * 20)  + 1;
 let z = Math.floor(Math.random() * 20)  + 1;
 let y = Math.floor(Math.random() * 20)  + 1;

document.getElementById("rollButton").onclick = function(){
 x = Math.floor(Math.random() * 20)  + 1;
 z = Math.floor(Math.random() * 20)  + 1;
 y = Math.floor(Math.random() * 20)  + 1;

 document.getElementById("xlabel").innerHTML = x;
 document.getElementById("zlabel").innerHTML = z;
 document.getElementById("ylabel").innerHTML = y;
}
