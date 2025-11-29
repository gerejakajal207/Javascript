let data = [
  { name: "A", price: 100, rating: 4.5 },
  { name: "B", price: 50, rating: 3 },
  { name: "C", price: 200, rating: 5 },
];
let total = data
  .filter((elem) => elem.rating > 4)
  .map((elem) => elem.price)
  .reduce((acc, current) => acc + current, 0);
console.log(total)

// this is also valid
// let total = data
//   .filter((elem) => elem.rating > 4)
//   .reduce((acc, current) => acc + current.price, 0);