function preload(){
}
function draw(){
image(video,0,0,500,400);
tint(tint_color);
circle(15,15,50);
rect(40,15, 450, 5, 20);
circle(485,15,50);
rect(13,37, 5, 325, 20);
circle(15,385,50);
rect(40,380, 450, 5, 20);
circle(485,385,50);
rect(480,40, 5, 320, 20);
}
function setup(){
canvas=createCanvas(500,400);
canvas.position(350,350);
video=createCapture(VIDEO);video.hide();
tint_color="";
}
function take_snapshot()
{ save('Colorful_Shaun.png'); }
 function filter_tint() { tint_color = document.getElementById("color_name").value; }