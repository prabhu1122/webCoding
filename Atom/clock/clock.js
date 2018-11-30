window.onload = function(){
   var canvas = document.getElementById("canvas"),
       context = canvas.getContext("2d"),
       width  = canvas.width = window.innerWidth,
       height = canvas.height = window.innerHeight;

       var slice = Math.PI*2/numBall,
           centerY = height/2,
           centerX = width/2,
           numBall = 100,
           radius = 200,
           angle = 0,
           x,y;
           for(var i = 0;i<numBall;i+=1){
             angle = i*slice;
             x = centerX + Math.cos(angle)*radius;
             y = centerY + Math.sin(angle)*radius;
             context.beginPath();
             context.arc(x,y,10,0,Math.PI*2,false);
             context.fill();
           }
};
