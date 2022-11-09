import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku("I write, erase, rewrite\nErase again, and then\nA poppy blooms");
  });

  test('should create correctly a haiku object',() => {
    expect(haiku.entry).toEqual("I write, erase, rewrite\nErase again, and then\nA poppy blooms");
  }); 

  test('should separate our haiku object into three lines', () => {
    expect(haiku.line1).toEqual("I write, erase, rewrite");
    expect(haiku.line2).toEqual("Erase again, and then");
    expect(haiku.line3).toEqual("A poppy blooms");
  });

  test('should return the number of syllables in a line', () => {
    expect(haiku.getSyllables(this.line1)).toEqual(5);
    expect(haiku.getSyllables(this.line2)).toEqual(7);
    expect(haiku.getSyllables(this.line3)).toEqual(5);
  });

});