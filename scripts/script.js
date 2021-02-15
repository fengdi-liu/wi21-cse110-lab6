// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1. fetch API to get data
  // let itemsArray = []

  // 2. Save data to localStorage
  localStorage.clear();

  if (localStorage.length === 0) {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        fillData(data);
        displayData();
      })
    //  .catch(error => console.log(error))
  }

  function fillData(data) {
    console.log(data);

    data.forEach(item => {
      localStorage.setItem(item.id, JSON.stringify(item));
    });
  }

  function displayData() {

    console.log('displayData called.')
    let products = document.getElementById('product-list')

    for (var i = 0; i < localStorage.length; i++) {
      let product = document.createElement("product-item");
      let prod = product.shadowRoot;
      let item = JSON.parse(localStorage[i]);
      prod.querySelector('.price').textContent = "$" + item.price;
      prod.querySelector('.title').textContent = item.title;
      prod.querySelector('img').src = item.image;
      prod.querySelector('img').alt = item.title;
      products.appendChild(prod);
    };
  }

  console.log(localStorage);
});