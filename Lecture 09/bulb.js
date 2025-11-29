// Get the access of image and button
let image = document.querySelector("#image");
let btn = document.querySelector("#btn");
// Add event listener to the button
btn.addEventListener("click", toggle);
// Initially bulb is on
flag = true;
function toggle() {
  // If flag is on, set the src to off and change text content
  if (flag) {
    btn.textContent = "off";
    image.setAttribute("src", "images/bulb_off1.jpg");
  }
  // If flag is off, set the src to on and change text content
  else {
    btn.textContent = "on";
    image.setAttribute("src", "images/bulb_on1.jpg");
  }
  //   change the flag
  flag = !flag;
}
