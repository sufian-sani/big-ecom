$(document).ready(function() {
    $(".btn-cart").click(function(){
         const $button = $(this);
         const productId = $button.data('id');
         const productName = $button.data('name');
         const productPrice = $button.data('price');
         const productImage = $button.data('image');
         let cart = JSON.parse(localStorage.getItem('cart')) || [];
         const productIndex = cart.findIndex(product => product.id == productId);
         if (productIndex !== -1) {
              cart[productIndex].quantity += 1;
          } else {
              cart.push({ id: productId, name: productName, price: parseFloat(productPrice), image: productImage, quantity: 1 });
          }
         localStorage.setItem('cart', JSON.stringify(cart));
    });
});
// function loadCart() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-container');
//     cartContainer.innerHTML = '';
//
//     if (cart.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//     } else {
//         let total = 0;
//         cart.forEach(product => {
//             const productTotal = product.price * product.quantity;
//             total += productTotal;
//             cartContainer.innerHTML += `
//                 <div>
//                     <p>${product.name} - $${product.price} x ${product.quantity} = $${productTotal}</p>
//                     <img src="${product.image}" alt="${product.name} Image" style="width: 200px; height: auto;">
//                     <button onclick="removeFromCart(${product.id})">Remove</button>
//                 </div>
//             `;
//         });
//         cartContainer.innerHTML += `<p>Total: $${total}</p>`;
//     }
// }
// $(document).ready(function() {
//
// });
// $(window).on('load', function loadCart() {
//     console.log('ugsjdgjdg')
// });

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        cart.forEach(product => {
            const productTotal = product.price * product.quantity;
            total += productTotal;
            cartContainer.innerHTML += `
                <div>
                    <p>${product.name} - $${product.price} x ${product.quantity} = $${productTotal}</p>
                    <img src="${product.image}" alt="${product.name} Image" style="width: 200px; height: auto;">
                    <button onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            `;
        });
        cartContainer.innerHTML += `<p>Total: $${total}</p>`;
    }
}

window.onload = loadCart;