function myFunction() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}
function myFunction1() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}
function font1() {
  document.getElementById("demo1").style.fontSize = '14px';
}
function HideFunction() {
  let x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



var swiper = new Swiper(".centered-slide-carousel", {
 centeredSlides: true,
 paginationClickable: true,
 loop: true,
 spaceBetween: 30,
 slideToClickedSlide: true,
 pagination: {
   el: ".centered-slide-carousel .swiper-pagination",
   clickable: true,
 },
 breakpoints: {
   1340: {
     slidesPerView: 5,
     spaceBetween: 30
   },
   1028: {
     slidesPerView: 3,
     spaceBetween: 10
   },
   990: {
     slidesPerView: 2,
     spaceBetween: 0
   }
 }
});