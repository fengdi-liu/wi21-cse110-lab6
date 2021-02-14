// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1. fetch API to get data

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data))

  // 2. Save data to localStorage



});