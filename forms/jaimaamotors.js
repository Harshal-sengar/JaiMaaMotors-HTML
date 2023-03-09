
// var audio=document.getElementById("submit");
// function sound(){
//    audio.src = new Audio("C:\Users\Harshal Sengar\OneDrive\Desktop\songs\sindoor lal  chayayo.mp4");
//     audio.play();
// //alert("signup");
// }
var c=0;
var audio=document.getElementById("Raider");
function start(){
  if(c==0){
    c=1;
    audio.play();
  }
  else{
    c=0;
    audio.pause();
  }
}
