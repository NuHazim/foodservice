let shops =  [
    ["kk5.png", "KK5 Cafe", "⭐⭐⭐⭐⭐", "Open time: 7:00AM - 9:30PM", "https://maps.app.goo.gl/rd4XFhU1223BRqBC8", "<li>Chicken Chop</li><li>Burger</li><li>Spaghetti Carbonara</li><li>Spaghetti Bolognese</li>"],
    ["kk12.png", "KK12 Cafe", "⭐⭐⭐⭐⭐", "Open time: 6:00AM - 10:00PM", "https://maps.app.goo.gl/wGV3m4LdLoKm8gfHA", "<li>Jumbo Sausage</li><li>Shawarma Cheese</li><li>Nasi Goreng Patrik Ayam</li><li>Nasi Goreng Kunyit Ayam</li>"],
    ["kk4.png", "KK4 Cafe", "⭐⭐⭐⭐", "Open time: 8:00AM - 9:00PM", "https://maps.app.goo.gl/oLgMWpbFa5WWAfLQ6", "<li>Malatang (vege)</li><li>Malatang (non-vege)</li><li>Sharwarma</li><li>Supa Bowl Vege</li>"],
    ["kk2.png", "KK2 Cafe", "⭐⭐⭐⭐", "Open time: 10:00AM - 9:00PM", "https://maps.app.goo.gl/kmqko21STfLXWf5H6", "<li>Nasi Goreng Tomyam</li><li>Nasi Goreng Pataya</li><li>Roti Tissue</li><li>Roti Sarang Burung</li>"],
    ["heshe.png", "HE & SHE COFFEE", "⭐⭐⭐⭐⭐", "Open time: 10:00AM - 10:00PM", "https://maps.app.goo.gl/4cDCZ3HaCyD3BarT7", "<li>Americano</li><li>Cappuccino</li><li>Hot Chocolate</li><li>Vanilla Ice</li>"],
    ["ZusCoffee.png", "ZUS COFFEE", "⭐⭐⭐⭐", "Open time: 7:00AM - 10:40PM", "https://maps.app.goo.gl/hsgqSyDvURtnXLqt8", "<li>Vietnamese Spanish Latté Frappé</li><li>Mango Spanish Frappé</li><li>Big Brekkie Croissant</li><li>ZUS Signature Curry Puff</li>"],
    ["Q Bistro.png", "Q Bistro", "⭐⭐⭐⭐⭐", "Open time: 7:00AM - 10:00PM", "https://maps.app.goo.gl/VRKqDCDv9vmbN7DE8", "<li>Nasi Lemak Ayam Rendang</li><li>Nasi Goreng USA</li><li>Tom Yum Sup</li><li>Nasi Pattaya</li>"]
];
let shopfiles=["kk5","kk12","kk4","kk2","he&she","Zus Coffee","Q bistro"];
let foods= [
    ["Chicken chop", "Spaghetti Carbonara", "Spaghetti Bolognese", "Mushroom Spaghetti", "Lamb Chop", "Burger", "Jumbo Sausage", "Steak"],
    ["Chicken chop", "Spaghetti", "Lamb Chop", "Burger", "Jumbo Sausage", "Shawarma Biasa", "Shawarma Cheese", "Shawarma Sausage", "Shawarma Rice", "Nasi Goreng Paprik Ayam", "Nasi Goreng Paprik Daging", "Nasi Goreng Biasa", "Nasi Goreng Thai", "Nasi Goreng Cili Padi", "Nasi Goreng Pattaya", "Maggi Goreng Biasa", "Maggi Goreng Ayam", "Maggi Goreng Daging", "Maggi Goreng Pattaya", "Roti Kosong", "Roti Telur", "Roti Tisu", "Roti Planta", "Roti Sarang Burung"],
    ["Malatang (vege)", "Malatang (non-vege)", "Supabowl (Vege)"],
    ["Nasi Goreng Tomyam", "Maggi Goreng Tomyam", "Tomyam Soup", "Nasi Goreng Pattaya", "Roti Kosong", "Roti Telur", "Roti Tisu", "Roti Planta", "Roti Sarang Burung"],
    ["Americano", "Cappuccino", "Latte", "Mocha", "Latte Ice", "Ice-blended Cappuccino", "Ice-blended Mocha", "Hot Chocolate", "Hot Matcha", "Chocolate Ice", "Matcha Ice", "Vanilla Ice", "Ice-blended Chocolate", "Ice-blended Matcha", "Ice-blended Vanilla"],
    ["Vietnamese Spanish Latté Frappé", "Mango Spanish Frappé", "Spanish Latté Frappé", "Ro-Ro-Rosie Frappé", "Rosie Latté", "Rosie Cham Latté", "Pumpkin Spice Frappé", "Pumpkin Spice Black", "Big Brekkie Croissant", "Pearl Sugar Waffle", "ZUS Signature Curry Puff", "Tom Yum Chicken Puff", "Chocolate Roll", "Chicken Slice & Cheese Croissant", "Mushroom Chicken Deluxe", "Strawberry Donut"],
    ["Nasi Goreng USA", "Nasi Putih + Paprik Ayam", "Mee Rebus Sotong", "Nasi Goreng Kampung", "Tom Yum Sup", "Nasi Pattaya"]
 ];
 for(let i=0;i<foods.length;i++){
    console.log(foods[i].length);
 }
 let foodFiles = [
    ["chicken_chop.jpeg", "spaghetti_carbonara.jpeg", "spaghetti_bolognese.jpeg", "mushroom_spaghetti.jpeg", "lamb_chop.jpeg", "burger.jpg", "jumbo_sausage.jpeg", "steak.jpeg"],
    ["chicken_chop.jpeg", "spaghetti.jpeg", "lamb_chop.jpg", "burger.jpeg", "jumbo_sausage.jpg", "shawarma_biasa.jpeg", "shawarma_cheese.jpeg", "shawarma_sausage.jpg", "shawarma_rice.jpeg", "nasi_goreng_paprik_ayam.jpeg", "nasi_goreng_paprik_daging.jpeg", "nasi_goreng_biasa.jpeg", "nasi_goreng_thai.jpg", "nasi_goreng_cili_padi.jpeg", "nasi_goreng_pataya.jpg", "maggie_goreng_biasa.jpeg", "maggie_goreng_ayam.jpg", "maggie_goreng_daging.jpeg", "maggie_goreng_pataya.jpeg", "roti_kosong.jpg", "roti_telur.jpg", "roti_tissue.webp", "roti_planta.jpg", "roti_sarang_burung.jpg"],
    ["malatang (vege).jpg", "malatang (non vege).jpg", "supabowl.jpeg"],
    ["nasi goreng tomyam.jpg", "maggi goreng tomyam.jpeg", "soup tomyam.jpg", "nasi gorreng pattaya.webp", "roti kososng.webp", "roti telur.webp", "roti tisu.jpg", "roti planta.jpg", "roti sarang burung.jpg"],
    ["americano.png", "cappucino.png", "latte.png", "mocha.png", "latte_ice.png", "iceblend_cappuccino.png", "iceblend_mocha.png", "hotchocolate.png", "hotmatcha.png", "chocolate_ice.png", "matcha_ice.png", "vanilla_ice.png", "iceblend_chocolate.png", "iceblend_matcha.png", "iceblend_vanilla.png"],
    ["vietnamese_spanish_latte_frappe.png", "mango_spanish_frappe.png", "spanish_latte_frappe.png", "ro-ro-rosie_frappe.png", "rosie_latte.png", "rosie_cham_latte.png", "pumpkin_spice_frappe.png", "pumpkin_spice_black.png", "big_brekkie_croissant.png", "pearl_sugar_waffle.png", "zus_signature_curry_puff.png", "tom_yum_chicken_puff.png", "chocolate_roll.png", "chicken_slice_cheese_croissant.png", "mushroom_chicken_deluxe.png", "strawberry_donut.png"],
    ["nasi goreng usa.jpg", "nasi putih + ayam paprik.jpg", "mee rebus sotong.jpg", "nasi goreng kampung.jpg", "tomyam soup.webp", "nasi goreng pattaya.jpg"]
];
for(let i=0;i<foodFiles.length;i++){
    console.log(foodFiles[i].length);
 }

