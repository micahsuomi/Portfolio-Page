//SCrollreveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 })
ScrollReveal().reveal('.punchline', { delay: 1000})

// Navbar toggle

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', function (){
    navLinks.classList.toggle("open");
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