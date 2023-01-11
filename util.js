const contactLinks = document.querySelectorAll('.contact-link');
const floatingMessage = document.querySelector('#floating-message');

function copyToClipboard(text) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

function showFloatingMessage(message) {
  floatingMessage.innerText = message;
  floatingMessage.classList.add('show');
  setTimeout(() => {
    floatingMessage.classList.remove('show');
  }, 1000);
}

contactLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const text = event.target.innerText;
    copyToClipboard(text);
    showFloatingMessage('Copied to clipboard');
  });
});

// Get all of the navigation bar links
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the ID of the section that the link points to
    const sectionId = event.target.getAttribute('href');

    // Get the top position of the section
    const sectionTop = document.querySelector(sectionId).offsetTop;

    // Scroll to the section, adding or subtracting pixels or a percentage as needed
    window.scrollTo({
      top: sectionTop - 70, // Subtract 20 pixels
      behavior: 'smooth'
    });
  });
});
