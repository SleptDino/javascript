// 4.9 exercise 2
const scores = [
    ["Emma", 44],
    ["Wilson", 89],
    ["Danny",56],
    ["Dexter", 20]
];

for (let i=0; i<scores.length; i++) {
    if(scores[i][1] >= 0 && scores[i][1] < 25){
        console.log(scores[i][0] + " has a poor score.");
    }else if(scores[i][1] >= 25 && scores[i][1] < 50){
        console.log(scores[i][0] + " has an nverage score.");        
    }else if(scores[i][1] >= 50 && scores[i][1] < 75){
        console.log(scores[i][0] + " has a good score.");       
    }else if(scores[i][1] >= 75 && scores[i][1] <= 100){
        console.log(scores[i][0] + " has an excellent score.");
    }
}

