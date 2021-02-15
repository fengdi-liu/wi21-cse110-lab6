// product-item.js
const template = document.createElement('template');
template.innerHTML = `<li class="product">
<img width=200>
<p class="title"></p>
<p class="price"></p>
<button id="cart-button">Add to Cart</button>
</li>`;

class ProductItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    let button = this.shadowRoot.querySelector('#cart-button');

    button.onclick = function(e) {
      let cartCount = document.querySelector("#cart-count");
      if (button.textContent == "Add to Cart") {
        alert('Add to Cart');
        button.textContent = 'Remove From Cart';
        cartCount.innerText = (Number(cartCount.innerText) + 1).toString();
      }
      else {
        alert('Remove From Cart');
        button.textContent = 'Add to Cart';
        cartCount.innerText = (Number(cartCount.innerText) - 1).toString();
      }
    }
  }

  // connectedCallback() {
  //   console.log('connectedCallback')
  //   this.shadowRoot.querySelector('#cart-button').addEventListener('click', () => this.toggleCart());
  // }

  // disconnectedCallback() {
  //   this.shadowRoot.querySelector('#cart-button').removeEventListener();
  // }
}

customElements.define('product-item', ProductItem);