// Simple challenge to reverse a sentence without changing words using one loop without any native methods.

const reverseSentenceFromScratch = (msg) => {
    const x = msg || 'Writing JavaScript From Scratch';
    let result = word = '';
    let i = 0
    while (true) {
        if (x[i] === ' ' || !x[i]) {
             result = word +' '+ result;
             word = '';
            if (!x[i]) return result;
        } else
             word += x[i];
        i++;
    }

}
console.log(reverseSentenceFromScratch());