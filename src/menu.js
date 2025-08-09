import Molten from "./images/MoltenIndulgence.png";
import Rosemary from "./images/RosemaryWagyu.png";
import Caviar from "./images/CaviarCanapes.png";
import { loadNav } from "./pageLoad.js";

function loadMenu() {
  loadNav();
  const contentContainer = document.querySelector("#content");
  const header = document.querySelector("header");
  header.classList.remove("about-header-bg");
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
    } else if (i === 1) span.textContent = "HomeStyle";
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
  // Cards
  const menuCardContainer = document.createElement("div");
  menuCardContainer.classList.add("menu-card-container");
  // Card 1
  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");

  const imgDiv1 = document.createElement("div");
  imgDiv1.classList.add("menu-img-div");
  const menuCardImg1 = document.createElement("img");
  menuCardImg1.src = Molten;
  imgDiv1.appendChild(menuCardImg1);

  const menuCardText1 = document.createElement("div");
  menuCardText1.classList.add("menu-card-text");
  const menuCardTextHeading1 = document.createElement("p");
  menuCardTextHeading1.classList.add("fancy-heading", "food-card-heading");
  menuCardTextHeading1.textContent = "Molten Indulgence";

  const menuCardTextDescription1 = document.createElement("p");
  menuCardTextDescription1.classList.add("sub-para", "food-card-description");
  menuCardTextDescription1.textContent =
    "Decadent dark chocolate lava cake crowned with Madagascar vanilla ice cream and dusted with cocoa.";

  const menuCardTextPrice1 = document.createElement("button");
  menuCardTextPrice1.textContent = "$39";

  menuCardText1.append(
    menuCardTextHeading1,
    menuCardTextDescription1,
    menuCardTextPrice1
  );
  menuCard1.append(imgDiv1, menuCardText1);

  // Card 2
  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");

  const imgDiv2 = document.createElement("div");
  imgDiv2.classList.add("menu-img-div");
  const menuCardImg2 = document.createElement("img");
  menuCardImg2.src = Rosemary;
  imgDiv2.appendChild(menuCardImg2);

  const menuCardText2 = document.createElement("div");
  menuCardText2.classList.add("menu-card-text");
  const menuCardTextHeading2 = document.createElement("p");
  menuCardTextHeading2.classList.add("fancy-heading", "food-card-heading");
  menuCardTextHeading2.textContent = "Rosemary Wagyu";

  const menuCardTextDescription2 = document.createElement("p");
  menuCardTextDescription2.classList.add("sub-para", "food-card-description");
  menuCardTextDescription2.textContent =
    "Seared wagyu beef filet atop silky truffle-infused mashed potatoes, garnished with fresh rosemary.";

  const menuCardTextPrice2 = document.createElement("button");
  menuCardTextPrice2.textContent = "$45";

  menuCardText2.append(
    menuCardTextHeading2,
    menuCardTextDescription2,
    menuCardTextPrice2
  );

  const mq = window.matchMedia("(max-width: 768px)");
  function handleAppendOnScreenChnage(e) {
    if (e.matches) {
      menuCard2.append(imgDiv2, menuCardText2);
    } else {
      menuCard2.append(menuCardText2, imgDiv2);
    }
  }
  mq.addEventListener("change", handleAppendOnScreenChnage);
  handleAppendOnScreenChnage(mq);

  // Card 3
  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");

  const imgDiv3 = document.createElement("div");
  imgDiv3.classList.add("menu-img-div");
  const menuCardImg3 = document.createElement("img");
  menuCardImg3.src = Caviar;
  imgDiv3.appendChild(menuCardImg3);

  const menuCardText3 = document.createElement("div");
  menuCardText3.classList.add("menu-card-text");
  const menuCardTextHeading3 = document.createElement("p");
  menuCardTextHeading3.classList.add("fancy-heading", "food-card-heading");
  menuCardTextHeading3.textContent = "Caviar Canapés";

  const menuCardTextDescription3 = document.createElement("p");
  menuCardTextDescription3.classList.add("sub-para", "food-card-description");
  menuCardTextDescription3.textContent =
    "Smoked salmon on crisp butter biscuits, crème fraîche, and black caviar pearls, paired with aged single malt whiskey.";

  const menuCardTextPrice3 = document.createElement("button");
  menuCardTextPrice3.textContent = "$49";

  menuCardText3.append(
    menuCardTextHeading3,
    menuCardTextDescription3,
    menuCardTextPrice3
  );
  menuCard3.append(imgDiv3, menuCardText3);

  menuCardContainer.append(menuCard1, menuCard2, menuCard3);

  contentContainer.appendChild(menuCardContainer);
}
export default loadMenu;
