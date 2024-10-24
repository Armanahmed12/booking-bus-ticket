const ulTagOfNav = document.getElementById("nav-lists-container");
const menuBar = document.getElementById("menuBarr");

// navigation bar
document.getElementById("menuBar").addEventListener("click", () => {
  const styles = [...ulTagOfNav.classList];

  styles.forEach((style) => {
    if (style.startsWith("top-")) {
      if (style !== "top-[53.6px]") {
        ulTagOfNav.classList.remove("top-[-600px]");
        ulTagOfNav.classList.add("top-[53.6px]");
        document.getElementById('bannerSection').style.zIndex = '-20';
      } else {
        ulTagOfNav.classList.remove("top-[53.6px]");
        ulTagOfNav.classList.add("top-[-600px]");
        
        setTimeout(() => {
          document.getElementById('bannerSection').style.zIndex = '20';
        }, 1000);
      }
    }
  });
});

// scroll down to the booking ticket section by clicking the btn of banner-section
document.getElementById("sss").addEventListener("click", ()=>{


  const lowerSection = document.getElementById('transportationSection');
  lowerSection.scrollIntoView({ behavior: 'smooth' });

})
