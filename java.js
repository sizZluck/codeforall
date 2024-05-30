const cartButton = document.getElementById('cart-button');
const cart = document.getElementById('cart');
const cartItems = document.querySelector('.cart__items');
const cartCount = document.querySelector('.cart-count');
const productImages = document.querySelectorAll('.product-container img');


// Добавление обработчика события для закрытия корзины при клике за ее пределами
document.addEventListener('click', (e) => {
  if (!e.target.closest('#cart') && !e.target.closest('#cart-button')) {
    cart.classList.remove('active');
  }
});

cartButton.addEventListener('click', () => {
  cart.classList.toggle('active');
});

productImages.forEach((image) => {
  image.addEventListener('click', () => {
    const productId = image.dataset.productId;
    const productDescription = document.querySelector(`.product-container[data-product-id="${productId}"] .product-description`);
   
  });
});

const productButtons = document.querySelectorAll('.product__button');
productButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.parentNode.querySelector('.product__name').innerText;
    const productPrice = button.parentNode.querySelector('.product__price').innerText;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');
    cartItem.innerHTML = `
      <div class="cartitemname">${productName}</div>
      <div class="cartitemprice">${productPrice}</div>
    `;

    cartItems.appendChild(cartItem);

    // Обновление счетчика товаров в корзине
    const currentCount = parseInt(cartCount.innerText);
    cartCount.innerText = currentCount + 1;
  });
});
function showDescription() {
      const description = document.querySelector('.product-description');
      description.style.display = 'block';
    }

    function hideDescription() {
      const description = document.querySelector('.product-description');
      description.style.display = 'none';
    }
    const productImagess = document.querySelectorAll('.product__image');

productImagess.forEach((image) => {
  image.addEventListener('mouseover', showDescription);
  image.addEventListener('mouseout', hideDescription);
});

function showDescription(event) {
  const productContainer = event.target.closest('.product');
  const description = productContainer.querySelector('.product-description');
  description.style.display = 'block';
}

function hideDescription(event) {
  const productContainer = event.target.closest('.product');
  const description = productContainer.querySelector('.product-description');
  description.style.display = 'none';
}
document.getElementById("trigger").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
});
document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});
document.getElementById("trigger2").addEventListener("click", function() {
  document.getElementById("overlay2").style.display = "block";
});
document.getElementById('overlay2').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});