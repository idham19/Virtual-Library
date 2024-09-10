// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, average) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.average = average;
    // if (1 <= rating <= 5) {
    //   this.rating = rating;
    // } else {
    //   throw new Error("Rating must be between 1 and 5.");
    // }
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
  static longestMovie(movie) {
      longestMovieDuration = movie[0]; 
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].duration > longestMovieDuration.duration) {
        longestMovieDuration=movie[i];
      }
    }
    return longestMovieDuration;
  }
}
// don't change below
module.exports = Movie;
