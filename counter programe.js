let count = 0;

 document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
 }
 
 document.getElementById("restBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
 }

 document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
 }

//HTML👇🏼
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
  </head>
  <body>
    <label id="countLabel">0</label><br />
    <button id="decreaseBtn">decrease</button>
    <button id="restBtn">rest</button>
    <button id="increaseBtn">increase</button>
    <script src="script.js"></script>
  </body>
</html>




//css👇🏼
#countLabel{
    display: block;
    text-align: center;
    font-size: 50px;
}
