// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    if (rating>=1 && rating <= 5) {
      this.rating = rating;
    } else {
      throw new Error("Rating must be between 1 and 5.");
    }
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    //Title: <TITTLE>, Director: <DIRECTOR>, Year: <YEAR>, Genre: <GENRE>, Duration: <DURATION>, Rating: <RATING>
  }
  static longestMovie(movie) {
      let longestMovieDuration = movie[0]; 
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].duration > longestMovieDuration.duration) {
        longestMovieDuration=movie[i];
      }
    }
    return longestMovieDuration;
  }

  static calculateAverageRating(movie){
    let ratingOfAllBook=0;
    for(let i=0;i< movie.length;i++){
      ratingOfAllBook+=movie[i].rating;
    }
    let avg = ratingOfAllBook/movie.length;
    return avg;
 }
}
// don't change below
module.exports = Movie;
