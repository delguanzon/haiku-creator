import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku("I write, erase, rewrite\nErase again, and then\n A poppy blooms");
  });

  test('should create correctly a haiku object',() => {
    expect(haiku.entry).toEqual("I write, erase, rewrite\nErase again, and then\n A poppy blooms");
  }); 
});