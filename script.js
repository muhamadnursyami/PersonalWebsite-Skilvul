// TOGGLE NAVBAR
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  // console.log("hi");
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

// ACTIVE SECTION
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // activate the overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      // console.log("true");
      toggleNavbar();
    } else {
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
// ABOUT TAB
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
    // console.log(target);
  }
});

// PORTOFOLIO DETAIL
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    // console.log("Hie");
    togglePortofolioPopUp();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortofolioPopUp() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortofolioPopUp);

// hide pop up ketika klik di mana pun
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("pp-inear")) {
    togglePortofolioPopUp();
  }
});

function portfolioItemDetails(portfolioItem) {
  // console.log(parentElement);
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portofolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portofolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portofolio-items-details"
  ).innerHTML;
}
