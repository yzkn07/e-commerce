

let kucuk_photo_1 = document.getElementById("photo_1")
let kucuk_photo_3 = document.getElementById("photo_3")
let kucuk_photo_2 = document.getElementById("photo_2")
let kucuk_photo_4 = document.getElementById("photo_4")
let buyukresim = document.getElementById("buyuk_resim")

let sellerName = document.querySelector(".seller")
let productName = document.querySelector(".product-name")
let productDescription = document.querySelector(".product-descripttion")
let productPrice = document.querySelector(".product-price")
let productDiscount = document.querySelector(".product-discount")
let productFullPrice = document.querySelector(".product-full-price")







async function logProduct() {
    const response = await fetch("https://b6f5db1d3ce546e2bdf9dd300c774a55.api.mockbin.io/");
    const ayakkabi = await response.json();

    seller = ayakkabi.seller;
    title = ayakkabi.title;
    description = ayakkabi.description;
    price = ayakkabi.price;
    discountAmount = ayakkabi.discountAmount;

    photo_1 = ayakkabi.photos[0];
    photo_2 = ayakkabi.photos[1];
    photo_3 = ayakkabi.photos[2];
    photo_4 = ayakkabi.photos[3];
    kucuk_photo_1.src = photo_1;
    kucuk_photo_2.src = photo_2;
    kucuk_photo_3.src = photo_3;
    kucuk_photo_4.src = photo_4;
    buyukresim.src = photo_1;

    sellerName.innerText = `${seller}`;
    productName.innerText = `${title}`;
    productDescription.innerText = `${description}`;
    productPrice.innerText = `$ ${price*discountAmount}`;
    productDiscount.innerText = `${100 * discountAmount} %`;
    productFullPrice.innerText = `$ ${price}`;

    
  }
logProduct();

function buyukresim1() {
    buyukresim.src = kucuk_photo_1.src;
}
function buyukresim2() {
    buyukresim.src = kucuk_photo_2.src;
}
function buyukresim3() {
    buyukresim.src = kucuk_photo_3.src;
}
function buyukresim4() {
    buyukresim.src = kucuk_photo_4.src;
}
const azalt = document.querySelector("#azalt")
const adetImput = document.querySelector("#adet")
const arttir =document.querySelector("#arttir")
let adetYeni = document.querySelector("#adet").value

// if (localStorage.getItem("localeAdet")) {
//     adetImput.value = localStorage.getItem("localeAdet")
//     console.log(adetImput.value);
// }

azalt.addEventListener("click", function() {
    let adet = parseInt(adetImput.value)
    const localeAdetValue = localStorage.getItem("localeAdet")
    if (localeAdetValue) {
        if (adet > 0 ) {
            adet = localeAdetValue - 1
            adetImput.value = adet
            adetYeni = adet
            localStorage.setItem("localeAdet", adetYeni)
            
        }
    }
    if (!localeAdetValue) {
        if (adet > 0) {
            adet--
            adetImput.value = adet;
            adetYeni = adet
            localStorage.setItem("localeAdet", adetYeni)
            
        }
        
    }
})
arttir.addEventListener("click", function(){
    let adet = parseInt(adetImput.value)
    const localeAdetValue = localStorage.getItem("localeAdet")
    if (localeAdetValue) {
        if (adet >= 0) {
            adet = parseInt(localeAdetValue) + 1
            adetImput.value = adet 
            adetYeni = adet
            localStorage.setItem("localeAdet", adetYeni)
            
        }
        
    }
    if (!localeAdetValue) {
        if (adet >= 0 && adet < 9) {
            adet++
            adetImput.value = adet;
            adetYeni = adet
            localStorage.setItem("localeAdet", adetYeni)
            
        }
    }
})


const addToCartButton = document.getElementById("add-to-cart-button")

addToCartButton.addEventListener("click",function addToCartButton(){

    document.querySelector(".item-details").innerHTML = `
    <div class="cart-items-container">
        <div class="div1">
            <img src="" class="cart_product_images"></img>
        </div>
        <div class="div2">
            <h3 class="item-name"></h3>
            <div class="item-numbers">
            <p class="item-price">$${price*discountAmount}</p>
            <span style="margin-right:5px;">x</span>
            ${adetYeni}
            <p class="item-total-price">$${price*discountAmount*adetYeni}</p>
            </div>
        </div>
        <div class="div3">
        <button type="button" class="remove-button"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
    <div>
        <button type="button" class="purchase-button">Checkout</button>
    </div>
    `;
    document.querySelector(".item-name").innerText = title;
    document.querySelector(".cart_product_images").src = photo_1;
    
    
    const removeFromCart = document.querySelector(".remove-button")
    removeFromCart.addEventListener("click",function(){
    document.querySelector(".item-details").innerHTML = null;
    }); 
    localStorage.setItem("localeAdet",adetYeni);
    
});

function toggleCart() {
    let cartToggle = document.getElementById("cart-toggle");
    cartToggle.classList.toggle("toggle-cart");
}

const closeCart = document.querySelector("#closeCart")
closeCart.addEventListener("click", function(){
        toggleCart();
})
// const azaltArttirBtn = document.querySelectorAll("#azalt, #arttir")

// azaltArttirBtn.forEach(e => {
//     e.addEventListener("click", function(){
//         alert("adet güncellendi")
//     })
// })

// window.onbeforeunload = function() {
//     if (!sessionStorage.sessionId) {
//         const sessionId = Math.random();
//         localStorage.setItem("sessionId", sessionId)
//         sessionStorage.setItem("sessionId", sessionId)
        
//     } else if (sessionStorage.sessionId){
//         const sessionId = Math.random();
//         sessionStorage.setItem("sessionId", sessionId)
//     }
    

//     if (localStorage.getItem("localAdet") && localStorage.sessionId !== sessionStorage.sessionId) {
//          localStorage.removeItem("localAdet")
//          localStorage.removeItem("sessionId")
//     }

// }







