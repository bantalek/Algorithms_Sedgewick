// Egg drop. Suppose that you have an n-story building (with floors 1 through n) and plenty of eggs. 
// An egg breaks if it is dropped from floor T or higher and does not break otherwise. 
// Your goal is to devise a strategy to determine the value of T given the 
// following limitations on the number of eggs and tosses:

// Version 0: 1 egg, ≤T tosses.

class eggDrop0 {
  constructor(n) {
    this.n = n;
  }
  findT () {
    const eggDurability = this.eggDurability(this.n);
    let T = 0;
    while(T <= this.n) {
      if(T >= eggDurability) {
        return T
      }
      T++;
    }
  }
  eggDurability (maxDurability) {
    return Math.floor(Math.random() * maxDurability) + 1;
  }
}

const eggDropV0 = new eggDrop0(50)
console.log(eggDropV1.findT());

// Version 1: ∼1lgn eggs and ∼1lgn tosses.
// Version 2: ∼lgT eggs and ∼2lgT tosses.
// Version 3: 2 eggs and ∼2n‾‾√ tosses.
// Version 4: 2 eggs and ≤cT‾‾√ tosses for some fixed constant c.


