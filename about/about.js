// script.js
const counters = document.querySelectorAll('.counter');

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

function startCounting(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  const plus = counter.getAttribute('data-plus') === 'true';
  let count = 0;
  const speed = 70000; // Duration of the counting animation in milliseconds
  const increment = target / (speed / 1000);

  function updateCounter() {
    count += increment;
    const roundedCount = Math.floor(count);

    // Add the plus sign if necessary
    counter.textContent = plus ? `${roundedCount}+` : roundedCount;

    if (count < target) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = plus ? `${target}+` : target;
    }
  }

  if (!counter.classList.contains('counting')) {
    counter.classList.add('counting');
    requestAnimationFrame(updateCounter);
  }
}

counters.forEach(counter => {
  observer.observe(counter);
});


//story
// const 
const scrollingSection = window.document.querySelector('.story-container')
console.log(scrollingSection)
window.addEventListener('scroll', (e) => {
  transform(scrollingSection)
})

function transform(section) {
  const offSetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.storyScroller')
  let percentage = ((window.scrollY - offSetTop) / window.innerHeight * 100)
  console.log(percentage)
  percentage = percentage < 0 ? 0 : percentage > 320 ? 325 : percentage
  scrollSection.style.transform = `translate3d(${-percentage}vw,0,0)`
}