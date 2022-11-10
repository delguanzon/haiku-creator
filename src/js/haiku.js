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

  generateNew() {
    let word= randomWord(1);
    let newLine1 = word.toString();
    let newEntry = "";
    console.log("New Line 1: " + newLine1);
    
    
    for(let i=0; i <= 5; i++) {      
      if(this.getLineSyllables(newLine1) <= 3){
        let newLine2 = newLine1.concat(" ",randomWord(1).toString());
        console.log("New Line 2: " + newLine2);
        newLine1 = newLine2;
      }
      else if(this.getLineSyllables(newLine1) === 4){
        let rand = "testing";
        console.log(" 4syllables: " + newLine1);
        do {
          rand = randomWord(1);
          console.log(rand);
        } while(this.getSyllables(rand.toString()) != 1);

        let newLine2 = newLine1.concat(" ", rand);
        newLine1 = newLine2;
        console.log("New Line 4: " + newLine2);
      }
      else{
        break;
      }
    }
    newEntry = newLine1;
    newLine1 = "";

    for(let i=0; i <= 7; i++) {      
      if(this.getLineSyllables(newLine1) <= 5){
        let newLine2 = newLine1.concat(" ",randomWord(1).toString());
        console.log("New Line 2: " + newLine2);
        newLine1 = newLine2;
      }
      else if(this.getLineSyllables(newLine1) === 6){
        let rand = "testing";
        console.log(" 4syllables: " + newLine1);
        do {
          rand = randomWord(1);
          console.log(rand);
        } while(this.getSyllables(rand.toString()) != 1);

        let newLine2 = newLine1.concat(" ", rand);
        newLine1 = newLine2;
        console.log("New Line 4: " + newLine2);
      }
      
      else{
        break;
      }
    }
    newEntry = newEntry + "\n" + newLine1;
    newLine1 = "";

    for(let i=0; i <= 5; i++) {      
      if(this.getLineSyllables(newLine1) <= 3){
        let newLine2 = newLine1.concat(" ",randomWord(1).toString());
        console.log("New Line 2: " + newLine2);
        newLine1 = newLine2;
      }
      else if(this.getLineSyllables(newLine1) === 4){
        let rand = "testing";
        console.log(" 4syllables: " + newLine1);
        do {
          rand = randomWord(1);
          console.log(rand);
        } while(this.getSyllables(rand.toString()) != 1);

        let newLine2 = newLine1.concat(" ", rand);
        newLine1 = newLine2;
        console.log("New Line 4: " + newLine2);
      }
      else{
        break;
      }
    }
    newEntry = newEntry + "\n" + newLine1;
    console.log("This is the new Entry: \n" + newEntry);
    //console.log("randomWords join: ", randomWords.join(""));
    return newLine1;
  }
}
