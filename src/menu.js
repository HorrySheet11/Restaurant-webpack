import { removeAllChildNodes } from "./functions.js";

const loadMenu = function () {
  const content = document.querySelector(".content");
  
      removeAllChildNodes(content);

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Our Menu";

    const menuList = document.createElement("ul");

    const menuItems = [
    "Grilled Salmon with Lemon Butter Sauce",
    "Roasted Chicken with Herbs",
    "Vegetarian Pasta Primavera",
    "Classic Cheeseburger with Fries",
    ];

    menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    menuList.appendChild(listItem);
    });

    menuSection.appendChild(menuHeading);
    menuSection.appendChild(menuList);
  content.appendChild(menuSection);
}

export { loadMenu };

