import { ShopList } from "./ShopList/index.js";

const mainElement = document.querySelector('main');

fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList(
      { dayName: 'Pondělí', items: data.result }
    );
  });

fetch('https://nakupy.kodim.app/api/sampleweek/tue/items')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList(
      { dayName: 'Úterý', items: data.result }
    );
  });
