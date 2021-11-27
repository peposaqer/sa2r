const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.forJS');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));

  // add the active class if within visible height of the element
  if (scrollY - sections[index].offsetHeight <
        sections[index].offsetTop) {
    links[index].classList.add('active');
  }
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


document.getElementById("toggleSwitch").onclick = function () {
  myFunction();
};

function myFunction() {
  let bg = document.body.style.background;
  if (bg === "black") {
    document.body.style.background = "#f4f4ff";
    document.body.style.color = "#000";
    document.querySelector("style").textContent +=
    "@media screen and (max-width:999px) { .navbar-collapse ul { background-color: #f4f4ff; }}";
    $(".nav-link").css("color", "#000");
    // $(".navbar-collapse ul").css("background-color", "#f4f4ff");
    $(".about h2").css("color", "#000");
    $(".about span a").css("color", "#000");
    $(".about i").css("box-shadow", "2px 2px 5px #000");
    $(".skills").css("background-color", "#FFF");
  } else {
    document.body.style.background = "black";
    document.body.style.color = "#FFF";
    document.querySelector("style").textContent +=
    "@media screen and (max-width:999px) { .navbar-collapse ul { background-color: #000; }}";
    $(".nav-link").css("color", "#FFF");
    // $(".navbar-collapse ul").css("background-color", "#000");
    $(".about h2").css("color", "#FFF");
    $(".about span a").css("color", "#FFF");
    $(".about i").css("box-shadow", "2px 2px 5px #FFF");
    $(".skills").css("background-color", "#000");
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
$(".nav-link").click(function () {
  $("body").css("overflow-y", "scroll");
  $(".navbar-collapse").removeClass("show");
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

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(".card img").hover(function(){
//   $(".card-body").css("display", "block");
//   $(".card").css("border", "1px solid #DDD");
//   }, function(){
//   $(".card-body").css("display", "none");
//   $(".card").css("border", "none");
// });

// $(".card img").on("mouseenter", function(){
// 	$(".card-body").addClass("hide");
//   $(this).removeClass("hide");
//   $(".card").$(this).children(".card-body");
// })
// $(".card img").on("mouseleave", function(){
// 	// $(".card-body").removeClass("hide");
// 	$(".card-body").addClass("hide");
// })

// $(document).ready(function() {
//   $(".card img").hover(function(){
//     $(this).next().css("display", "block");
//     $(this).parent().css("border", "1px solid #DDD");
//     $(this).css("border-radius", "12px 12px 0px 0px");
//   }, function(){
//     $(".card-body").css("display", "none");
//     $(".card").css("border", "none");
//     $(this).css("border-radius", "12px 12px 12px 12px");
//   });	
// });

$(document).ready(function() {
  $(".card").hover(function(){
    $(this).children("div").css("display", "block");
    $(this).css("border", "1px solid #DDD");
    $(this).children("img").css("border-radius", "12px 12px 0px 0px");
    $(this).children("img").css("width", "100%");
    $(this).children("img").css("box-shadow", "none");
  }, function(){
    $(this).children("div").css("display", "none");
    $(this).css("border", "none");
    $(this).children("img").css("border-radius", "12px 12px 12px 12px");
    $(this).children("img").css("width", "80%");
    $(this).children("img").css("box-shadow", "5px 5px 5px #DDD");
  });	
});

(function ($){
  $.fn.counter = function() {
    const $this = $(this),
    numberFrom = parseInt($this.attr('data-from')),
    numberTo = parseInt($this.attr('data-to')),
    delta = numberTo - numberFrom,
    deltaPositive = delta > 0 ? true : false,
    time = parseInt($this.attr('data-time')),
    changeTime = 10;
    
    let currentNumber = numberFrom,
    value = delta*changeTime/time;
    var interval1;
    const changeNumber = () => {
      currentNumber += value;
      //checks if currentNumber reached numberTo
      (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
      this.text(parseInt(currentNumber));
      currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
    }

    interval1 = setInterval(changeNumber,changeTime);
  }
}(jQuery));

$(document).ready(function(){

  $('.count-up').counter();
  $('.count1').counter();
  $('.count2').counter();
  
  new WOW().init();
});


