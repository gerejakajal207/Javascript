let priceContainer = document.querySelector(".price-container");
let ans = document.querySelector(".ans");
let btn = document.querySelector(".btn");
let products = [100, 50, 200, 10];

priceContainer.textContent = products;

btn.addEventListener("click", () => {
 let discountedProducts=products.map((elem)=>elem*0.8)

  ans.textContent = discountedProducts;
});
