// // Import the express module
// const express = require('express');

// // Create an instance of the express application
// const app = express();

// // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Set up the server to listen on a specific port (e.g., 3000)
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


let currentIndex = 0;

function showSlide(index) {
  const track = document.querySelector('.carousel-track');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  const newPosition = -index * itemWidth;
  track.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + getTotalItems()) % getTotalItems();
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % getTotalItems();
  showSlide(currentIndex);
}

// function prevSlide() {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   const totalItems = getTotalItems();
//   currentIndex = Math.min(currentIndex + 1, totalItems - 5);
//   showSlide(currentIndex);
// }

function getTotalItems() {
  return document.querySelectorAll('.carousel-item').length;
}

showSlide(currentIndex);
