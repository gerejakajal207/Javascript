// Get the access of button
let btn = document.querySelector("#submit-btn");
// Get the access of container
let container = document.querySelector("#container");
// Event listener to Btn
btn.addEventListener("dblclick", () => {
  // Create an element through js
  let text = document.createElement("p");
  // Add text to the created element
  text.textContent = "Hello, Good Morning!!! Have a nice day";
  // Append your created element(p) in the container
  container.appendChild(text);
});
