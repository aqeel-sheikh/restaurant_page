import girlChef from "./images/girl-chef.png";
import richGirl from "./images/rich-girl.jpg";
import manChef from "./images/man-chef.jpg";
import { loadNav } from "./pageLoad.js";

function loadAbout() {
  loadNav();
  const contentContainer = document.querySelector("#content");
  const header = document.querySelector("header");
  header.classList.add("about-header-bg");
  const headerText = document.createElement("div");
  headerText.classList.add("text-container");

  const headerPara1 = document.createElement("p");
  headerPara1.classList.add("fancy-para", "header-para");
  headerPara1.textContent = "About Us";

  const headerPara2 = document.createElement("p");
  headerPara2.classList.add("fancy-heading");
  headerPara2.textContent = "Our Story";

  const headerPara3 = document.createElement("p");
  headerPara3.classList.add("sub-para");
  headerPara3.textContent =
    "A journey for making successful luxury restaurant with best the best services";

  headerText.append(headerPara1, headerPara2, headerPara3);
  header.appendChild(headerText);

  // Content Section
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const imgDiv1 = document.createElement("div");
  imgDiv1.classList.add("about-img-div");
  const img1 = document.createElement("img");
  img1.src = manChef;
  imgDiv1.appendChild(img1);

  const imgDiv2 = document.createElement("div");
  imgDiv2.classList.add("about-img-div");
  const img2 = document.createElement("img");
  img2.src = richGirl;
  imgDiv2.appendChild(img2);

  const imgDiv3 = document.createElement("div");
  imgDiv3.classList.add("about-img-div");
  const img3 = document.createElement("img");
  img3.src = girlChef;
  imgDiv3.appendChild(img3);

  const aboutText = document.createElement("d");
  aboutText.classList.add("about-text");

  const aboutPara = document.createElement("p");
  aboutPara.classList.add("about-para");
  aboutPara.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates hic beatae sint. Soluta perspiciatis laborum aspernatur deserunt dignissimos laudantium consequuntur odit facilis fugit provident. Itaque est recusandae error quibusdam dolore quae, eveniet id, esse saepe impedit at suscipit aliquam ea omnis, accusantium officia nemo. Odio consectetur adipisci voluptas quisquam?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam alias molestiae illo nobis esse in vitae omnis consectetur sed, veritatis commodi ad eligendi, quam ea! Ut illum id exercitationem.";

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("btn", "ctaBtn");
  const aboutButtonSpan = document.createElement("span");
  aboutButtonSpan.textContent = "MORE ABOUT US ———";
  aboutButton.appendChild(aboutButtonSpan);

  aboutText.append(aboutPara, aboutButton);

  aboutContainer.append(imgDiv1, imgDiv2, imgDiv3, aboutText);
  contentContainer.appendChild(aboutContainer);
}
export default loadAbout;
