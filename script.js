const images = document.querySelectorAll("#photoSlider img");
let index = 0;

function showNextImage() {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
  index = (index + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, 2000);
