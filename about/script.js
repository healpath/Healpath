function revealElements() {
    const hiddenContent = document.querySelectorAll('.hide-container');
    
    
    hiddenContent.forEach(div => {
      const windowHeight = window.innerHeight;
      const elementTop = div.getBoundingClientRect().top;
      const revealPoint = 20;
  
      if ( elementTop < windowHeight - revealPoint) {
        div.classList.add('reveal');
      } 
      else {
        div.classList.remove('reveal');
      }
     });
  }
  
window.addEventListener('scroll', revealElements);





// Function to add 'show' class when elements come into view
document.addEventListener("DOMContentLoaded", function() {
  const fadeIns = document.querySelectorAll('.hide-container');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('reveal');
              observer.unobserve(entry.target); // Stop observing once the animation is applied
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
  });
});