import Haiku from './../src/js/haiku.js';
var randomWords = require('random-words');

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku();
    haiku.setEntry('I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup');
  });

  test('should set the entry property for the haiku object', () => {
    expect(haiku.entry).toEqual("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  });

  test('should separate our haiku.entry into three lines', () => {
    expect(haiku.line1).toEqual("I run, fall, rerun");
    expect(haiku.line2).toEqual("Fall, get back up, and then I");
    expect(haiku.line3).toEqual("drink from water cup");
  });

  test('should return 1 syllable if the word is 3 letters or less', () => {
    expect(haiku.getSyllables('yes')).toEqual(1);
  });

  test('should return the number of syllables for a word with 4 letters or more', () => {
    expect(haiku.getSyllables('body')).toEqual(2);
  });

  test('should return the number of syllables, counting sequential vowels as a syllable', () => {
    expect(haiku.getSyllables('meat')).toEqual(1);
  });

  test('should remove es and ed from the end of a word and return the number of syllables', () => {
    expect(haiku.getSyllables("wanted")).toEqual(1);
  });

  test('should remove a y from the end of a word and return the number of syllables', () => {
    expect(haiku.getSyllables("yeet")).toEqual(1);
  });
  
  test('should return all syllables counted in a line', () => {
    expect(haiku.getLineSyllables("I run, fall, rerun")).toEqual(5);
  });

  test("should return true if it's a haiku", () => {
    expect(haiku.isHaiku()).toEqual(true);
  });

  test("should return false if it's not a haiku", () => {
    let haiku2 = new Haiku();
    haiku2.setEntry('I run, fall, run\nFall, get back up, and then I\ndrink from water cup');
    expect(haiku2.isHaiku()).toEqual(false);
  });

  // test('should return 1 for generating a random word', () => {
  //   let haiku = new Haiku();
  //   expect(haiku.generateNew()).toEqual(1);
  // });  
  
  test('should return a string of 3 random words', () => {
    let haiku = new Haiku();
    expect(haiku.generateNew()).toEqual(3);
  }); 
});