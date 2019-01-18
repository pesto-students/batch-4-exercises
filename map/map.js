/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function drawImageToCanvas(img) {
  const canvas = document.getElementById('target');
  const context = canvas.getContext('2d');
  const sourceImage = document.getElementById('source-image');
  context.drawImage(sourceImage, 0, 0);
}
function redirectToPage(event) {
  if (event.x % 2 === 0) {
    window.location = 'https://unsplash.com/';
  } else {
    window.location = 'https://google.com/';
  }
}
