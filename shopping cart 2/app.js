






async function logProduct() {
    const response = await fetch("https://b6f5db1d3ce546e2bdf9dd300c774a55.api.mockbin.io/");
    const ayakkabi = await response.json();
    
    let sellerName = document.querySelector(".seller")
    let productName = document.querySelector(".product-name")
    let productDescription = document.querySelector(".product-descripttion")
    let productPrice = document.querySelector(".product-price")
    let productDiscount = document.querySelector(".product-discount")
    let productFullPrice = document.querySelector(".product-full-price")

    const divImgGallery = document.querySelector(".img-gallery")
    const bigImgProduct = document.querySelector(".big-img-product")

    seller = ayakkabi.seller;
    title = ayakkabi.title;
    description = ayakkabi.description;
    price = ayakkabi.price;
    discountAmount = ayakkabi.discountAmount;
    photos = ayakkabi.photos;
    
    sellerName.innerText = `${seller}`;
    productName.innerText = `${title}`;
    productDescription.innerText = `${description}`;
    productPrice.innerText = `$ ${price*discountAmount}`;
    productDiscount.innerText = `${100 * discountAmount} %`;
    productFullPrice.innerText = `$ ${price}`;

    function ilkResimGoster() {
        bigImgProduct.src = photos[0]
    }
    ilkResimGoster()

    function kucukResimBasmaca() {
        for (const photo of ayakkabi.photos) {
            const img = document.createElement("img");
            img.classList.add("kucukResim");
            img.src = photo

            divImgGallery.appendChild(img);
        }
    }
    kucukResimBasmaca();

    function buyukResimBasmaca() {
        let smallImgProducts = document.querySelectorAll(".kucukResim")
        for (const smallImgProduct of smallImgProducts) {
            smallImgProduct.addEventListener("click", function() {
                bigImgProduct.src = this.src
            })
        }
    
    }
    buyukResimBasmaca()
    
}

logProduct();



const azalt = document.querySelector("#azalt")
const adetImput = document.querySelector("#adet")
const arttir =document.querySelector("#arttir")
let adetYeni = document.querySelector("#adet").value



function azalatma() {
    azalt.addEventListener("click", function() {
        let adet = parseInt(adetImput.value)
        let localeAdetValue = localStorage.getItem("localeAdet")
            if (adet > 0 ) {
                adet = localeAdetValue - 1
                adetImput.value = adet
                adetYeni = adet
                localStorage.setItem("localeAdet", adetYeni)
                
            }
    })
}
azalatma()
let sepeteEklendiMi ;
function arttirma() {
    arttir.addEventListener("click", function(){
        let adet = parseInt(adetImput.value)
        if (adet >= 0 && !sepeteEklendiMi) {
            adet++
            adetImput.value = adet;
            let adetYeni = adet
            localStorage.setItem("localeAdet", adetYeni)
            localeAdetValue = localStorage.getItem("localeAdet")
            console.log(adetYeni, "sebet BOŞ iken adet yeni");
            }
        
        if (localeAdetValue >= 1 && sepeteEklendiMi) {
            adet++ 
            adetImput.value = adet
            console.log(localeAdetValue,"lokal 2i iken bir artırınca localAdetValue değeri");
            adetYeni = parseInt(adet) + parseInt(localeAdetValue)
            console.log(adetYeni, "sepette ürün varken adet yeni");
            // adetYeni = parseInt(adetYeni) + parseInt(adet) - 1;
            // parseInt(adetYeni) += adet - 1 
            localStorage.setItem("localeAdet", adetYeni)  
        }
    })
}
arttirma()



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
    document.querySelector(".cart_product_images").src = photos[0]
    adetYeni= parseInt(adetYeni)
    let sayi = adetImput.value
    sayi = parseInt(sayi)
    
    adetYeni += sayi

    sepeteEklendiMi = true
    
    localStorage.setItem("localeAdet",adetYeni);

    adetImput.value = 0;

    


    const removeFromCart = document.querySelector(".remove-button")
    removeFromCart.addEventListener("click",function(){
    document.querySelector(".item-details").innerHTML = null;
    }); 
    
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







