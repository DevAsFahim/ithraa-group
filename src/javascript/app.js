// const trigger = document.querySelector("#modal-trigger");
// const modal = document.querySelector("#modal");
// const close = document.querySelector(".close-modal");

// trigger.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// close.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });

// ----------------
// hero slider

// $(document).ready(function(){
//   $('.hero-slider').slick({
//     // setting-name: setting-value
//   });
// });

// ---------------
// mobile nav bar start 

const showNav = document.getElementById('nav-show');
const hideNav = document.getElementById('nav-hide');
console.log(showNav)
showNav.addEventListener('click', () => {
  hideNav.style.display = 'block'
  showNav.style.display = 'none'
  document.getElementById('mobile-menu').classList.remove('hidden')
})

hideNav.addEventListener('click', () => {
  showNav.style.display = 'block'
  hideNav.style.display = 'none'
  document.getElementById('mobile-menu').classList.add('hidden')
})

// mobile nav bar end 
// ---------------

// ---------------
// accordion start 

const plusBtns = document.querySelectorAll('.accordion-btn');
const contentWrappers = document.querySelectorAll(".dropdown-wrapper");

plusBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    contentWrappers[index].classList.toggle("active");
    if (contentWrappers[index].classList.contains('active')) {
      btn.children[1].style.transform = 'rotate(180deg)'
    } else {
      btn.children[1].style.transform = 'rotate(0)'
    }
  });
});

// accordion end
// ---------------


