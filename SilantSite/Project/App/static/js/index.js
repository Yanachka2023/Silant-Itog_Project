
const rotatingImage = document.querySelector(".indexLogo");
const images = ["static/assets/img/pd_3.0_2-scaled.jpg", "static/assets/img/n6_ba9656bc50.jpg"];
let currentIndex = 0;

function changeImage() {
    rotatingImage.src = images[currentIndex];
    currentIndex = Math.floor(Math.random() * images.length);
}

setInterval(changeImage, 3000);