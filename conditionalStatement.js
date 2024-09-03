function grade(score) {
    if(score < 0 || score > 100){
       return "Invalid";
    }else if(score < 50){
        return "Fail";
    }else if(score >= 50){
        return "Pass";
    }
}

// Do not write a body part of the program.

// Test
grade(101);

// EX. 4.7
function checkDNA(dna){
    if(dna > 0 && dna < 100){
        return "Human";
    }else if(dna >= 100 && dna <= 1000){
        return "Animal"
    }else if(dna >= 5000 && dna <= 9000){
        return "Plant";
    }else{
        return "Unknown";
    }
}


const scores = [74, 85, 42, 69, 35];

for (let i=0; i<scores.length; i++) {
    if (scores[i] >= 50) {
        console.log("Student number", i+1, "passed.");
    } else {
        console.log("Student number", i+1, "failed.");
    }
}