let video = document.getElementById("video");

function retrosceder() {
  video.currentTime -= 10;
}
function avancar() {
  video.currentTime += 10;
}
function diminuir() {
  video.playbackRate -= 0.1;
}
function aumentar() {
  video.playbackRate += 0.1;
}
function play() {
  video.play();
}
function stop() {
  video.pause();
  video.currentTime = 0;
}