let foodCost = [
    [6.90, 5.00, 5.00, 5.00, 8.90, 3.00, 4.90, 10.90], 
    [7.90, 6.00, 9.90, 4.00, 5.00, 5.90, 6.90, 7.90, 6.50, 8.90, 6.50, 8.00, 5.00, 6.00, 4.50, 5.00, 4.00, 6.00, 7.50, 5.50, 1.50, 2.50, 6.00, 3.00, 5.50],
    [6.90, 7.90, 6.50],
    [5.50, 5.50, 5.00, 5.00, 1.50, 2.50, 6.50, 2.50, 6.00],
    [6.90, 9.90, 9.90, 9.90, 9.90, 10,90, 10,90, 8,90, 8.90, 10.90, 10.90, 11.90, 11.90, 12.90, 11.90],
    [14.90, 14.90,14.90, 14.90, 12.90, 12.90, 14.90, 12.90, 7.90, 8.90, 3.90, 5.90, 4.50, 10.90, 6.00, 6.50],
    [18.90, 14.90, 12.90, 13.90, 8.90, 7.90, 8.90]
 ]; 
let drinks= ["Teh Tarik", "Teh O", "Kopi", "Sirap Bandung", "Milo", "Air Mata Kucing", "Lemon Tea", "Cincau", "Fruit Juices", "Iced Coffee", "Iced Tea"];
let drinkCost = [3.00, 2.00, 3.50, 3.00, 3.50, 4.00, 3.00, 3.50, 4.00, 3.50, 3.00];
let drinkFiles = ["tehtarik.png", "teho.png", "kopi.png", "sirapbandung.png", "milo.png", "airmatakucing.png", "lemontea.png", "cincau.png", "fruitjuices.png", "icedcoffee.png", "icedtea.png"];

 

