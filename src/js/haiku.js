export default class Haiku {
  
  constructor(entry) {
    this.entry = entry;
    this.line1 = entry.split('\n')[0];
    this.line2 = entry.split('\n')[1];
    this.line3 = entry.split('\n')[2];
  }

  getSyllables(word) {
    if(word.length <=3) {
      return 1;
    }
    else {
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      return word.match(/[aeiouy]{1,2}/g).length;
    }
  }

  getLineSyllables()
  // isHaiku() {
  //   if (this.getSyllables(this.line1) === 5 && this.getSyllables(this.line2) === 7 && this.getSyllables(this.line3) === 5){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }
}
