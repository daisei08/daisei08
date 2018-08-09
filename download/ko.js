img[0] = new Image(); 
img[0].src = "image/0.jpg"; 
img[1] = new Image(); 
img[1].src = "image/1.jpg"; 
var cnt=0;
function changeIMG(){
if (cnt == 2) 
{ cnt=0; } 
else 
{ cnt++; }
document.getElementById("gazo").src=img[cnt].src; 
} 
