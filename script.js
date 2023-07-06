const applyButtons = document.querySelectorAll('.apply-btn');
const courseDetails = document.getElementById('course-details');
const courseName = document.getElementById('course-name');
const courseDuration = document.getElementById('course-duration');

applyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentNode;
    const name = parent.querySelector('h3').textContent;
    const duration = parent.querySelector('p').textContent;
    
    courseName.textContent = name;
    courseDuration.textContent = `Duration: ${duration}`;
    
    courseDetails.classList.remove('hidden');
  });
});
