var tab = 1;

document.querySelector(".bar").addEventListener("click", (eve) => {
    if (tab == 1) {
        document.querySelector(".mob-nav").style.display = "block";
        eve.preventDefault();
        tab = 0;
    } else if (tab == 0) {
        document.querySelector(".mob-nav").style.display = "none";
        eve.preventDefault();
        tab = 1;
    }
});
const divs = document.querySelectorAll('.full-screen-div');
let activeIndex = 0;

setInterval(() => {
  divs[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % divs.length;
  divs[activeIndex].classList.add('active');
}, 1500);