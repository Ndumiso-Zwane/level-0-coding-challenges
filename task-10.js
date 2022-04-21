function commonLetters(sentence1, sentence2){
    const common = [];
    for (let x = 0; x < sentence1.length; x++){
        if (sentence2.toLowerCase().includes(sentence1[x].toLowerCase())){
            common.push(sentence1[x].toLowerCase());
        }
    }
    return "Common letters: " + common;
}

console.log(commonLetters("houSe", "compUters"));