const shopcontainer = document.getElementById("shopcontainer");
for (let i = 0; i < shops.length; i++) {
    let shop = document.createElement("div");
    shop.className = "shop";  
    shopcontainer.appendChild(shop);

    let shopimage = document.createElement("img");
    shopimage.className = "shopimage";  
    shopimage.width="400";
    shopimage.height="300";
    shopimage.src = shops[i][0];
    shop.appendChild(shopimage);

    let text = document.createElement("div");
    text.className = "text";  
    shop.appendChild(text);

    let shopname = document.createElement("h2");
    shopname.className = "shopname";  
    shopname.style.cursor="pointer";
    shopname.textContent = shops[i][1];
    text.appendChild(shopname);

    let ratings = document.createElement("h4");
    ratings.textContent = shops[i][2];
    ratings.className = "ratings";  
    text.appendChild(ratings);

    let open = document.createElement("h4");
    open.textContent = shops[i][3];
    open.className = "open";  
    text.appendChild(open);

    let locationbox = document.createElement("h4");
    locationbox.textContent = "Location: ";

    let location = document.createElement("a");
    location.href = shops[i][4];
    location.textContent = shops[i][4];
    location.className = "location";  
    locationbox.appendChild(location);
    text.appendChild(locationbox);

    let popfood = document.createElement("h4");
    popfood.textContent = "Popular Foods: ";
    text.appendChild(popfood);

    let pfoods = document.createElement("ul");
    pfoods.className = "pfoods"; 
    pfoods.innerHTML = shops[i][5];
    text.appendChild(pfoods);
}
const dialog = document.getElementById('openDialog');
const closeDialog = document.getElementById('closeDialog');
const foodboxs=document.getElementById("foodboxs");
const drinkboxs=document.getElementById("drinkboxs");

let shopnames=document.querySelectorAll(".shopname");
shopnames.forEach(function(shopname,index){
    shopname.addEventListener("click",function(){
        dialog.showModal();

        for(let j=0;j<foods[index].length;j++){
            let foodbox=document.createElement("div");
            foodbox.className="foodbox";
            foodboxs.appendChild(foodbox);

            let foodimage=document.createElement("img");
            foodimage.src="/Food pictures/"+shopfiles[index]+"/"+foodFiles[index][j];
            foodimage.width="180";
            foodimage.style.margin="10px";
            foodbox.appendChild(foodimage);

            let foodname=document.createElement("p");
            foodname.textContent=foods[index][j];
            foodbox.appendChild(foodname);

            let foodprice=document.createElement("p");
            foodprice.textContent="RM "+foodCost[index][j];
            foodbox.appendChild(foodprice);
 
        }
        for(let k=0;k<drinks.length;k++){
            let drinkbox=document.createElement("div");
            drinkbox.className="drinkbox";
            drinkboxs.appendChild(drinkbox);

            let drinkimage=document.createElement("img");
            drinkimage.src=drinkFiles[k];
            drinkimage.width="180";
            drinkbox.appendChild(drinkimage);

            let drinkname=document.createElement("p");
            drinkname.textContent=drinks[k];
            drinkbox.appendChild(drinkname);

            let drinkprice=document.createElement("p");
            drinkprice.textContent="RM "+drinkCost[k];
            drinkbox.appendChild(drinkprice);
        }
    })
});
closeDialog.addEventListener('click', () => {
    foodboxs.innerHTML="";
    drinkboxs.innerHTML="";
    dialog.close();
});