let inventoryContainer = document.querySelector("#inventory-container");
let btn = document.querySelector("#btn");
let filteredStock = document.querySelector("#filtered-stock");
let productsTable = document.querySelector("#products-table");
let inventory = [
  { name: "A", stock: 15 },
  { name: "B", stock: 8 },
  { name: "C", stock: 22 },
  { name: "D", stock: 4 },
//   { name: "E", stock: 10 },
//    { name: "F", stock: 5},
  
];

let outOfStock = [];
// Show the inventory
for (let elem of inventory) {
  inventoryContainer.textContent += " " + elem.name + "-" + elem.stock;
}

btn.addEventListener("click", () => {
  //push elements less in stock in new array
  for (let elem of inventory) {
    if (elem.stock < 10) {
      outOfStock.push(elem);
    }
    // change the text color of already placed data to red
    inventoryContainer.textContent = "";
    for (let elem of inventory) {
      let span = document.createElement("p");
      span.textContent = elem.name + "-" + elem.stock;
      if (elem.stock < 10) {
        span.setAttribute("style", "color:red");
      }
      inventoryContainer.appendChild(span);
    }
  }
  //   Show the elements with stock less than 10 after the button
  for (let elem of outOfStock) {
    filteredStock.textContent += " " + elem.name + "-" + elem.stock;
  }
});

for (let product of inventory) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  td1.textContent = product.name;
  td2.textContent = product.stock;
  if (product.stock < 10) {
    tr.setAttribute("style", "color:red");
  }

  tr.appendChild(td1);
  tr.appendChild(td2);
  productsTable.appendChild(tr);
}
