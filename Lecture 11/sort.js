const employees = [
  { name: "Foo", salary: 50000 },
  { name: "Bar", salary: 50000 },
  { name: "Neha", salary: 60000 },
];
employees.sort((a, b) => {
  if (a.salary === b.salary) {
    return a.name.localeCompare(b.name);
  }

  return b.salary - a.salary;
});
console.log(employees);

// Sort products by price asc; if same price, sort by rating desc
const products = [
  { name: "A", price: 200, rating: 3 },
  { name: "B", price: 100, rating: 5 },
  { name: "C", price: 200, rating: 4 },
];
// products.sort((a, b) => {
//   if (a.price === b.price) {
//     return b.rating - a.rating;
//   }
//   return a.price - b.price;
// });
products.sort((a, b) =>
  a.price === b.price ? b.rating - a.rating : a.price - b.price
);
console.log(products);

// Sort by number of skills (array length)
const devs = [
  { name: "Foo", skills: ["Java", "SQL"] },
  { name: "Bar", skills: ["Python"] },
  { name: "Nisha", skills: ["C", "C++", "DSA"] }
];
devs.sort((a,b)=>b.skills.length-a.skills.length)
console.log(devs)

// Sort an array of sentences by number of words
const sentences = [
  "I love           coding",
  "JavaScript is fun to learn",
  "Map filter reduce sort",
  "a b c d e f"
];
sentences.sort((a,b)=>a.split(" ").length-b.split(" ").length)
console.log(sentences)
// let foo="I love coding"
// let bar=foo.split(" ")
// console.log(bar)