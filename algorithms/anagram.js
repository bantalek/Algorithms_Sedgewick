//Given 
//- A dictionary file
//- An input word

//Find all words in the dictionary that are anagrams of the input word.

//Ex:
//Dictionary:
//- CAT
//- FACT
//- TAC
//- ACT
//- AT

//Word:
//- ACT

//Output:
//- ACT
//- CAT
//Given 
//- A dictionary file
//- An input word

const anagram = (alist, target) => {
    // construct a dictionary to measure the content and frequency of target characters
    const targetSize = target.length
    const targetDict = stringToDictionary(target, targetSize);
    const result = [];

    for (let i = 0; i < alist.length; i++) {
        const compareWord = alist[i];
        const compareSize = compareWord.length

        // same size candidates should be further evaluated
        // construct a dictionary to run comparison
        if (targetSize === compareSize) {
            const compareDict = stringToDictionary(compareWord, compareSize);

            // content and frequency equivalency indicates an anagram
            if (compareHelper(targetDict, compareDict, targetSize))
                result.push(compareWord);
        }
    }

    return result;
}

const compareHelper = (targetDict, compareDict, requiredMatches) => {
    // by stripping all values that are equal across the two objects
    // we can determine they are deeply equal if 0 keys remain
    return Object.keys(compareDict).filter((char) => {
        return compareDict[char] !== targetDict[char]
    }).length === 0
}

const stringToDictionary = (str, size) => {
    const dict = {};
    for (let i = 0; i < size; i++) {
        if (!dict[str[i]])
            dict[str[i]] = 1;
        else dict[str[i]]++;
    }
    return dict
}



console.log(anagram(['cat', 'act', 'fact', 'tac', 'at'], 'act'));
