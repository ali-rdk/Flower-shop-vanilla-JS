const cart_section = document.querySelectorAll('.cart')[0];
const product = cart_section.children[0];
const price_section = cart_section.children[1];

const cart_items = localStorage.getItem('cart-items');
const parsed_cart_items = JSON.parse(cart_items)

if(parsed_cart_items && parsed_cart_items.length > 0){
    const cart_title = document.createElement('p');
    cart_title.innerHTML = 'Your Cart';
    cart_title.classList.add('cart-title');
    product.appendChild(cart_title)
    let item_desc = '';
    let final_price = 0;
    parsed_cart_items.forEach(element => {
        // const item_cart = document.createElement('div');
        // item_cart.classList.add('item-cart');

        // const product_img = document.createElement('img');
        // product_img.src = `./images/${element.name}.png`;
        item_desc = `<div class="item-card">
        <img src="../images/${element.name}.png" alt="">
        <div class="desc">
            <div class="item-name">
                <div class="item-title">
                    <p class="">${element.name}</p>
                </div>                 
            </div>
            <div class="item-price">
                    <p>Total ${element.price}$</p>
            </div>
        </div>
    </div>`;
        product.innerHTML += item_desc;
        final_price += element.price;
    });
    const price_msg = document.createElement('p');
    price_msg.innerText = `Subtotal for ${parsed_cart_items.length} items: ${final_price}$`;
    const checkout_btn = document.createElement('button');
    checkout_btn.innerHTML = 'Checkout'
    price_section.appendChild(price_msg);
    price_section.appendChild(checkout_btn);
    checkout_btn.addEventListener('click',()=>{
        console.log("ww")
        localStorage.setItem('cart-items', JSON.stringify([]))
    });
}else{
    product.innerHTML = `            <svg width="258" height="234" viewBox="0 0 258 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43 0C48.151 0 52.5854 3.74309 53.5708 8.91668L54.2427 14.625H242.681C251.774 14.625 259.03 23.8799 256.477 33.2079L232.29 120.976C230.543 127.283 224.899 131.625 218.494 131.625H76.4594L80.5802 153.562H218.583C224.541 153.562 229.333 158.453 229.333 164.531C229.333 170.61 224.541 175.5 218.583 175.5H71.2635C66.5156 175.5 62.0812 171.752 61.0958 166.588L34.1044 21.9375H10.75C4.8151 21.9375 0 17.0244 0 10.9688C0 4.91309 4.8151 0 10.75 0H43ZM57.3333 212.062C57.3333 199.951 66.9635 190.125 78.8333 190.125C90.7031 190.125 100.333 199.951 100.333 212.062C100.333 224.174 90.7031 234 78.8333 234C66.9635 234 57.3333 224.174 57.3333 212.062ZM229.333 212.062C229.333 224.174 219.703 234 207.833 234C195.964 234 186.333 224.174 186.333 212.062C186.333 199.951 195.964 190.125 207.833 190.125C219.703 190.125 229.333 199.951 229.333 212.062Z" fill="#F2F2F2"/>
</svg> `;
    price_section.innerHTML = '';
    price_section.style.backgroundColor = 'transparent';
}