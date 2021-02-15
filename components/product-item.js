// product-item.js
const template = document.createElement('template');
template.innerHTML = `<li class="product">
<img width=200>
<p class="title"></p>
<p class="price"></p>
<button>Add to Cart</button>
</li>`;
class ProductItem extends HTMLElement {
  constructor() {
    super(); 

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    let button = document.createElement('Button');

    
    button.textContent = 'Add to Cart'; 
    button.onclick=()=>{
      if(button.textContent == "Add to Cart"){
        alert('Add to Cart');
        button.textContent = 'Remove From Cart';
        cartCount.innerText = (Number(cartCount.innerText)+1).toString();
      }
      else{
        alert('Remove From Cart');
        button.textContent= 'Add to Cart';
        cartCount.innerText = (Number(cartCount.innerText)-1).toString();
      }

      button.textContent = 'Add to Cart';
      this.templete.append(botton);
      this.shadowRoot.append(templete.content);

    }

  }


  
}

customElements.define('product-item', ProductItem);