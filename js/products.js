function addItemToCart(button) {
  let allProducts = JSON.parse(localStorage.getItem("allProducts"));
  let productId = button.getAttribute("id");

  let product = allProducts.filter(filterById);
  function filterById(product) {
    if (product.id == productId) {
      return true;
    } else {
      return false;
    }
  }

  if (product.length != 0) {
    let cartItem = JSON.parse(localStorage.getItem("Carts"));
    if (cartItem == null) cartItem = [];
    cartItem.push(product[0]);
    localStorage.setItem("Carts", JSON.stringify(cartItem));
  }
}

function loadAllProducts() {
  let allProducts = JSON.parse(localStorage.getItem("allProducts"));

  let container = document.getElementById("row");
  for (let i = 0; i < allProducts.length; i++) {
    container.innerHTML += ` 
      <div class="product-card-container" id=${allProducts[i].id} >
        <img src=${allProducts[i].img} height="200px">
        <div>
          <h5> $ ${allProducts[i].price}</h5>
          <p>${allProducts[i].name}</p>
        </div>
        <button type="button" id=${
          allProducts[i].id
        } onclick=${"addItemToCart(this)"} class="btn btn-outline-dark">Add to cart</button>
        
      </div>
      
        `;
  }
}

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let searchInput = document.getElementById("search-input");

  let allProducts = JSON.parse(localStorage.getItem("allProducts"));
  let target = searchInput.value;

  let searchResult = allProducts.filter((product) => {
    if (product.name.includes(target)) {
      return true;
    } else {
      return false;
    }
  });

  let container = document.getElementById("row");

  container.innerHTML = "";

  for (let i = 0; i < searchResult.length; i++) {
    container.innerHTML += ` 
      <div class="product-card-container" id=${searchResult[i].id} >
        <img src=${searchResult[i].img} height="200px">
        <div>
          <h5> $ ${searchResult[i].price}</h5>
          <p>${searchResult[i].name}</p>
        </div>
        <button type="button" id=${
          searchResult[i].id
        } onclick=${"addItemToCart(this)"} class="btn btn-outline-dark">Add to cart</button>
        
      </div>
      
        `;
  }

  console.log(searchResult);
});

loadAllProducts();
