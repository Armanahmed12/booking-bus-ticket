const ulTagOfNav = document.getElementById("nav-lists-container");
const menuBar = document.getElementById("menuBarr");
const bannerCarouselImgContainer = document.getElementById(
  "bannerCarouselSection"
);

// navigation bar
document.getElementById("menuBar").addEventListener("click", () => {
  const styles = [...ulTagOfNav.classList];

  styles.forEach((element) => {
    if (element.startsWith("top-")) {
      if (element !== "top-[53.6px]") {
        ulTagOfNav.classList.remove("top-[-600px]");
        ulTagOfNav.classList.add("top-[53.6px]");
      } else {
        ulTagOfNav.classList.remove("top-[53.6px]");
        ulTagOfNav.classList.add("top-[-600px]");
        setTimeout(() => {
          bannerCarouselImgContainer.removeAttribute("style");
        }, 1000);
      }
    }
  });
});
