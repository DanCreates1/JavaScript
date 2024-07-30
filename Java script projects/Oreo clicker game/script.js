console.log("JavaScript file is ready")
let clicks = 0

function add(){
    document.getElementById("count").innerHTML = clicks++
    
    if(clicks >= 15){
        document.getElementById("level").textContent = "Newbie"
     }

     if(clicks >= 30){
        document.getElementById("level").textContent = "Starter"
     }

     if(clicks >= 40){
        document.getElementById("level").textContent = "Intermediate"
     }

     if(clicks >= 50){
        document.getElementById("level").textContent = "ProPlayer"
     }

     if(clicks >= 60){
        document.getElementById("level").textContent = "Master"
     }

     if(clicks >= 70){
        document.getElementById("level").textContent = "Legend"
     }

     if(clicks >= 100){
        document.getElementById("level").textContent = "Congratulations you finished the game"
     }
}
