let inventoryContainer = document.querySelector("#inventory-container");
let btn = document.querySelector("#btn");
let productsTable = document.querySelector("#products-table");
let filteredStock = document.querySelector("#filtered-stock");

let inventory = [
  { name: "A", stock: 15 },
  { name: "B", stock: 8 },
  { name: "C", stock: 22 },
  { name: "D", stock: 4 },
  //   { name: "E", stock: 10 },
  //    { name: "F", stock: 5},
];

// Show the inventory
for (let elem of inventory) {
  inventoryContainer.textContent += " " + elem.name + "-" + elem.stock;
}

btn.addEventListener("click", () => {
  //push elements less in stock in new array
  let outOfStock = inventory.filter((elem) => elem.stock < 10);
  //   Show the elements with stock less than 10 after the button
  for (let elem of outOfStock) {
    filteredStock.textContent += " " + elem.name + "-" + elem.stock;
  }
});
