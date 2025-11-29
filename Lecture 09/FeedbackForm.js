let stars = document.querySelectorAll(".stars");
let rating = 0;
let btn = document.querySelector("#btn");
console.log(stars);
// stars is a nodelist we convert it to array to use .map

Array.from(stars).map((star, index) => {
  star.addEventListener("click", () => {
    //   till the index value color the stars gold and make solid
    for (let i = 0; i <= index; i++) {
      // k is the current star of for loop
      k = stars[i];
      k.classList.remove("fa-regular");
      k.classList.add("fa-solid");
      k.setAttribute("style", "color:#FFD43B");
    }
    rating = index + 1;
    for (let i = index + 1; i < stars.length; i++) {
      // j is the current star of for loop
      let j = stars[i];
      j.setAttribute("style", "color:#00000");
      j.classList.add("fa-regular");
      j.classList.remove("fa-solid");
    }
  });
});
btn.addEventListener("click", printDetails);
function printDetails() {
  console.log(rating);
  let text = document.createElement("p");
  text.textContent = `Rating is ${rating}`;
  document.body.appendChild(text);
}
