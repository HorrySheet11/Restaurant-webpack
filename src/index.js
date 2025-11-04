import "./styles.css";
import { loadWelcome } from "./welcome.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
console.log("Script loaded successfully.");

const welcomeSection = document.querySelector("#welcome-section");
welcomeSection.addEventListener("click", () => loadWelcome());

const menuSection = document.querySelector("#menu-section");
menuSection.addEventListener("click", () => loadMenu());

const aboutSection = document.querySelector("#about-section");
aboutSection.addEventListener("click", () => loadAbout());
