function playVideo(src) {
  const player = document.getElementById('videoPlayer');
  const source = player.querySelector('source');

  source.src = src;
  player.load();
  player.style.display = 'block';
  player.play();

  player.onended = () => {
    player.style.display = 'none';
  };
}
