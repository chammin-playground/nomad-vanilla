const images = ["desert.jpg", "hiking.jpg", "mountain.jpg", "sea.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${chosenImage}`;
document.body.appendChild(backgroundImg);
