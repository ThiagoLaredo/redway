// Get all the <mark> elements in the document
const marks = document.querySelectorAll('mark');

// This is our callback function to add a new class to each mark when it's on the page
const makeVisible = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add('visible');
    }
  });
};
 
// Our intersection observer
let observer = new IntersectionObserver(makeVisible);

// Attach the observer to each mark
marks.forEach(mark => {
  observer.observe(mark);
});