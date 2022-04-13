function findVowels(sentance){
    vowels = []; 
    if (sentance.includes("a") || sentance.includes("A")){
        vowels.push("a");
    }
    if (sentance.includes("e") || sentance.includes("E")){
        vowels.push("e");
    }
    if (sentance.includes("i") || sentance.includes("I")){
        vowels.push("i");
    }
    if (sentance.includes("o") || sentance.includes("O")){
        vowels.push("o");
    }
    if (sentance.includes("u") || sentance.includes("U")){
        vowels.push("u");
    }
    return "Vowels: " + vowels;
}

console.log(findVowels("Umuzi"));