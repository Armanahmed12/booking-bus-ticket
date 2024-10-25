const ulTagOfNav = document.getElementById("nav-lists-container");
const menuBar = document.getElementById("menuBar");

// navigation bar
menuBar.addEventListener("click", () => {
  const styles = [...ulTagOfNav.classList];

  styles.forEach((style) => {
    if (style.startsWith("top-")) {

      if (style !== "top-[69.6px]") {

        ulTagOfNav.classList.remove("top-[-600px]");
        ulTagOfNav.classList.add("top-[69.6px]");
        document.getElementById('bannerSection').style.zIndex = '-20';
        // change the barIcon into X
        menuBar.setAttribute('class', 'fa-solid fa-x text-[#1dd100] text-2xl block sm:hidden')
       

      } else {

        ulTagOfNav.classList.remove("top-[69.6px]");
        ulTagOfNav.classList.add("top-[-600px]");
        // change the "x" icon into Menubar
        menuBar.setAttribute('class', 'text-2xl fa-solid fa-bars block sm:hidden')
        setTimeout( ()=>{
          document.getElementById('bannerSection').style.zIndex = '20';
        },1000);
    
      }
    }
  });
});

// scroll down to the booking ticket section by clicking the btn of banner-section


document.getElementById("sss").addEventListener("click", ()=>{

  const lowerSection = document.getElementById('transportationSection');
  lowerSection.scrollIntoView({ behavior: 'smooth' });

})
