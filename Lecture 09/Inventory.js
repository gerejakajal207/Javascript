// taking all the necessary elements
let view_btn = document.getElementById("view-btn");
let add_btn = document.getElementById("add-btn");
let productsTable = document.getElementById("products-table");
let productName = document.getElementById("product-name");
let productQuantity = document.getElementById("product-quantity");
let productPrice = document.getElementById("product-price");
let priceBtn = document.getElementById("price-btn");
let quantityBtn = document.getElementById("quantity-btn");
// An empty array to store the details of products
let products = [];
// Event listener to View Button and the view products function
view_btn.addEventListener("click", () => viewProducts());
function viewProducts() {
  productsTable.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  `;
  //Loop to create tr and td through createElement
  for (let i = 0; i < products.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.textContent = products[i].Name;
    td2.textContent = products[i].Quantity;
    td3.textContent = products[i].Price;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    productsTable.appendChild(tr);
  }
}
// Event listener to Add Button and the Add products function
add_btn.addEventListener("click", () => addProducts());
function addProducts() {
  let obj = {
    Name: productName.value,
    Quantity: +productQuantity.value,
    Price: +productPrice.value,
  };
  products.push(obj);
}
// Event listener to sort by quantity function
quantityBtn.addEventListener("click", () => {
  // Bubble sort for sorting the objects based on the quantity
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].Quantity > products[j + 1].Quantity) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  viewProducts();
});
// Event listener to sort by quantity function

priceBtn.addEventListener("click", () => {
  // Bubble sort for sorting the objects based on the quantity

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].Price > products[j + 1].Price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  viewProducts();
});
