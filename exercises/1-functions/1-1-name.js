"use strict";
drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 10;
   context.strokeStyle = 'purple'
   context.beginPath();
   context.moveTo(50,260);
   context.lineTo(50,50);
   context.lineTo(150,50)
   context.lineTo(150,260)
   context.lineTo(150,150)
   context.lineTo(50,150)
   context.stroke();

   context.lineWidth = 10;
   context.strokeStyle = 'purple'
   context.beginPath();
   context.moveTo(200,250);
   context.lineTo(200,50);
   context.lineTo(300,150)
   context.lineTo(200,250)
   context.lineTo(200,50)
   context.stroke();

   context.lineWidth = 10;
   context.strokeStyle = 'purple'
   context.beginPath();
   context.moveTo(350,260);
   context.lineTo(350,50);
   context.lineTo(450,50)
   
   context.stroke();
}
   