document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products');
    const cartContainer = document.querySelector('.cart__products');

    function updateQuantity(target, isIncrease) {
        const quantityValue = target.closest('.product__quantity').querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent, 10);
        quantity = isIncrease ? quantity + 1 : Math.max(1, quantity - 1);
        quantityValue.textContent = quantity;
    }

    function addToCart(product) {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent, 10);

        let cartProduct = cartContainer.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent, 10) + quantity;
        } else {
            const cartProductHTML = `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImageSrc}">
                    <div class="cart__product-count">${quantity}</div>
                </div>
            `;
            cartContainer.insertAdjacentHTML('beforeend', cartProductHTML);
        }
    }

    productsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('product__quantity-control_dec')) {
            updateQuantity(event.target, false);
        } else if (event.target.classList.contains('product__quantity-control_inc')) {
            updateQuantity(event.target, true);
        } else if (event.target.classList.contains('product__add')) {
            addToCart(event.target.closest('.product'));
        }
    });
});
