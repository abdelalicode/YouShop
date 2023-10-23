 btn.onclick= function () {
 
    navigate.classList.toggle("activeNav")
    // element.classList.toggle("mystyle");
 };

//  TICKET

 btn_ticket.onclick= function () {
 
    let cart_rs= document.getElementsByClassName('cart_rs')[0];
    cart_rs.classList.add("action");
 };

 btn_rm_ticket.onclick= function () {
 
    let rmv_cart= document.getElementsByClassName('cart_rs')[0];
    rmv_cart.classList.remove("action");
 };

// Remove Items row 

const allx = document.querySelectorAll('#xrow');
const alldiv_row = document.querySelectorAll('.row');
const numItems = document.querySelector(".num_items");
const numrItems = document.querySelector(".numr_items");


for (let i = 0; i < alldiv_row.length; i++) {
   allx[i].addEventListener('click', function(){

      alldiv_row[i].classList.add("rmdiv"); 
      let currentNumItems = +numItems.textContent;
      if (currentNumItems > 0) {
         currentNumItems--;
         numItems.textContent = currentNumItems;
      }
      let currentNumrItems = +numrItems.textContent;
      if (currentNumrItems > 0) {
         currentNumrItems--;
         numrItems.textContent = currentNumrItems;
      }
   })
};


// Quantity counter
const decrem = document.getElementById("decrem");
const increm = document.getElementById("increm");
const quanum = document.getElementById("quanum");


const singleItemPrice = document.querySelector(".singleItem_price span");
const totalItemPrice = document.querySelector(".TotalItem_price span");

const pricePerItem = singleItemPrice.textContent;

function updatePrice() {
  const quantity = +quanum.value;
  const totalPrice = pricePerItem * quantity;
  totalItemPrice.textContent = totalPrice.toFixed(2);
}


increm.addEventListener('click',function(){
    let currentValue = +quanum.value;
    quanum.value = currentValue + 1;
    updatePrice();
});

decrem.addEventListener("click", function () {
   let currentValue = +quanum.value;
   if (currentValue > 1) {
     quanum.value = currentValue - 1;
     updatePrice();
   }
 });

 updatePrice();






