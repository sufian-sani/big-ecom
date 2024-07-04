$(document).ready(function() {
    $(".cart-product-section").on("click",function(){
         const $button = $(this);
         const productId = $button.data('id');
         const productName = $button.data('name');
         const productPrice = $button.data('price');
         const productImage = $button.data('image');
         const quantityProduct =  $(".product-form .quantity").val()
         let cart = JSON.parse(localStorage.getItem('cart')) || [];
         const productIndex = cart.findIndex(product => product.id == productId);
        // console.log('hdgjsghdj')
         if (productIndex !== -1) {
              cart[productIndex].quantity += 1;
          } else {
              cart.push({ id: productId, name: productName, price: parseFloat(productPrice), image: productImage, quantity: productIndex });
          }
         localStorage.setItem('cart', JSON.stringify(cart));
    });
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
                    <tr>
                        <td class="product-thumbnail">
                            <div class="p-relative">
                                <a href="#">
                                    <figure>
                                        <img src="${product.image}" alt="${product.name} Image" alt="product"
                                            width="300" height="338">
                                    </figure>
                                </a>
                                <button type="submit" class="btn btn-close"><i
                                        class="fas fa-times"></i></button>
                            </div>
                        </td>
                        <td class="product-name">
                            <a href="#">
                                ${product.name}
                            </a>
                        </td>
                        <td class="product-price"><span class="amount">${product.price}</span></td>
                        <td class="product-quantity">
                            <div class="input-group">
                                <input class="quantity form-control" type="number" min="1" max="100000" value="${product.quantity}" data-id="${product.id}">
                                <button class="quantity-plus w-icon-plus"></button>
                                <button class="quantity-minus w-icon-minus"></button>
                            </div>
                        </td>
                        <td class="product-subtotal">
                            <span class="amount">${productTotal}</span>
                        </td>
                    </tr>
                `;
                let quantity = `${product.quantity}`
                // console.log(quantity)
                $('input[type="number"].quantity').val(quantity);
            });
            let totalAmount = `$${total}`
            $(".cart-subtotal > span").text(totalAmount);
            $(".order-total > span").text(totalAmount);
            // -------------------
            // const cartSubTotal = document.getElementsByClassName('cart-subtotal');
            // console.log(cartSubTotal)
            // cartSubTotal.innerText = ('dkshdkshd');
            // console.log(cartSubTotal)
            // $(".cart-subtotal > .ls-25 > span").innerHTML += `<p>Total: ghghgh</p>`;
            //     cartContainer.innerHTML += `
            //         <div>
            //             <p>${product.name} - $${product.price} x ${product.quantity} = $${productTotal}</p>
            //             <img src="${product.image}" alt="${product.name} Image" style="width: 200px; height: auto;">
            //             <button onclick="removeFromCart(${product.id})">Remove</button>
            //         </div>
            //     `;
            // });
            // cartContainer.innerHTML += `<p>Total: $${total}</p>`;
        }
    }

    // Function to get current quantity of a product

    if (window.location.pathname.includes('cart')) {
        loadCart();
    }

    // if (document.readyState === 'complete') {
    //     loadCart();
    // } else {
    //     window.onload = loadCart;
    // }
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

// window.onload = loadCart;

