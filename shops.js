let shops =  [
    ["kk5.png", "KK5 Cafe", "⭐⭐⭐⭐⭐", "Open time: 7:00AM - 9:30PM", "https://maps.app.goo.gl/rd4XFhU1223BRqBC8", "<li>Chicken Chop</li><li>Burger</li><li>Spaghetti Carbonara</li><li>Spaghetti Bolognese</li>"],
    ["kk12.png", "KK12 Cafe", "⭐⭐⭐⭐⭐", "Open time: 6:00AM - 10:00PM", "https://maps.app.goo.gl/wGV3m4LdLoKm8gfHA", "<li>Jumbo Sausage</li><li>Shawarma Cheese</li><li>Nasi Goreng Patrik Ayam</li><li>Nasi Goreng Kunyit Ayam</li>"]
    ["kk4.png", "KK4 Cafe", "⭐⭐⭐⭐", "Open time: 8:00AM - 9:00PM", "https://maps.app.goo.gl/oLgMWpbFa5WWAfLQ6", "<li>Malatang (vege)</li><li>Malatang (non-vege)</li><li>Sharwarma</li><li>Supa Bowl Vege</li>"]
    ["kk2.png", "KK2 Cafe", "⭐⭐⭐⭐", "Open time: 10:00AM - 9:00PM", "https://maps.app.goo.gl/kmqko21STfLXWf5H6", "<li>Nasi Goreng Tomyam</li><li>Nasi Goreng Pataya</li><li>Roti Tissue</li><li>Roti Sarang Burung</li>"]
    ["he&she.png", "HE & SHE COFFEE", "⭐⭐⭐⭐⭐", "Open time: 10:00AM - 10:00PM", "https://maps.app.goo.gl/4cDCZ3HaCyD3BarT7", "<li>Americano</li><li>Cappuccino</li><li>Hot Chocolate</li><li>Vanilla Ice</li>"]
    ["zuscoffee.png", "ZUS COFFEE", "⭐⭐⭐⭐", "Open time: 7:00AM - 10:40PM", "https://maps.app.goo.gl/hsgqSyDvURtnXLqt8", "<li>Vietnamese Spanish Latté Frappé</li><li>Mango Spanish Frappé</li><li>Big Brekkie Croissant</li><li>ZUS Signature Curry Puff</li>"]
    ["qbistro.png", "Q Bistro", "⭐⭐⭐⭐⭐", "Open time: 7:00AM - 10:00PM", "https://maps.app.goo.gl/VRKqDCDv9vmbN7DE8", "<li>Nasi Lemak Ayam Rendang</li><li>Nasi Goreng USA</li><li>Tom Yum Sup</li><li>Nasi Pattaya</li>"]
];


const shopcontainer = document.getElementById("shopcontainer");
for (let i = 0; i < 2; i++) {
    let shop = document.createElement("div");
    shop.className = "shop";  
    shopcontainer.appendChild(shop);

    let shopimage = document.createElement("img");
    shopimage.className = "shopimage";  
    shopimage.src = shops[i][0];
    shop.appendChild(shopimage);

    let text = document.createElement("div");
    text.className = "text";  
    shop.appendChild(text);

    let shopname = document.createElement("h2");
    shopname.className = "shopname";  
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

