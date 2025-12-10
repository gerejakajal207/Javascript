const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  // 1. Create Object
  const xhr = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  const xhr3 = new XMLHttpRequest();

  // 2. request type and url -> making the sender ready
  xhr.open("GET", "https://meowfacts.herokuapp.com/");
  xhr2.open("GET", "https://dogapi.dog/api/v2/facts");
  xhr3.open("GET", "https://fakestoreapi.com/products/categories");
  // Set the response type
  xhr.responseType = "json";
  xhr2.responseType = "json";
  xhr3.responseType = "json";

  // Listen to2nd event (You can write this inside the callback of 1st)
  xhr2.addEventListener("loadend", () => {
    console.log("Hello Data is fetched from 2nd api");
    console.log(xhr2.response);
    console.log(xhr2.response.data[0].attributes.body);
    if (xhr2.status === 200) {
      xhr3.send();
    }
  });

  // Listen to 3rd event (You can write this inside the callback of 1st or 2nd)
  xhr3.addEventListener("loadend", () => {
    console.log("Hello Data is fetched from 3rd api");
    console.log(xhr3.response);
  });

  // 3. Listen to the event
  xhr.addEventListener("loadend", () => {
    console.log("Hello Data is fetched");
    console.log(xhr.response);

    // Send the 2nd event after the data from 1st is fetched and event for 2nd is listened
    if (xhr.status === 200) {
      xhr2.send();
    }
    // This codition is that agar 1st api successful hai toh hi 2nd chale
    // Without this condition agar 1st api galat dala toh bhi 2nd aayega since loadend hogya hai 1st ka loadend is done unsucessful or successful it is done therefore xhr2.send will be there
    // For the scenario that after succesful completion of 1st 2nd should go this .status condition is required
  });

  // 4. Send the request
  xhr.send();
});
