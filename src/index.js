import "./style.css";
import loadPage from "./pageLoad";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const originalHTML = document.body.innerHTML;
const originalHeader = document.querySelector("header").innerHTML;
// loadPage();
loadMenu();
function attachNavEvents() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const div = document.querySelector("#content");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "nav-home-btn") {
        document.body.innerHTML = "";
        document.body.innerHTML = originalHTML;
        loadPage();
      } else if (btn.id === "nav-menu-btn") {
        document.querySelector("header").innerHTML = originalHeader;
        div.innerHTML = "";
        loadMenu();
      } else if (btn.id === "nav-about-btn") {
        document.querySelector("header").innerHTML = originalHeader;
        div.innerHTML = "";
        loadAbout();
      }
      attachNavEvents();
    });
  });
}
attachNavEvents();
