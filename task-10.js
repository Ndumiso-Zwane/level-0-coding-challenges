function commonLetters(sentence1, sentence2){
    const common = [];
    for (let x = 0; x < sentence1.length; x++){
        if (sentence2.toLowerCase().includes(sentence1[x])){
            common.push(sentence1[x]);
        }
    }
    return "Common letters: " + common;
}

console.log(commonLetters("house", "compUters"));