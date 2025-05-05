const textboxes = document.getElementById('all-dialogue').children;
console.log(textboxes);
const textboxesArray = Array.from(textboxes);

let currentIndex = 0;

textboxesArray.forEach(textbox => textbox.classList.add('inactive'));


// Show the first div initially
textboxesArray[currentIndex].classList.add('active');

function dialogueNext() {
  // Hide current div
  textboxesArray[currentIndex].classList.remove('active');
  textboxesArray[currentIndex].classList.add('inactive');

  /*
  // show next textbox, loop for test purposes
  currentIndex = (currentIndex + 1) % textboxesArray.length;
  */
  
  //ACTUALY CODE TO IMPLEMENT WHEN IM DONE TESTING
  // show next textbox, don't loop.
  if (currentIndex < textboxesArray.length - 1) {
    currentIndex++;
  }

  // Show next div
  textboxesArray[currentIndex].classList.add('active');
  textboxesArray[currentIndex].classList.remove('inactive');
}

/*
// Button click
document.querySelector('button').addEventListener('click', dialogueNext);
*/

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        console.log('enter key pressed');
        dialogueNext();
      }
    });
    document.addEventListener('click', function(event) {
        console.log('Mouse clicked at:', event.clientX, event.clientY);
        dialogueNext();
      });
  });
  
//BACKGROUND SWAP
const pageBackground = document.getElementById('page-flex');
pageBackground.style.backgroundImage = 'url("../../visuals/yachting.gif")';

setTimeout(() => {
  pageBackground.style.backgroundImage = 'url("../../visuals/yachting-still.png")';
    // enable page to be a clickable link after background swap
    pageBackground.style.cursor = 'pointer'; 
    //allow next chapter on click after timeout
    pageBackground.addEventListener('click', () => {
      window.location.href = '../tbc.html'; 
    });
  }, 19000); //in milliseconds