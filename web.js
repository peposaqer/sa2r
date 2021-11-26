document.getElementById("toggleSwitch").onclick = function () {
  myFunction();
};

function myFunction() {
  let bg = document.body.style.background;
  if (bg === "black") {
    document.body.style.background = "#f4f4ff";
    document.body.style.color = "#000";
    $(".nav-link").css("color", "#000");
    $(".navbar-collapse ul").css("background-color", "#f4f4ff");
    $(".about h2").css("color", "#000");
    $(".about h2 a").css("color", "#000");
  } else {
    document.body.style.background = "black";
    document.body.style.color = "#FFF";
    $(".nav-link").css("color", "#FFF");
    $(".navbar-collapse ul").css("background-color", "#000");
    $(".about h2").css("color", "#FFF");
    $(".about h2 a").css("color", "#FFF");
  }
}
$("#open").click(function () {
  $("body").css("overflow-y", "hidden");
  $(".fa-times").css("display", "block");
  $("#open").css("display", "none");
});
$(".fa-times").click(function () {
  $("body").css("overflow-y", "scroll");
  $(".fa-times").css("display", "none");
  $("#open").css("display", "block");
});

// Animation on Scroll
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
