//SCrollreveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 })
ScrollReveal().reveal('.punchline', { delay: 1000})

// Navbar toggle

var hamburger = document.querySelector('.navbar__hamburger');
var navLinks = document.querySelector('.navbar__nav-links');
var links = document.querySelectorAll('.navbar__nav-links li');
var lineOne = document.getElementById('navbar__line_1');
var lineTwo = document.getElementById('navbar__line_2');
const upperLine = document.getElementById('upper-line');
const lowerLine = document.getElementById('lower-line');


hamburger.addEventListener('click', function (){
    navLinks.classList.toggle("open");
    lineOne.classList.toggle('rotate-1');
    lineTwo.classList.toggle('rotate-3');
    hamburger.classList.toggle('add-margin');
    upperLine.classList.toggle('make-transparent');
    lowerLine.classList.toggle('make-transparent');

});

//Back to top button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display ="block";
    } else {
        document.getElementById("myBtn").style.display ="none";
    }
}

//when the user clicks on the button, the the function topFunction() is called and the page goes back to top 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}