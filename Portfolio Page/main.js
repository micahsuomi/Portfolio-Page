
//page loader

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
    });
    

// scrollreveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 })
ScrollReveal().reveal('.punchline', { delay: 1000})
ScrollReveal().reveal('.punchline2', { delay: 2000})
ScrollReveal().reveal('.punchline3', { delay: 2500})



//toggle navbar

const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-links li');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');

}); 

//Back to top button

window.onscroll = function() {
    scrollFunction()
};

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