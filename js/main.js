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

var upButton = document.querySelector(".button-move-up")

upButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});


var orderBlock = document.querySelector(".order");
var downButton = document.querySelector(".button-move-down")

downButton.addEventListener("click", function() {
  window.scrollTo({
    //координата топ - координта блока минус половина высоты экрана и плюс половина высоты блока (чтобы блок встал по центру относительно вертикали)
    top: getCoords(orderBlock).top - document.documentElement.clientHeight/2 + 100,
    behavior: "smooth"
});
});

// функция, получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}