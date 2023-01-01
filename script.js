const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 10,
      behavior: 'smooth'
    });
  });
});



