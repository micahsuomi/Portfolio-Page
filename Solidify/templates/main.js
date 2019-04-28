
//option 2 jquery smooth scroll

$(".navbar a").on("click", function(e) {
     if(this.hash !=="") {
         e.preventDefault();

         const hash = this.hash;

         $("html, body").animate(
         {
             scrollTop: $(hash).offset().top
         },
         800
         );
     }
 });

 // scrollreveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 })
ScrollReveal().reveal('.punchline', { delay: 1000})
ScrollReveal().reveal('.punchline2', { delay: 2000})

// toggle navbar
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', function() {
  navLinks.classList.toggle("open");  

  
});

//change front-container color

var color = ["red", "rgb(202, 76, 76)", "rgb(233, 152, 31)", "rgb(85, 98, 129)", "rgb(79, 197, 243)"];
var i = 0;
document.querySelector('.btn-red').addEventListener('click', function() {
    i = 0 < color.length ? ++i :0;
    document.querySelector(['.front-container','.get-app-wrapper']).style.background = color [i]
});



    
