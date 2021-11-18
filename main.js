var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x,last_position_y;
var color="red";
var width_line=3;
var radius=40;

canvas.addEventListener("mousedown",my_mousedown );
function my_mousedown(e){
mouseEvent= "mousedown";
color=document.getElementById("color").value;
width_line=document.getElementById("width").value;
radius = document.getElementById("radiusChange").value;
}
canvas.addEventListener("mouseup",my_mouseup );
function my_mouseup(e){
mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave );
function my_mouseleave(e){
mouseEvent= "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove );
function my_mousemove(e){
var current_position_x= e.clientX-canvas.offsetLeft;
var current_position_y= e.clientY-canvas.offsetTop;


if (mouseEvent== "mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    
    

    console.log("current position of x and y  =  ");
    console.log("x =  "+current_position_x+ " , y =   "+current_position_y);
    ctx.arc(current_position_x,current_position_y, radius, 0 , 2 * Math.PI);
    ctx.stroke();

}

}
function clearArea() {
    ctx.clearRect(0,0 , ctx.canvas.width, ctx.canvas.height);
}
 
