// Fills the top progress rail as the visitor scrolls down the page —
// a small nod to "testing the limit and keep moving forward".
const fill = document.getElementById('scrollFill');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (fill) fill.style.width = percent + '%';
}

window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
updateProgress();