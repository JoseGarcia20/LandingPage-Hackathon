const sliderImg = document.querySelectorAll('.imgSlider');
let currentIndex = 0;

function showImage(index) {
  sliderImg.forEach((image, i) => {
    if (i === index) {
      image.style.transform = 'translateX(0)';
    } else {
      image.style.transform = 'translateX(100%)';
    }
  });
}

function siguienteImg() {
  currentIndex = (currentIndex + 1) % sliderImg.length;
  showImage(currentIndex);
}

setInterval(siguienteImg, 3000); //Tiempo que demora la imagen para cambiar (3seg)