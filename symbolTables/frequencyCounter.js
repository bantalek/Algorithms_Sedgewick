const ST = require('./simpleST').ST;

class FrequencyCounter {
  constructor(str, minLength) {
    this.str = str;
    this.min = minLength;
    this.st = new ST();
    this.max = '';
    this.st.put(this.max, 0);
    this.word();
  }
  word(string=this.str) {
    string.split(" ").forEach((word) => {
      if (word.length >= this.min) {
        if (!this.st.contains(word)) this.st.put(word, 1);
        else this.st.put(word, this.st.get(word) + 1);
      }
      if (this.st.get(word) > this.max) this.max = word;
    });
  }
  maximumFrequency() {
    console.log(this.max + ' ' + this.st.get(this.max));
  }
}

const test = new FrequencyCounter('Food you can feel good about good feel can you Food', 3);
test.maximumFrequency()