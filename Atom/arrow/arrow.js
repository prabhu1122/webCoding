window.onload = function(){
   var canvas = document.getElementById("canvas"),
       context = canvas.getContext("2d"),
       width = canvas.width = window.innerWidth,
       height = canvas.height = window.innerHeight,

       arrowX = width/2,
       arrowY = height/2,
       dx,dy,
       speedX = 0.01,
       angle1X = 0,
       speedY = 0.0131,
       angle1Y = 0,
       radius = 200,
       angle = 0;

       render();

       function render(){
           context.clearRect(0,0,width,height);
           context.save();

           context.translate(arrowX,arrowY);
           context.rotate(angle);
           arrowX =width/2 + Math.cos(angle1X)*radius;
           arrowY =height/2 + Math.sin(angle1Y)*radius;
           context.beginPath();
           context.moveTo(20,0);
           context.lineTo(-20,0);
           context.moveTo(20,0);
           context.lineTo(10,-10);
           context.moveTo(20,0);
           context.lineTo(10,10);
           context.stroke();
           angle1X += speedX;
           angle1Y += speedY;
           context.restore();
           requestAnimationFrame(render);
           console.log(angle);
       }

       document.body.addEventListener("mousemove",function(event){
         dx = event.clientX - arrowX;
         dy = event.clientY - arrowY;
         angle = Math.atan2(dy,dx);
       });

};
