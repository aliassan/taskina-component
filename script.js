const scrollable = document.querySelector('.component-body');

let isDown = false;
let startY;
let scrollTop;

scrollable.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollable.classList.add('active');
  startY = e.pageY - scrollable.offsetTop;
  scrollTop = scrollable.scrollTop;
  scrollable.style.cursor = 'grabbing';
});

scrollable.addEventListener('mouseleave', () => {
  isDown = false;
  scrollable.classList.remove('active');
  scrollable.style.cursor = 'grab';
});

scrollable.addEventListener('mouseup', () => {
  isDown = false;
  scrollable.classList.remove('active');
  scrollable.style.cursor = 'grab';
});

scrollable.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const y = e.pageY - scrollable.offsetTop;
  const walk = (y - startY) * 2; // Adjust scroll speed
  scrollable.scrollTop = scrollTop - walk;
});

