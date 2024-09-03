const images = [
    'url("img/1.jpg")',
    'url("img/2.jpg")',
    'url("img/3.jpg")',
    'url("img/4.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);

window.onload = changeBackground;
