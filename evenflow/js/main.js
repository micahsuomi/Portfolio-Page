
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const reviewImages = document.querySelector('.review-images');
const reviewImg = document.querySelector('.postbox-bigimg');
const reviewImgHidden = document.querySelector('.postbox-bigimg-hidden');



reviewImages.addEventListener('mouseover', () => {
    reviewImg.classList.add('hide');
    reviewImgHidden.classList.add('show');

})

reviewImages.addEventListener('mouseout', () => {
    reviewImg.classList.remove('hide');
    reviewImgHidden.classList.remove('show');

})
