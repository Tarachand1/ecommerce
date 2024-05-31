document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartButton = document.getElementById('viewCart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSection = document.getElementById('cart');

    // Add to Cart button click handler
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productName = event.target.dataset.name;
        const productPrice = event.target.dataset.price;

        // Create cart item element
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice}`;

        // Add cart item to the cart
        cartItemsContainer.appendChild(cartItem);

        // Show cart section
        cartSection.style.display = 'block';
    }

    // View Cart button click handler
    viewCartButton.addEventListener('click', function() {
        cartSection.style.display = cartSection.style.display === 'none' || cartSection.style.display === '' ? 'block' : 'none';
    });
});
