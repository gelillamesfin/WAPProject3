function removeFromCart(button) {
  let id = button.getAttribute("id");

  let cartItems = JSON.parse(localStorage.getItem("Carts"));

  let filteredCartItems = cartItems.filter((item) => item.id != id);
  localStorage.setItem("Carts", JSON.stringify(filteredCartItems));

  let allCards = document.getElementsByClassName("card");
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].id == id) {
      allCards[i].remove();
    }
  }

  calculatePrice();
}

function getFromCart() {
  let itemBox = JSON.parse(localStorage.getItem("Carts"));
  let product = document.getElementById("products");
  for (let i = 0; i < itemBox.length; i++) {
    product.innerHTML += `
  <div class="card" style="padding: 1rem; margin:1rem" id=${itemBox[i].id}>
  <div class="card-body d-flex justify-content-between">
    <div class="d-flex wrap" style="gap: 1rem">
      <div>
        <img
          src="${itemBox[i].img}"
          alt=""
          style="
          width:200px;
          height:200px;
          object-fit:cover;
          "
        />
      </div>

      <div class="d-flex flex-column justify-content-between">
        <h5 class="card-title">${itemBox[i].name}</h5>
        <p
          style="
            padding-right: 1rem;
            font-size: 0.8rem;
            text-align: justify;
          "
        >
          PRODUCT DETAILS Style 746431 DTDHT 6832 The Double G
          hardware brings the past into the House's present with the
          notion that a cherished wardrobe is enriched by items that
          can be worn season after season.
        </p>
        <a href="#" class="card-link" id=${
          itemBox[i].id
        } onclick=${"removeFromCart(this)"}>Remove </a>
      </div>
    </div>
    <div>
      <p>$${itemBox[i].price}</p>
    </div>
  </div>
</div>
  `;
  }

  calculatePrice();
}

getFromCart();

function calculatePrice() {
  let cartItems = JSON.parse(localStorage.getItem("Carts"));

  let subTotalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    subTotalPrice += cartItems[i].price;
  }

  let subTotalDisplay = document.getElementById("subtotal");
  subTotalDisplay.innerText = subTotalPrice.toString();

  let tax = subTotalPrice * 0.07;
  let taxDisplay = document.getElementById("tax");
  taxDisplay.innerText = tax.toFixed(2);

  let totalDisplay = document.getElementById("total");
  totalDisplay.innerText = (tax + subTotalPrice).toString();
}
