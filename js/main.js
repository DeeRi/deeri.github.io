$(".owl1").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: false,
  items: 3
});

$(".owl2").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  responsive: false,
  items: 1
});

var nav = document.querySelector(".navigation");
var hamburger = document.querySelector(".menu-button");

hamburger.addEventListener("click", function() {
  if (nav.classList.contains("navigation-close")) {
    nav.classList.remove("navigation-close");
    nav.classList.add("navigation-open");
  } else {
    nav.classList.remove("navigation-open");
    nav.classList.add("navigation-close");
  }
});

var openButton = document.querySelector(".order-button");
var modal = document.querySelector(".modal-contact");
var overlay = document.querySelector(".modal-overlay");
var closeButton = document.querySelector(".button-modal-close");

openButton.addEventListener("click", function() {
  if(modal.classList.contains("modal-close")) {
    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
    overlay.classList.remove("modal-overlay-close");
    overlay.classList.add("modal-overlay-open");
  }
}
)

closeButton.addEventListener("click", function() {
  if(modal.classList.contains("modal-open")) {
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
    overlay.classList.remove("modal-overlay-open");
    overlay.classList.add("modal-overlay-close");
  }
}
)
