import { loadNav } from "./pageLoad.js";
function loadMenu() {
  loadNav();
  const contentContainer = document.querySelector("#content");
  const header = document.querySelector("header");
  header.classList.add("menu-header-bg");
  const headerText = document.createElement("div");
  headerText.classList.add("text-container");

  const headerPara1 = document.createElement("p");
  headerPara1.classList.add("fancy-para", "header-para");
  headerPara1.style.maxWidth = "300px";
  headerPara1.textContent = "Quality Food For You";

  const headerPara2 = document.createElement("p");
  headerPara2.classList.add("fancy-heading");
  headerPara2.textContent = "Our Specialities";

  const headerPara3 = document.createElement("p");
  headerPara3.classList.add("sub-para");
  headerPara3.textContent =
    "Authentic food from our restaurant served with high quality ingredients";

  headerText.append(headerPara1, headerPara2, headerPara3);
  header.appendChild(headerText);

  // Content Section
  const menuButtons = document.createElement("div");
  menuButtons.classList.add("menu-buttons-div");

  for (let i = 0; i < 7; i++) {
    const button = document.createElement("button");
    const span = document.createElement("span");
    if (i === 0) {
      span.textContent = "Specialities";
      button.classList.add("button-selected");
    }
    else if (i === 1) span.textContent = "HomeStyle";
    else if (i === 2) span.textContent = "Steak";
    else if (i === 3) span.textContent = "Rice";
    else if (i === 4) span.textContent = "Cocktails";
    else if (i === 5) span.textContent = "Wine";
    else span.textContent = "Appetizer";

    button.appendChild(span);
    button.classList.add("btn", "menu-page-button");
    menuButtons.appendChild(button);
    contentContainer.appendChild(menuButtons);
  }
  const selectButtons = document.querySelectorAll(".menu-page-button");
  selectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectButtons.forEach((b) => b.classList.remove("button-selected"));
      btn.classList.add("button-selected");
    });
  });

  const menuCardContainer = document.createElement("div")
  

}
export default loadMenu;
