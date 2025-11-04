import { removeAllChildNodes } from "./functions.js";
const loadWelcome = function () {
    const content = document.querySelector(".content");

    removeAllChildNodes(content);

    const welcomeSection = document.createElement("section");
    welcomeSection.classList.add("welcome-section")

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    const description = document.createElement("p");
    description.textContent =
    "Experience the finest dining with our exquisite menu and cozy atmosphere.";

    const button = document.createElement("button");
    button.textContent = "Order Now";

    button.classList.add("explore-button");
    welcomeSection.appendChild(heading);
    welcomeSection.appendChild(description);
    welcomeSection.appendChild(button);

    content.appendChild(welcomeSection);
}

export { loadWelcome };