let cart = [];
let total = 0;

function addToCart(productId) {
    let product = getProductById(productId);
    cart.push(product);
    total += product.price;
    updateCart();
}

const products = {
    1: { id: 1, name: 'Chocolate Chip Cookie', price: 50 },
    2: { id: 2, name: 'Oatmeal Raisin Cookie', price: 60 },
    3: { id: 3, name: 'Peanut Butter Cookie', price: 55 },
    4: { id: 4, name: 'Sugar Cookie', price: 45 },
    5: { id: 5, name: 'Double Chocolate Cookie', price: 70 },
    6: { id: 6, name: 'Red Velvet Cookie', price: 100 },
    7: { id: 7, name: 'Smores Cookie', price: 80 },
    8: { id: 8, name: 'Lemon Cookie', price: 70 },
    9: { id: 9, name: 'M&M Cookie', price: 100 },
    10: { id: 10, name: 'Salted Caramel Cookie', price: 60 },
};

function getProductById(productId) {
    return products[productId];
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.name + ' - P' + item.price.toFixed(2);
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(item.id);
        };
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    let index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        total -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
    }
}

function goToOrderSummary() {
    
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);

    
    window.location.href = 'orderC.html';
}
