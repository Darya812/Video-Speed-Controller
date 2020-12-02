const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".video");

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height; 
  bar.textContent = playbackRate.toFixed(2) + "×"; //0.00
  video.playbackRate = playbackRate; //speed 1.0
}

speed.addEventListener("mousemove", handleMove); //click  mousedown
