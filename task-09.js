function findVowels(sentence){
    const vowels = []; 
    if (sentence.includes("a") || sentence.includes("A")){
        vowels.push("a");
    }
    if (sentence.includes("e") || sentence.includes("E")){
        vowels.push("e");
    }
    if (sentence.includes("i") || sentence.includes("I")){
        vowels.push("i");
    }
    if (sentence.includes("o") || sentence.includes("O")){
        vowels.push("o");
    }
    if (sentence.includes("u") || sentence.includes("U")){
        vowels.push("u");
    }
    console.log("Vowels: " + vowels);
}

findVowels("Umuzi");