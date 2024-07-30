/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Best playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  // trackCount: 3,
  changeName(newName) {
    // всередині метода об`єкта НІКОЛИ не використ ім`я самого об`єкта!!!
    // console.log('this всередині playlist', this);
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
    // this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist);

playlist.changeName('Playlist `24');
console.log(playlist);

playlist.addTrack('Joji Run');
console.log(playlist);

playlist.updateRating(10);
console.log(playlist.rating);

console.log(playlist.getTrackCount());

playlist.addTrack('Joji Run-2');
playlist.addTrack('Joji Run-3');
console.log(playlist.getTrackCount());
