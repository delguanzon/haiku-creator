export default class Haiku {
  
  constructor(entry) {
    this.entry = entry;
    this.line1 = entry.split('\n')[0];
    this.line2 = entry.split('\n')[1];
    this.line3 = entry.split('\n')[2];
  }
}