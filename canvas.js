/*
ctx.save();
var time = new Date();
ctx.translate(10* time.getSeconds(), 0);
xtc.fillRect(-500, 0, 100, 200);
ctx.restore();

ctx.save();
var time = new Date();
ctx.rotate(time.getSeconds() + (time.getMilliseconds()) / 1000, 0);
ctx.fillRect(-100, -220, 100, 100);
ctx.fillRect (-100, -220, 100, 100);
ctx.translate(20, 50);
ctx.restore;
*/


function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
/*
  ctx.beginPath();
  ctx.moveTo(0,0);

  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.lineTo(170, -120);
  ctx.lineTo(-40, 185);
  ctx.lineTo(-190, -120);
  ctx.stroke();
  */

  ctx.save();
  var time = new Date();
  ctx.translate(10* time.getSeconds(), 0);
  ctx.beginPath();
  ctx.arc(-325, -175, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(160, -300);
  ctx.lineTo(-450, 150);
  ctx.stroke();

  ctx.rect(-400, -150, 25, 200);
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.save(); // saves the coordinate system
  var time = new Date();
  ctx.rotate(time.getSeconds() + (time.getMilliseconds()) / 1000, 0);
  ctx.rotate(50);
  ctx.rect(-250, -200, 100, 100);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.restore();


  //ctx.translate(250,50); // now the position (0,0) is found at (250,50)
  //ctx.rotate(0.30); // rotate around the start point of your line
  //ctx.moveTo(0,0) // this will actually be (250,50) in relation to the upper left corner
  //ctx.lineTo(0,200) // (250,250)
  //ctx.stroke();

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
