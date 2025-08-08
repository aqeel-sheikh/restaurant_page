import logoPath from "./images/logo.png";
import avocadoTartare from "./images/AvocadoTartare.jpg";
import salmonLuxe from "./images/SalmonLuxe.jpg";
import crimsonRoast from "./images/CrimsonRoast.jpg";
import ratingStars from "./images/5stars.png";

function loadPage() {
  const contentContainer = document.querySelector("#content");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoPath;

  const ctaBtn = document.createElement("button");
  const ctaBtnSpan = document.createElement("span");
  ctaBtnSpan.textContent = "RESERVATION ———";
  ctaBtn.classList.add("ctaBtn", "btn");
  ctaBtn.appendChild(ctaBtnSpan);

  nav.insertBefore(logo, nav.firstChild);
  nav.appendChild(ctaBtn);

  const headerText = document.createElement("div");
  headerText.classList.add("text-container");

  const headerPara1 = document.createElement("p");
  headerPara1.classList.add("fancy-para", "header-para");
  headerPara1.textContent = "Best Bites In Town";

  const headerPara2 = document.createElement("p");
  headerPara2.classList.add("fancy-heading");
  headerPara2.textContent =
    "Taste the rich flavour of high quality cuisine".toUpperCase();

  const headerPara3 = document.createElement("p");
  headerPara3.classList.add("sub-para");
  headerPara3.textContent =
    "We only use the five star quality for our menu, come and get the richness in every food we serve.";

  const menuBtn = document.createElement("button");
  const menuBtnSpan = document.createElement("span");
  menuBtnSpan.textContent = "GO TO MENU ——";
  menuBtn.appendChild(menuBtnSpan);
  menuBtn.classList.add("menu-btn", "btn");

  headerText.append(headerPara1, headerPara2, headerPara3, menuBtn);
  header.appendChild(headerText);

  // Content Section
  const contentText = document.createElement("div");
  contentText.classList.add("text-container");

  const contPara1 = document.createElement("p");
  contPara1.classList.add("fancy-para");
  contPara1.textContent = "Special Menu";
  contentText.appendChild(contPara1);

  const contPara2 = document.createElement("p");
  contPara2.classList.add("fancy-heading");
  contPara2.textContent = "Today's Special";
  contentText.appendChild(contPara2);

  const contPara3 = document.createElement("p");
  contPara3.classList.add("sub-para");
  contPara3.textContent =
    "Special menu oftenly comes different everyday, this is our special food for today";
  contentText.appendChild(contPara3);

  contentContainer.appendChild(contentText);

  const specialMenuFoodCardContainer = document.createElement("div");
  specialMenuFoodCardContainer.classList.add("food-card-container");

  const smFoodCard1 = document.createElement("div");
  smFoodCard1.classList.add("food-card");

  const smFoodCardTextContainer1 = document.createElement("div");
  smFoodCardTextContainer1.classList.add("food-card-text-container");

  const smFoodCardImg1 = document.createElement("img");
  smFoodCardImg1.src = avocadoTartare;

  const smFoodCardName1 = document.createElement("p");
  smFoodCardName1.classList.add("fancy-heading", "food-card-heading");
  smFoodCardName1.textContent = "Avacado Tartare";

  const smFoodCardDescription1 = document.createElement("p");
  smFoodCardDescription1.classList.add("sub-para", "food-card-description");
  smFoodCardDescription1.textContent =
    "A creamy blend of avocado, crisp vegetables, and citrus—light and fresh.";

  const smFoodCardRatings1 = document.createElement("img");
  smFoodCardRatings1.src = ratingStars;
  smFoodCardRatings1.classList.add("card-rating-img");

  const smFoodCardBtn1 = document.createElement("button");
  const smFoodCardBtnDiv1 = document.createElement("div");
  const smFoodCardBtnSpan1 = document.createElement("span");
  smFoodCardBtnSpan1.textContent = "ORDER NOW ——";
  smFoodCardBtn1.classList.add("btn", "ctaBtn");
  smFoodCardBtn1.appendChild(smFoodCardBtnSpan1);
  smFoodCardBtnDiv1.appendChild(smFoodCardBtn1);

  smFoodCardTextContainer1.append(
    smFoodCardName1,
    smFoodCardDescription1,
    smFoodCardRatings1,
    smFoodCardBtnDiv1
  );
  smFoodCard1.append(smFoodCardImg1, smFoodCardTextContainer1);

  const smFoodCard2 = document.createElement("div");
  smFoodCard2.classList.add("food-card");

  const smFoodCardTextContainer2 = document.createElement("div");
  smFoodCardTextContainer2.classList.add("food-card-text-container");

  const smFoodCardImg2 = document.createElement("img");
  smFoodCardImg2.src = salmonLuxe;

  const smFoodCardName2 = document.createElement("p");
  smFoodCardName2.classList.add("fancy-heading", "food-card-heading");
  smFoodCardName2.textContent = "Salmon Luxe";

  const smFoodCardDescription2 = document.createElement("p");
  smFoodCardDescription2.classList.add("sub-para", "food-card-description");
  smFoodCardDescription2.textContent =
    "Seared salmon on soft, herbed polenta with tender greens and glaze.";

  const smFoodCardRatings2 = document.createElement("img");
  smFoodCardRatings2.src = ratingStars;
  smFoodCardRatings2.classList.add("card-rating-img");

  const smFoodCardBtn2 = document.createElement("button");
  const smFoodCardBtnDiv2 = document.createElement("div");
  const smFoodCardBtnSpan2 = document.createElement("span");
  smFoodCardBtnSpan2.textContent = "ORDER NOW ——";
  smFoodCardBtn2.classList.add("btn", "ctaBtn");
  smFoodCardBtn2.appendChild(smFoodCardBtnSpan2);
  smFoodCardBtnDiv2.appendChild(smFoodCardBtn2);

  smFoodCardTextContainer2.append(
    smFoodCardName2,
    smFoodCardDescription2,
    smFoodCardRatings2,
    smFoodCardBtnDiv2
  );
  smFoodCard2.append(smFoodCardImg2, smFoodCardTextContainer2);

  const smFoodCard3 = document.createElement("div");
  smFoodCard3.classList.add("food-card");

  const smFoodCardTextContainer3 = document.createElement("div");
  smFoodCardTextContainer3.classList.add("food-card-text-container");

  const smFoodCardImg3 = document.createElement("img");
  smFoodCardImg3.src = crimsonRoast;

  const smFoodCardName3 = document.createElement("p");
  smFoodCardName3.classList.add("fancy-heading", "food-card-heading");
  smFoodCardName3.textContent = "Crimson Roast";

  const smFoodCardDescription3 = document.createElement("p");
  smFoodCardDescription3.classList.add("sub-para", "food-card-description");
  smFoodCardDescription3.textContent =
    "Roasted chicken with fresh herbs, pepper timbale, and savory jus.";

  const smFoodCardRatings3 = document.createElement("img");
  smFoodCardRatings3.src = ratingStars;
  smFoodCardRatings3.classList.add("card-rating-img");

  const smFoodCardBtn3 = document.createElement("button");
  const smFoodCardBtnDiv3 = document.createElement("div");
  const smFoodCardBtnSpan3 = document.createElement("span");
  smFoodCardBtnSpan3.textContent = "ORDER NOW ——";
  smFoodCardBtn3.classList.add("btn", "ctaBtn");
  smFoodCardBtn3.appendChild(smFoodCardBtnSpan3);
  smFoodCardBtnDiv3.appendChild(smFoodCardBtn3);

  smFoodCardTextContainer3.append(
    smFoodCardName3,
    smFoodCardDescription3,
    smFoodCardRatings3,
    smFoodCardBtnDiv3
  );
  smFoodCard3.append(smFoodCardImg3, smFoodCardTextContainer3);

  specialMenuFoodCardContainer.append(smFoodCard1, smFoodCard2, smFoodCard3);

  contentContainer.appendChild(specialMenuFoodCardContainer);
}
export default loadPage;
