//-----------------------------------------------
//          HEADER TOGGLE FUNCTION
//-----------------------------------------------

const header = document.querySelector(".header");

function toggleNav() {
  const sections = document.querySelectorAll("section, footer");

  header.classList.toggle("active");

  header.classList.contains("active")
    ? sections.forEach((section) => {
        section.addEventListener("click", toggleNav);
      })
    : sections.forEach((section) => {
        section.removeEventListener("click", toggleNav);
      });
}

//---------------------------------------------------
//          HEADER ANIMATION FUNCTION
//---------------------------------------------------

const anchors = header.querySelectorAll("a");

const headerAnim = () => {
  const offsetY = window.scrollY;

  header.classList.contains("header-scroll-style")
    ? offsetY < 50 && header.classList.remove("header-scroll-style")
    : offsetY > 100 && header.classList.add("header-scroll-style");
};

headerAnim();
window.addEventListener("scroll", headerAnim);

/*--------------------------------------------------------------------
    Function for Hilighting navlinks on scroll to particular section
----------------------------------------------------------------------*/

// Add an event listener listening for scroll

function navHighlighter() {
  const sections = document.querySelectorAll("section");

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 180;
    const sectionId = current.getAttribute("id");

    /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar .navbar-link[name*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar .navbar-link[name*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

window.addEventListener("scroll", () => {
  headerAnim();
  navHighlighter();
});

const scrollToSection = (e) => {
  document.querySelector(`#${e.getAttribute("name")}`).scrollIntoView();
};