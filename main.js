
// SCROLL REVEAL
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 400 })
ScrollReveal().reveal('.punchline', { delay: 1000})
ScrollReveal().reveal('.punchline2', { delay: 2000})
ScrollReveal().reveal('.punchline3', { delay: 2500})

//AOS 
AOS.init({
    offset: 400,
    duration: 1000
});

AOS.init({
    disable: function() {
      let maxWidth = 550;
      return window.innerWidth < maxWidth;
    }
  
  })

//toggle navbar

const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-links li');
const lineOne = document.getElementById('line1'); 
const lineTwo = document.getElementById('line2'); 
const upperLine = document.getElementById('upper-line');
const lowerLine = document.getElementById('lower-line');



hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
    lineOne.classList.toggle('rotate-1');
    lineTwo.classList.toggle('rotate-3');
    upperLine.classList.toggle('make-transparent');
    lowerLine.classList.toggle('make-transparent');
    hamburger.classList.toggle('add-margin');

}); 

//SHOW-HIDE Portfolio

const sol = document.getElementById('solidify');
const noir = document.getElementById('noirflix');
const eve = document.getElementById('evenflow');
const sketch = document.getElementById('sketch');
const eat = document.getElementById('eat');


const star = document.getElementById('star');
const crypto = document.getElementById('crypto');



const webButton = document.getElementById('html-btn');
const reactButton = document.getElementById('react-btn');

reactButton.addEventListener('click', () => {

    star.classList.remove('hide');
    crypto.classList.remove('hide');
    sol.classList.add('hide');
    noir.classList.add('hide');
    eve.classList.add('hide');
    sketch.classList.add('hide');
    eat.classList.add('hide');
    console.log('clicked on react button')
})

webButton.addEventListener('click', () => {
    
    sol.classList.remove('hide');
    sol.classList.remove('hide');
    noir.classList.remove('hide');
    eve.classList.remove('hide');
    sketch.classList.remove('hide');
    eat.classList.remove('hide');
    star.classList.add('hide');
    crypto.classList.add('hide');
    console.log('clicked on websites button')
})

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