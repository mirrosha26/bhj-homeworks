document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products');
    const cartContainer = document.querySelector('.cart__products');

    function updateQuantity(target, isIncrease) {
        const quantityValue = target.closest('.product__quantity').querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent, 10);
        if (isIncrease) {
            quantity++;
        } else if (quantity > 1) {
            quantity--;
        }
        quantityValue.textContent = quantity;
    }

    function addToCart(product) {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent, 10);

        let cartProduct = cartContainer.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            // Если товар уже в корзине, увеличиваем количество
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent, 10) + quantity;
        } else {
            // Если товара нет в корзине, создаем новый элемент
            cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;

            const cartProductImage = document.createElement('img');
            cartProductImage.className = 'cart__product-image';
            cartProductImage.src = productImageSrc;

            const cartProductCount = document.createElement('div');
            cartProductCount.className = 'cart__product-count';
            cartProductCount.textContent = quantity;

            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);

            cartContainer.appendChild(cartProduct);
        }
    }

    // Обработчики событий для кнопок увеличения/уменьшения и добавления в корзину
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