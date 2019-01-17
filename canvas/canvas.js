/* eslint-disable no-unused-vars */
function drawOnCanvas() {
  // eslint-disable-next-line no-undef
  const canvas = document.getElementById('complexCanvas');
  const context = canvas.getContext('2d');
  context.moveTo(10, 10);
  context.lineTo(60, 60);
  context.lineTo(10, 110);
  context.lineTo(10, 10);
  context.lineTo(180, 60);
  context.lineTo(10, 110);
  context.stroke();
  context.moveTo(60, 60);
  context.lineTo(180, 60);
  context.stroke();
}
