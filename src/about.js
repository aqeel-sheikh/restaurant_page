import {loadNav} from "./pageLoad.js" 
function loadAbout() {
    const  contentContainer = document.querySelector("#content")
    const header = document.querySelector("header")
    // header.classList.add("remove-bg")
    loadNav()
    const div = document.createElement("div")
    div.textContent = "About"
    contentContainer.appendChild(div)
}
export default loadAbout