// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1. fetch API to get data

  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))

  // 2. Save data to localStorage



});