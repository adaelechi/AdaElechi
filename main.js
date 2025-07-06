// function setupStickyNav() {
//     const navbar = document.querySelector('.navbar');
//     const stickyOffset = navbar.offsetTop;
//     const menuItem = document.querySelectorAll('navbar__item');
  
//     function toggleStickyNav() {
//       if (window.scrollY >= stickyOffset) {
//         navbar.classList.add('sticky');
//         menuItem.classList.add('stickycolor');
//         // menuItem.classList.add('sticky-color');
//       } else {
//         navbar.classList.remove('sticky');
//         menuItem.classList.remove('sticky-color');
//       }
//     }
  
//     window.addEventListener('scroll', toggleStickyNav);
//     // console.log('sticky nav is set up!');
// }

// document.addEventListener('DOMContentLoaded', setupStickyNav);

function setupTypingEffect() {
  const textElement = document.querySelector('.hero-text');
  const textElementAfter = document.querySelector('.hero-text::after');
  const blinkCursor = document.querySelector('.blink');
  const words = ["Front-End Developer", "Web Developer", "Freelancer", "UI/UX Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove a character
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add a character
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine typing speed
    let typeSpeed = 200;
    if (isDeleting) typeSpeed /= 2; // Faster when deleting

    // Switch to next word or toggle delete
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
    }

    setTimeout(type, typeSpeed);
  }

  // Start the typing effect
  type();
}

document.addEventListener('DOMContentLoaded', setupTypingEffect);


const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.navbar_menu');



hamburger.addEventListener('click', function() {
  if (sideBar.classList.contains('close-sidebar')) {
      // Open the sidebar
      // sideBar.classList.remove('close-sidebar');
      sideBar.classList.add('open-sidebar');
      
      // Change to X icon
      hamburger.classList.remove('bar');
      hamburger.classList.add('close');
  } else {
      // Close the sidebar
      sideBar.classList.remove('open-sidebar');
      // sideBar.classList.add('close-sidebar');

      
      // Change to hamburger icon
      hamburger.classList.remove('close');
      hamburger.classList.add('bar');
  }
});

function exitHover() {
  const projectCardsImg = document.querySelectorAll('.sect3_cards-content');
  const projectCardsImgHover = document.querySelectorAll('.sect3_cards-content:hover');

  projectCardsImgHover.forEach(element => {
    element.addEventListener('mouseout', function() {
      element.style.transform = 'scale(1)';
      element.style.transition = 'all ease 1s';
    });
  });
}

exitHover();