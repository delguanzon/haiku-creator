export default class Haiku {
  
  constructor(entry) {
    this.entry = entry;
    this.line1 = entry.split('\n')[0];
    this.line2 = entry.split('\n')[1];
    this.line3 = entry.split('\n')[2];
  }

  getSyllables(line) {
    let regex = new RegExp(/[aeiouy]/gi);
    let regex2 = new RegExp(/[aeiouy]{2}/gi);
    //regex = regex - regex2;
    const count = line.match(regex).length - line.match(regex2);
  
    return count;
  }

  isHaiku() {
    if (this.getSyllables(this.line1) === 5 && this.getSyllables(this.line2) === 7 && this.getSyllables(this.line3) === 5){
      return true;
    }else {
      return false;
    }
  }
}
