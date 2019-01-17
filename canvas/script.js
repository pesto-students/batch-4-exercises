function drawFace(ctx) {
  ctx.fillStyle = 'yellow';
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawBody(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 125);
  ctx.lineTo(100, 275);
  ctx.stroke();
}

function drawArms(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 175);
  ctx.lineTo(60, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 175);
  ctx.lineTo(140, 200);
  ctx.stroke();
}

function drawLegs(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 275);
  ctx.lineTo(60, 350);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 275);
  ctx.lineTo(140, 350);
  ctx.stroke();
}

function drawStickFigure(canvas) {
  const ctx = canvas.getContext('2d');
  drawFace(ctx);
  drawBody(ctx);
  drawArms(ctx);
  drawLegs(ctx);
}

// eslint not recognizing document variable
// eslint-disable-next-line
drawStickFigure(document.getElementById('canvas'));
