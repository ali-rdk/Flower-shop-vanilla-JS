const add_btn = document.querySelectorAll('.add-to-cart');

const items = []
add_btn.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        const new_product = {
            name : e.target.parentElement.previousElementSibling.innerText,
            price : +e.target.previousElementSibling.innerText[0]
        }
        const cart_items = localStorage.getItem('cart-items');
        const parsed_cart_items = JSON.parse(cart_items);
        parsed_cart_items.push(new_product);
        const stringify_items = JSON.stringify(parsed_cart_items);
        localStorage.setItem('cart-items', stringify_items);
        window.location.href = "../pages/cart.html";
    })
})

