const playButton = document.querySelector('.controls .play');
const shuffleButton = document.querySelector('.controls .shuffle');
const addButton = document.querySelector('.controls .add-to-playlist');
const tracks = document.querySelectorAll('.track');

function setActiveTrack(track) {
  tracks.forEach((row) => {
    const isTarget = row === track;
    row.classList.toggle('active', isTarget);
    row.querySelector('.track-play').classList.toggle('is-playing', isTarget);
  });
  playButton.classList.add('is-playing');
}

playButton.addEventListener('click', () => {
  const isPlaying = playButton.classList.toggle('is-playing');
  if (!isPlaying) {
    tracks.forEach((row) => row.querySelector('.track-play').classList.remove('is-playing'));
  } else if (!document.querySelector('.track.active')) {
    setActiveTrack(tracks[0]);
  }
});

tracks.forEach((track) => {
  track.addEventListener('click', () => setActiveTrack(track));
});

shuffleButton.addEventListener('click', () => {
  const pressed = shuffleButton.getAttribute('aria-pressed') === 'true';
  shuffleButton.setAttribute('aria-pressed', String(!pressed));
});

addButton.addEventListener('click', () => {
  addButton.classList.toggle('is-added');
});
