const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  // 1. Create Object
  const xhr = new XMLHttpRequest();

  // 2. request type and url -> making the sender ready
  xhr.open("GET", "https://meowfacts.herokuapp.com/");

  // Set the response type as json
  // By default it will give in string
  // by default -> {"data":["Cheetahs communicate by purring and meowing like housecats, they cannot roar like big cats (e.g. lions)."]}
  // after setting to json -> data: ['Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.']

  xhr.responseType = "json";

  // 3. Listen to the event
  xhr.addEventListener("loadend", () => {
    console.log("Hello Data is fetched");
    console.log(xhr.response);
    let p = document.createElement('p');
    let val=xhr.response
    p.textContent=val.data[0]
    document.body.appendChild(p);
  });

  console.log("Hii Before send");

  // 4. Send the request
  xhr.send();

  console.log("Hii After Send");
});
console.log("Hii from before btn event");
