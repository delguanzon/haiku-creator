var randomWord = require('random-words');
export default class Haiku {
  

  constructor() {
    this.entry = [];    
  }

  setEntry(entry) {
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

  generateLine(numSyll) {
    
    let newLine = randomWord(1).toString();
    console.log("New Line 1: " + newLine);    
    if(numSyll === 5) {
      for(let i=0; i <= 5; i++) {      
        if(this.getLineSyllables(newLine) <= 3){
          let container = newLine.concat(" ",randomWord(1).toString());
          console.log("New Line 2: " + container);
          newLine = container;
        }
        else if(this.getLineSyllables(newLine) === 4){
          let rand = "testing";
          console.log(" 4syllables: " + newLine);
          do {
            rand = randomWord(1);
            console.log(rand);
          } while(this.getSyllables(rand.toString()) != 1);

          let container = newLine.concat(" ", rand);
          newLine = container;
          console.log("New Line 4: " + container);
        }
        else{
          break;
        }
      }
      return(newLine);
    }
    else if(numSyll===7) {
      for(let i=0; i <= 7; i++) {      
        if(this.getLineSyllables(newLine) <= 5){
          let container = newLine.concat(" ",randomWord(1).toString());
          console.log("New Line 2: " + container);
          newLine = container;
        }
        else if(this.getLineSyllables(newLine) === 6){
          let rand = "testing";
          console.log(" 4syllables: " + newLine);
          do {
            rand = randomWord(1);
            console.log(rand);
          } while(this.getSyllables(rand.toString()) != 1);
  
          let container = newLine.concat(" ", rand);
          newLine = container;
          console.log("New Line 4: " + container);
        }        
        else{
          break;
        }
      }
      return(newLine);
    }
  }

  generateNew() {
    let newEntry = "";
    newEntry = this.generateLine(5);
    newEntry = newEntry + "\n" + this.generateLine(7);
    newEntry = newEntry + "\n" + this.generateLine(5);
    this.setEntry(newEntry);
    return newEntry;
  }
}
