document.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const isPlaying = document.querySelector(
    `.is-playing[data-key="${e.keyCode}"]`
  );

  if (!audio) return;
  isPlaying.style.visibility = "visible";

  setTimeout(() => {
    isPlaying.style.visibility = "hidden";
  }, 100);

  audio.currentTime = 0;
  audio.play();
});
