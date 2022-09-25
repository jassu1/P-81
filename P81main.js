canvas=document.getElementById("myCanvas");
colour="red";
ctx=canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(240, 150, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(290, 110, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(340, 150, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(390, 110, 40, 0 , 2 * Math.PI);
ctx.stroke(); 