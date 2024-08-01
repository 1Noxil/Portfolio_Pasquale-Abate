
const scrollToTopButton = 
document.querySelector('#scroll-to-top');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
    console.log('cazzi');
  scrollToTopButton.classList.remove('hidden');
} else {
    console.log('else');
  scrollToTopButton.classList.add('hidden');
}
});

// Smooth scroll to top
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
}              
/* Svuota campi input */
let input = document.querySelectorAll('input');
input.forEach(element => {
    element.value = '';
    console.log('cazzi');
});
/* Svuota textarea */
let textarea = document.querySelector('textarea');
textarea.value = '' ;