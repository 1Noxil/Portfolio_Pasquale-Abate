
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

/* web3Form */

document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "d9e470c5-9f3a-4413-99ec-95dab6ea193c");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: json
      });

      const result = await response.json();
      if (result.success) {
          console.log(result);
          // Puoi aggiungere qui un messaggio di successo per l'utente
      } else {
          console.error(result);
          // Puoi aggiungere qui un messaggio di errore per l'utente
      }
  } catch (error) {
      console.error('Error:', error);
      // Puoi aggiungere qui un messaggio di errore per l'utente
  }
});