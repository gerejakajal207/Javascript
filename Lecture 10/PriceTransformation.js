let priceContainer = document.querySelector(".price-container");
let ans = document.querySelector(".ans");
let btn = document.querySelector(".btn");
let products = [100, 50, 200, 10];
let discountedProducts = [];

priceContainer.textContent = products;

btn.addEventListener("click", () => {
  for (let product of products) {
    discountedProducts.push(product * 0.8);
  }

  ans.textContent = discountedProducts;
});
