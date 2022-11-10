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

  getLineSyllables(line) {  
    let syllableCount = 0;
    //let lineArr = Array.from(line);
    let lineArr = line.split(" ");
    lineArr.forEach(element => {
      syllableCount += this.getSyllables(element);
    });
    return syllableCount;
  }

  isHaiku() {
    if (this.getLineSyllables(this.line1) === 5 && this.getLineSyllables(this.line2) === 7 && this.getLineSyllables(this.line3) === 5){
      return true;
    }else {
      return false;
    }
  }
}
