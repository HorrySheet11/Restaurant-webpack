import { removeAllChildNodes } from "./functions.js";

const loadAbout = function () {
  const content = document.querySelector(".content");

    removeAllChildNodes(content);

    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about-section");

    const aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "About Us";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent =
    "At our restaurant, we believe that great food and exceptional service are the cornerstone of a memorable dining experience. Join us for a culinary journey that will leave you craving for more.";

    aboutSection.appendChild(aboutHeading);
    aboutSection.appendChild(aboutParagraph);

  content.appendChild(aboutSection);
}

export { loadAbout };