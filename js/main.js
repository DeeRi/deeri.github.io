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
