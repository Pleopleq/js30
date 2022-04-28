let API_URL = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
const app = document.querySelector("#app");
const appFragment = new DocumentFragment();

function appendItems(items) {
  items.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = JSON.stringify(item);
    appFragment.appendChild(div);
  });
  app.appendChild(appFragment);
}

const button = document
  .querySelector("#fetchData")
  .addEventListener("click", (event) => {
    fetch(API_URL, {})
      .then((response) => response.json())
      .then((data) => {
        appendItems(data.civilizations);
      })
      .catch((err) => console.error(err));
  });
