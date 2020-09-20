
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300,200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.rect(130, 150, 350, 140);
ctx.stroke();
color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400,200, 40 ,0 , 2*Math.PI);
ctx.stroke();
color = "yellow"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250,230, 40 ,0 , 2*Math.PI);
ctx.stroke();
color = "green"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350,230, 40 ,0 , 2*Math.PI);
ctx.stroke();

//additional activity

function clearArea()
{
    ctx.Rect(0, 0, 250, 300);
}

	
