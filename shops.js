let shops = [
    ["kk5.png", "KK5 Cafe", "⭐⭐⭐⭐", "Open time: 7:30AM - 3:00AM", "https://maps.app.goo.gl/g66ze7p2XNMhQ1BEA", "<li>Chicken Chop</li><li>Fried Rice</li><li>Burgers</li><li>Mixed Rice</li>"],
    ["kk12.png", "KK12 Cafe", "⭐⭐⭐⭐⭐", "Open time:6:00AM - 10:00PM", "https://maps.app.goo.gl/g66ze7p2XNMhQ1BEA", "<li>Chicken Chop</li><li>Fried Rice</li><li>Burgers</li><li>Mixed Rice</li>"]
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

