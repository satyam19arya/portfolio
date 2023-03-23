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
    : offsetY > 200 && header.classList.add("header-scroll-style");
};

headerAnim();
window.addEventListener("scroll", headerAnim);

//-----------------------------------------------
//          LOADER FUNCTION
//-----------------------------------------------

slowInternet = setTimeout(() => {
  document.querySelector(".loaderDiv p").innerHTML = "Slow internet :(";
}, 3000);

almostReady = setTimeout(() => {
  document.querySelector(".loaderDiv p").innerHTML = "Loading...";
}, 7000);

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready
    clearTimeout(slowInternet);
    clearTimeout(almostReady);

    document.querySelector(".loaderDiv p").innerHTML = "Loading...";

    setTimeout(() => {
      document.querySelector(".loaderDiv p").innerHTML = "Loading...";
    }, 1000);
    setTimeout(() => {
      document.querySelector(".loaderDiv").classList.add("removeLoader");
      document.querySelector("body").style.overflowY = "scroll";
    }, 1500);

    window.scrollTo(0, 0);
  }
  window.scrollTo(0, 0);
};

//-----------SKELETON LOADER--------------//

const setSkeleton = () => {
  const ImgDiv = document.querySelectorAll(`.imgDiv`);

  ImgDiv.forEach((div) => {
    var image = div.querySelector(`img`);

    if (!image.src.includes("/assets/")) {
      image.style.scale = 0;
      image.style.transition = "all 0.2s";

      image.onload = (img) => {
        img.target.style.scale = "1";
        div.classList.remove("skeleton-box");
      };
    } else {
      div.classList.remove("skeleton-box");
    }
  });
};

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