let btn = document.querySelector("#btn");
btn.addEventListener("click", () => fetchData());

function fetchData() {
  console.log("fetching data ");
  // 1. create object
  let xhr = new XMLHttpRequest();

  // 2. get it ready by telling type of request and request url
  xhr.open("GET", "https://meowfacts.herokuapp.com/");

  // 3. Start listening to its event
  xhr.addEventListener("loadend", () => console.log("Data fetched!!!"));

  // 4. finally send to get the data from backend
  xhr.send();
  console.log("Hello from outside...........");
}
