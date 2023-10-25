function populateProducts() {
  const products = [
    {
      id: 1,
      name: "Gucci Bag 1",
      price: 1800,
      img: "../img/white-bag.jpeg",
    },
    {
      id: 2,
      name: "Gucci Bag 2",
      price: 3000,
      img: "../img/red.webp",
    },
    {
      id: 3,
      name: "Gucci Bag 3",
      price: 1500,
      img: "../img/green.avif",
    },
    {
      id: 4,
      name: "Gucci Bag 4",
      price: 3500,
      img: "../img/kevinhart.gucci.jpeg",
    },
    {
      id: 5,
      name: "Gucci Bag 5",
      price: 2300,
      img: "../img/purple-bag.webp",
    },
    {
      id: 6,
      name: "Gucci Bag 6",
      price: 2500,
      img: "../img/hey.jpeg",
    },
    {
      id: 7,
      name: "Gucci Bag 7",
      price: 4800,
      img: "../img/black-big-bag.jpeg",
    },
    {
      id: 8,
      name: "Gucci Bag 8",
      price: 3800,
      img: "../img/BlackMen.png",
    },
  ];

  localStorage.setItem("allProducts", JSON.stringify(products));
}

window.onload = populateProducts;

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

loadAllProducts();
