// cart.js

let cart = [];
let totalPrice = 0;

// Update cart display when products are added
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('cart-total-price');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    cartList.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        totalPriceElement.textContent = '0.00';
    } else {
        emptyCartMessage.style.display = 'none';
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} - ₹${item.price}`;
            cartList.appendChild(listItem); // Append item to the cart list

            // Create a delete button for each item
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deleteFromCart(index);
            listItem.appendChild(deleteBtn);
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
}


// Add product to cart
function addToCart(product) {
    cart.push(product);
    totalPrice += product.price;
    updateCartDisplay();
}

// Delete product from cart
function deleteFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout');
    // Implement checkout functionality here
});

document.getElementById('apply-coupon-btn').addEventListener('click', () => {
    const couponCode = document.getElementById('coupon-code').value;

    if (couponCode === 'DISCOUNT10') {
        totalPrice *= 0.9; // Apply a 10% discount
        alert('Coupon applied! 10% discount!');
    } else {
        alert('Invalid coupon code.');
    }
    updateCartDisplay();
});
