let playlist = {
  title: "Chill Vibes",
  tracks: [
    { title: "Song 1", duration: 180 },
    { title: "Song 2", duration: 240, album: { title: 'Name OF...', link: "https://spotify.com/album/nameof" }}
  ]
};

console.log(playlist.tracks[1].title); // "Song 2"
console.log(playlist.tracks[1].album.title); // 'Name OF...'
console.log(playlist.tracks[0].album?.title); // 'Name OF...'
console.log(playlist.tracks[1]['album']?.['link']); // 'Name OF...'

// --- Prototype methods ---
function Track(title, duration) {
  this.title = title;
  this.duration = duration;

  this.play = function () {
    return `Playing ${this.title}`;
  };
}

const track1 = new Track("Song 1", 180);
const track2 = new Track("Song 2", 245);

console.log(track1.title);
console.log(track1.play()); // "Playing Song 1"

Track.prototype.formatDuration = function () {
  const minutes = Math.floor(this.duration / 60);
  const seconds = this.duration % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

console.log(track2.formatDuration()); // "4:05"

// both objects share the same methods via the prototype, not their own copies
// console.log(track1.play === track2.play); // true
// console.log(track1.hasOwnProperty("play")); // false
// console.log(Object.getPrototypeOf(track1) === Track.prototype); // true

console.log(Object.getPrototypeOf(track1)); // Track.prototype (standard way)
console.log(track1);

// --- When [] is the right tool ---

// searching by a field name that's only known at runtime — dot notation can't do this
function findTrackBy(tracks, fieldName, value) {
  return tracks.find((track) => track[fieldName] === value);
}

console.log(findTrackBy(playlist.tracks, "title", "Song 2"));
console.log(findTrackBy(playlist.tracks, "duration", 180));