let body = document.querySelector("body");

let navBlock = document.querySelector(".nav-block");
let navList = document.querySelector(".nav-list");
let darkMode = localStorage.getItem("darkMode");
let hamburger = document.querySelector(".hamburger");
let modeSwitch = document.getElementById("mode-switch");
let modeBall = document.getElementById("slider-ball");


hamburger.addEventListener("click", function () {
navBlock.classList.toggle("navSlide")

 });

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

navList.addEventListener("click", function () {
  navBlock.classList.toggle("navSlide");
  hamburger.classList.toggle("active");
});

 document.addEventListener('click', (e) => {
if (!navBlock.contains(e.target) && e.target !== hamburger){
  navBlock.classList.remove("navSlide");
  hamburger.classList.remove("active");
}
 })

 window.addEventListener("scroll", view);
 function view() {
   let view = document.querySelectorAll("main");
 
   for (let i = 0; i < view.length; i++) {
     let windowhieght = window.innerHeight;
 
 
   let viewtop = view[i].getBoundingClientRect().top;
   let viewpoint = 120;
 
   if (viewtop < windowhieght - viewpoint) {
     view[i].classList.add('swipe-in');
   } else{
       view[i].classList.remove('swipe-in')
   }
 }
 }


document.addEventListener("scroll", function () {
  if (window.scrollY > 1 ){
       navBlock.classList.add('scrolled')
  }else{
      navBlock.classList.remove('scrolled')
  }
})

function enableDarkMode() {
  body.classList.toggle("darkmode");
  modeBall.classList.toggle('slider:before')
// localStorage.getItem('modeBall')
  localStorage.setItem("darkMode", "enable");
}

function disableDarkMode() {
  body.classList.toggle("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enable") {
  enableDarkMode();

}

modeSwitch.addEventListener("click", () => {
  localStorage.getItem("darkMode");
  if (darkMode !== "enable") {
    enableDarkMode();
  } else {
    disableDarkMode();
    console.log("go");
  }
});


// for project

let swiper = new Swiper(".projects", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// testimony

$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})

