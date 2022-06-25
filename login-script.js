function active_1(){
   ele = document.getElementById("btn-1");
   ele.style.backgroundColor = "dodgerblue";
   ele.style.color = "white";
   document.getElementById("btn-2").style.background = "rgba(255, 255, 255, 0.59)";
   document.getElementById("btn-2").style.color = "#630505";
   document.getElementById("for-expert").style.display = "none";
}

function active_2(){
    ele = document.getElementById("btn-2");
    ele.style.backgroundColor = "dodgerblue";
    ele.style.color = "white";
    document.getElementById("btn-1").style.background = "rgba(255, 255, 255, 0.59)";
    document.getElementById("btn-1").style.color = "#630505";
    document.getElementById("for-expert").style.display = "block";
 }