function commonLetters(sentance1, sentance2){
    common = [];
    for (let x = 0; x < sentance1.length; x++){
        if (sentance2.includes(sentance1[x])){
            common.push(sentance1[x]);
        }
    }
    return "Common letters: " + common;
}

console.log(commonLetters("house", "computers"));