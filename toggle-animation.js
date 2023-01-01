function toggleAnimation() {
    const h1 = document.querySelector("section#home h1");
    h1.classList.toggle("stop-animation");  
    const comp = document.querySelector(".computer" )
    comp.classList.toggle("stop-animation");  


  }




  function scrollToElement(elementId) {
    // Get the target element
    const targetElement = document.getElementById(elementId);
  
    // Calculate the distance from the top of the page to the target element
    const elementOffset = targetElement.offsetTop -80;
  
    // Smoothly scroll to the target element
    window.scroll({
      top: elementOffset,
      left: 0,
      behavior: 'smooth'
    });
  }

  


function scrollToAbout() {
  
  // Get the next section
  var nextSection = document.querySelector('#about');

  // Get the top position of the next section
  var nextSectionTop = nextSection.offsetTop;

  // Scroll to the top of the next section
  window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
}

function scrollToSkills() {
  
  // Get the next section
  var nextSection = document.querySelector('#skills');

  // Get the top position of the next section
  var nextSectionTop = nextSection.offsetTop;

  // Scroll to the top of the next section
  window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
}

function scrollToExperience() {
  
  // Get the next section
  var nextSection = document.querySelector('#experience');

  // Get the top position of the next section
  var nextSectionTop = nextSection.offsetTop - 50;

  // Scroll to the top of the next section
  window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
}



function scrollToProjects() { // Get the next section
  var nextSection = document.querySelector('#projects');

  // Get the top position of the next section
  var nextSectionTop = nextSection.offsetTop;

  // Scroll to the top of the next section
  window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
}

function scrollToContact(){
   // Get the next section
   var nextSection = document.querySelector('#contact');

   // Get the top position of the next section
   var nextSectionTop = nextSection.offsetTop;
 
   // Scroll to the top of the next section
   window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
 }


