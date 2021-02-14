// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1. fetch API to get data
    let itemsArray = []

  // 2. Save data to localStorage
   
   if(!localStorage.length > 0){

    fetch('https://fakestoreapi.com/products')
    .then (res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))
   }





});