// NAV scroll
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scroll", window.scrollY > 0);
});
/*******************************************************************************************************/

// Show/Hide FAQ Answer
let faq = document.querySelectorAll(".faqs article");
faq.forEach((f) => {
  f.addEventListener("click", () => {
    f.classList.toggle("opened");
    let icon = f.querySelector(".icon i");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});
/*******************************************************************************************************/

// Show/Hide Nav Menu
let openBtn = document.querySelector("nav .open");
let closeBtn = document.querySelector("nav .close");
let menu = document.querySelector("nav ul");

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  menu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  menu.style.display = "none";
});
/*******************************************************************************************************/

// Top Page
let topbtn = document.querySelector(".up-page");
window.addEventListener("scroll", () => {
  window.scrollY >= 200
    ? (topbtn.style.display = "block")
    : (topbtn.style.display = "none");
  topbtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});
/*******************************************************************************************************/
