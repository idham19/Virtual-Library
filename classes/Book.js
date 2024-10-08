// import the Media class:
const Media = require("./Media")
// create your Book class:
class Book extends Media{
constructor(title,year,genre,author,numPages,rating){
  super(title,year,genre)
  this.author=author;
  this.numPages=numPages;
  this.rating=rating;
}

summary(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
}
 static highestRating(book){
  let bookHighRate=book[0]
  for(let i=0;i<book.length;i++){
   if(book[i].rating> bookHighRate.rating){
    bookHighRate=book[i];
   }
  }
  return bookHighRate;
 }

 static calculateAverageRating(book){
    let ratingOfAllBook=0;
    for(let i=0;i< book.length;i++){
      ratingOfAllBook+=book[i].rating;
    }
    let avg = ratingOfAllBook/book.length;
    return avg;
 }
}
// don't change below
module.exports = Book;
