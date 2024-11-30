const cartnames=JSON.parse(localStorage.getItem("cartnames"));
const cartprices=JSON.parse(localStorage.getItem("cartprices"));
const cartquantity=JSON.parse(localStorage.getItem("cartquantity"));

const receiptlists=document.getElementById("receiptlists");
const sumprice=document.getElementById("sum");
let sum=0.00;
for(let i=0;i<cartnames.length;i++){
    let receiptlist=document.createElement("div");
    receiptlist.className="receiptlist";
    receiptlists.appendChild(receiptlist);

    let leftalign=document.createElement("div");
    leftalign.className="leftalign";
    receiptlist.appendChild(leftalign);

    let quantity=document.createElement("h2");
    quantity.textContent=cartquantity[i]+"x...";
    leftalign.appendChild(quantity);

    let foodname=document.createElement("h2");
    foodname.textContent=cartnames[i];
    leftalign.appendChild(foodname);

    let foodprices=document.createElement("h2");
    foodprices.textContent="RM "+cartprices[i].toFixed(2);
    receiptlist.appendChild(foodprices);
    sum+=parseFloat(cartprices[i]);
}
sumprice.textContent="RM "+sum.toFixed(2);
sum+=2.00;
const actualsum=document.getElementById("actualsum");
actualsum.textContent="RM "+sum.toFixed(2);
