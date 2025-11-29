// Find the names of all products that cost more than $100 and are currently in stock (stock > 0).

const products = [
  { name: "Laptop", price: 1200, stock: 5 },
  { name: "Cable", price: 15, stock: 20 },
  { name: "Monitor", price: 350, stock: 0 },
  { name: "Desk", price: 150, stock: 12 },
];

let names = products
  .filter((elem) => elem.price > 100 && elem.stock > 0)
  .map((elem) => elem.name);

  console.log(names)