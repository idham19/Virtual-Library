const Music = require("./Music")

class Podcast extends Music{

    constructor(title, genre, year, artist, length,host,episodeName,episodeNumber){
      super(title, genre, year, artist, length)
      this.host=host;
      this.episodeName=episodeName;
      this.episodeNumber=episodeNumber;
      this.guests=[]
    }
    static listen(){
        return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.host} and featuring guests ${this.guests}. Length: ${this.length} seconds`
    }
}