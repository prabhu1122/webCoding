window.onload = function(){
    var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

      context.translate(0,height/2);
      context.scale(1,-1);
      for (var angle = 0; angle < 2*Math.PI; angle+=0.01) {
        x = angle*100,
        y = 100*Math.sin(angle);
        context.fillRect(x,y,5,5);
      }
};
