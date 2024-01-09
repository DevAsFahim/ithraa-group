const trigger = document.querySelector("#modal-trigger");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close-modal");

trigger.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// ----------------
// hero slider

// $(document).ready(function(){
//   $('.hero-slider').slick({
//     // setting-name: setting-value
//   });
// });

