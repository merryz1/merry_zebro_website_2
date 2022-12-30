function toggleAnimation() {
    const header = document.querySelector("header");
    header.classList.toggle("stop-animation");
  }


  function scrollToElement(elementId) {
    // Get the target element
    const targetElement = document.getElementById(elementId);
  
    // Calculate the distance from the top of the page to the target element
    const elementOffset = targetElement.offsetTop - 80;
  
    // Smoothly scroll to the target element
    window.scroll({
      top: elementOffset,
      left: 0,
      behavior: 'smooth'
    });
  }