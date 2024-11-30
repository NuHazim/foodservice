let allfoods = [
    ["Chicken chop", "Spaghetti Carbonara", "Spaghetti Bolognese", "Mushroom Spaghetti", "Lamb Chop", "Burger", "Jumbo Sausage", "Steak"],
    ["Chicken chop", "Spaghetti", "Lamb Chop", "Burger", "Jumbo Sausage", "Shawarma Biasa", "Shawarma Cheese", "Shawarma Sausage", "Shawarma Rice", "Nasi Goreng Paprik Ayam", "Nasi Goreng Paprik Daging", "Nasi Goreng Biasa", "Nasi Goreng Thai", "Nasi Goreng Cili Padi", "Nasi Goreng Pattaya", "Maggi Goreng Biasa", "Maggi Goreng Ayam", "Maggi Goreng Daging", "Maggi Goreng Pattaya", "Roti Kosong", "Roti Telur", "Roti Tisu", "Roti Planta", "Roti Sarang Burung"],
    ["Malatang (vege)", "Malatang (non-vege)", "Supabowl (Vege)"],
    ["Nasi Goreng Tomyam", "Maggi Goreng Tomyam", "Tomyam Soup", "Nasi Goreng Pattaya", "Roti Kosong", "Roti Telur", "Roti Tisu", "Roti Planta", "Roti Sarang Burung"],
    ["Big Brekkie Croissant", "Pearl Sugar Waffle", "ZUS Signature Curry Puff", "Tom Yum Chicken Puff", "Chocolate Roll", "Chicken Slice & Cheese Croissant", "Mushroom Chicken Deluxe", "Strawberry Donut"],
    ["Nasi Goreng USA", "Nasi Putih + Paprik Ayam", "Mee Rebus Sotong", "Nasi Goreng Kampung", "Tom Yum Sup", "Nasi Pattaya"]
];
let allfoodcost=[
    [6.90, 5.00, 5.00, 5.00, 8.90, 3.00, 4.90, 10.90], 
    [7.90, 6.00, 9.90, 4.00, 5.00, 5.90, 6.90, 7.90, 6.50, 8.90, 6.50, 8.00, 5.00, 6.00, 4.50, 5.00, 4.00, 6.00, 7.50, 5.50, 1.50, 2.50, 6.00, 5.50],
    [6.90, 7.90, 6.50],
    [5.50, 5.50, 5.00, 5.00, 1.50, 2.50, 6.50, 2.50, 6.00],
    [7.90, 8.90, 3.90, 5.90, 4.50, 10.90, 6.00, 6.50],
    [18.90, 14.90, 12.90, 13.90, 8.90, 8.90]
];
let foodfiles=[
    ["chicken_chop.jpeg", "spaghetti_carbonara.jpeg", "spaghetti_bolognese.jpeg", "mushroom_spaghetti.jpeg", "lamb_chop.jpeg", "burger.jpg", "jumbo_sausage.jpeg", "steak.jpeg"],
    ["chicken_chop.jpeg", "spaghetti.jpeg", "lamb_chop.jpg", "burger.jpeg", "jumbo_sausage.jpg", "shawarma_biasa.jpeg", "shawarma_cheese.jpeg", "shawarma_sausage.jpg", "shawarma_rice.jpeg", "nasi_goreng_paprik_ayam.jpeg", "nasi_goreng_paprik_daging.jpeg", "nasi_goreng_biasa.jpeg", "nasi_goreng_thai.jpg", "nasi_goreng_cili_padi.jpeg", "nasi_goreng_pataya.jpg", "maggie_goreng_biasa.jpeg", "maggie_goreng_ayam.jpg", "maggie_goreng_daging.jpeg", "maggie_goreng_pataya.jpeg", "roti_kosong.jpg", "roti_telur.jpg", "roti_tissue.webp", "roti_planta.jpg", "roti_sarang_burung.jpg"],
    ["malatang (vege).jpg", "malatang (non vege).jpg", "supabowl.jpeg"],
    ["nasi goreng tomyam.jpg", "maggi goreng tomyam.jpeg", "soup tomyam.jpg", "nasi gorreng pattaya.webp", "roti kososng.webp", "roti telur.webp", "roti tisu.jpg", "roti planta.jpg", "roti sarang burung.jpg"],
    ["big_brekkie_croissant.png", "pearl_sugar_waffle.png", "zus_signature_curry_puff.png", "tom_yum_chicken_puff.png", "chocolate_roll.png", "chicken_slice_cheese_croissant.png", "mushroom_chicken_deluxe.png", "strawberry_donut.png"],
    ["nasi goreng usa.jpg", "nasi putih + ayam paprik.jpg", "mee rebus sotong.jpg", "nasi goreng kampung.jpg", "tomyam soup.webp", "nasi goreng pattaya.jpg"]
];
let shopfiles=["kk5","kk12","kk4","kk2","Zus Coffee","Q bistro"];
let alldrinks=[
    ["Americano", "Cappuccino", "Latte", "Mocha", "Latte Ice", "Ice-blended Cappuccino", "Ice-blended Mocha", "Hot Chocolate", "Hot Matcha", "Chocolate Ice", "Matcha Ice", "Vanilla Ice", "Ice-blended Chocolate", "Ice-blended Matcha", "Ice-blended Vanilla"],
    ["Vietnamese Spanish Latté Frappé", "Mango Spanish Frappé", "Spanish Latté Frappé", "Ro-Ro-Rosie Frappé", "Rosie Latté", "Rosie Cham Latté", "Pumpkin Spice Frappé", "Pumpkin Spice Black"],
    ["Teh Tarik", "Teh O", "Kopi", "Sirap Bandung", "Milo", "Air Mata Kucing", "Lemon Tea", "Cincau", "Fruit Juices", "Iced Coffee", "Iced Tea"]
];
let alldrinkcost=[
    [6.90, 9.90, 9.90, 9.90, 9.90, 10,90, 10,90, 8,90, 8.90, 10.90, 10.90, 11.90, 11.90, 12.90, 11.90],
    [14.90, 14.90,14.90, 14.90, 12.90, 12.90, 14.90, 12.90],
    [3.00, 2.00, 3.50, 3.00, 3.50, 4.00, 3.00, 3.50, 4.00, 3.50, 3.00]
];
let shop2files=["he&she","Zus Coffee","Every restaurant"];
let drinkfiles=[
    ["americano.png", "cappucino.png", "latte.png", "mocha.png", "latte_ice.png", "iceblend_cappuccino.png", "iceblend_mocha.png", "hotchocolate.png", "hotmatcha.png", "chocolate_ice.png", "matcha_ice.png", "vanilla_ice.png", "iceblend_chocolate.png", "iceblend_matcha.png", "iceblend_vanilla.png"],
    ["vietnamese_spanish_latte_frappe.png", "mango_spanish_frappe.png", "spanish_latte_frappe.png", "ro-ro-rosie_frappe.png", "rosie_latte.png", "rosie_cham_latte.png", "pumpkin_spice_frappe.png", "pumpkin_spice_black.png"],
    ["tehtarik.png", "teho.png", "kopi.png", "sirapbandung.png", "milo.png", "airmatakucing.png", "lemontea.png", "cincau.png", "fruitjuices.png", "icedcoffee.png", "icedtea.png"]
];
const allfoodbox=document.getElementById("allfoodbox");
for(let i=0;i<allfoods.length;i++){
    for(let j=0;j<allfoods[i].length;j++){
        let box=document.createElement("div");
        box.className="box";
        box.dataset.name=allfoods[i][j];
        box.dataset.price=allfoodcost[i][j];
        box.dataset.restaurant=shopfiles[i];
        allfoodbox.appendChild(box);

        let foodimage=document.createElement("img");
        foodimage.width="200";
        foodimage.src="/Food pictures/"+shopfiles[i]+"/"+foodfiles[i][j];
        box.appendChild(foodimage);

        let fname=document.createElement("h2");
        fname.className="fname";
        fname.textContent=allfoods[i][j];
        box.appendChild(fname);

        let fprice=document.createElement("h2");
        fprice.className="fprice";
        fprice.textContent="RM "+allfoodcost[i][j];
        box.appendChild(fprice);

        let frestaurant=document.createElement("h2");
        frestaurant.className="frestaurant";
        frestaurant.textContent=shopfiles[i];
        box.appendChild(frestaurant);

    }
}
const alldrinkbox=document.getElementById("alldrinkbox");
for(let k=0;k<alldrinks.length;k++){
    for(let p=0;p<alldrinks[k].length;p++){
        let box=document.createElement("div");
        box.className="box";
        box.dataset.name=alldrinks[k][p];
        box.dataset.price=alldrinkcost[k][p];
        box.dataset.restaurant=shop2files[k];
        alldrinkbox.appendChild(box);

        let drinkimage=document.createElement("img");
        drinkimage.width="200";
        drinkimage.src=drinkfiles[k][p];
        box.appendChild(drinkimage);

        let fname=document.createElement("h2");
        fname.className="fname";
        fname.textContent=alldrinks[k][p];
        box.appendChild(fname);

        let fprice=document.createElement("h2");
        fprice.className="fprice";
        fprice.textContent="RM "+alldrinkcost[k][p];
        box.appendChild(fprice);

        let frestaurant=document.createElement("h2");
        frestaurant.className="frestaurant";
        frestaurant.textContent=shop2files[k];
        box.appendChild(frestaurant);
    }
}
const cart=document.getElementById("cart");
const boxes=document.querySelectorAll(".box");
let names=document.getElementById("name");
let restaurant=document.getElementById("restaurant");
let quantity=document.getElementById("quantity");
let count=1;
let cartnames=[];
let cartprices=[];
let cartquantity=[];
boxes.forEach(function(box){
    box.addEventListener("click",function(){
        cart.style.display="flex";
        names.textContent=box.dataset.name;
        restaurant.textContent=box.dataset.restaurant;
        cart.dataset.price=box.dataset.price;
        count=1;
        quantity.textContent=count; 
    })
});
function minus(){
    count--;
    quantity.textContent=count;
}
function plus(){
    count++;
    quantity.textContent=count;
}
function addCart(){
    cartnames.push(names.textContent);
    cartprices.push(cart.dataset.price);
    cartquantity.push(quantity.textContent);
    cart.style.display="none";
    console.log("Item added to cart");
    showConfirmationBox();
}
function showConfirmationBox() {
    const confirmationBox = document.createElement("div");
    confirmationBox.id = "confirmationBox";
    confirmationBox.style.position = "fixed";
    confirmationBox.style.top = "10%";
    confirmationBox.style.left = "50%";
    confirmationBox.style.transform = "translate(-50%, -20%)";
    confirmationBox.style.padding = "20px";
    confirmationBox.style.border = "2px solid #ccc";
    confirmationBox.style.borderRadius = "10px";
    confirmationBox.style.backgroundColor = "#fff";
    confirmationBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    confirmationBox.style.zIndex = "1000";
    confirmationBox.innerHTML = `
        <p>Do you want to proceed to the next step?</p>
        <button onclick="proceedToNextPage()">Proceed</button>
        <button onclick="cancelConfirmation()">Continue Ordering</button>
    `;
    document.body.appendChild(confirmationBox);
}
function proceedToNextPage() {
    window.location.href = "diningOptions.html"; 
}
function cancelConfirmation() {
    // Remove the confirmation box
    const confirmationBox = document.getElementById("confirmationBox");
    if (confirmationBox) {
        confirmationBox.remove();
    }
}
console.log(cartnames);
console.log(cartprices);
console.log(cartquantity);
// boxes.forEach(function(box){
//     box.addEventListener("click",function(){
//         let sum=localStorage.getItem("sum")||0;
//         sum=parseFloat(sum)+parseFloat(box.dataset.price);
//         localStorage.setItem("sum",sum);
//         console.log(sum);
//     })
// });