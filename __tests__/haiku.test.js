import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  });

  test('should create correctly a haiku object',() => {
    expect(haiku.entry).toEqual("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  }); 

  test('should separate our haiku object into three lines', () => {
    expect(haiku.line1).toEqual("I run, fall, rerun");
    expect(haiku.line2).toEqual("Fall, get back up, and then I");
    expect(haiku.line3).toEqual("drink from water cup");
  });

  test('should return the number of vowels in a line', () => {
    expect(haiku.getSyllables(haiku.line1)).toEqual(5);
    expect(haiku.getSyllables(haiku.line2)).toEqual(7);
    expect(haiku.getSyllables(haiku.line3)).toEqual(5);
  });

  test("should return if it's a haiku or not", () => {
    expect(haiku.isHaiku()).toEqual(true);
    let haiku2 = new Haiku("I run, rerun\nFall, get back up, and then I\ndrink from water cup");
    expect(haiku2.isHaiku()).toEqual(false);
  });

});