window.onload = function() {
  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var centerX = width*0.5,centerY = height*0.5,x,y,
      radius = 200,
      angleX = 0,
      angleY = 0,
      speedX = 0.05,
      speedY = 0.05;

      render();
      function render(){
        x = centerX + Math.cos(angleX)*radius;
        y = centerY + Math.sin(angleY)*radius;
        context.clearRect(0,0,width,height);
        context.beginPath();
        context.arc(x,y,5,0,Math.PI*2,false);
        context.fill();
        angleX += speedX;
        angleY += speedY;
        requestAnimationFrame(render);
      }
};
