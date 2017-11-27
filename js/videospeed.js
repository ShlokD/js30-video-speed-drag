const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let isDown = false;

const max = 4;
const min = 0.5;

const handleMouseMove = ev => {
  if(!isDown) return;

  console.log(ev);
  const y = ev.pageY - ev.target.offsetTop;
  const percentY = y / ev.target.offsetHeight;
  const height = `${Math.round(percentY * 100)}%`;
  speedBar.style.height = height;
  const playbackRate = percentY * (max - min) + min;
  speedBar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
};

speed.addEventListener('mousemove', handleMouseMove);
speed.addEventListener('mousedown', () => {
  isDown = true;
});
speed.addEventListener('mouseleave', () => {
  isDown = false;
});
speed.addEventListener('mouseup', () => {
  isDown = false;
});