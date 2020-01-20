let throwCount = 0;
FrameScores = [];

// const frame = ((first=0, second = 0) => {
//     const obj = {};
//     this.firstRoll = first;
//     this.secondRoll = second;
//     this.frameScore = this.firstRoll+this.secondRoll;
// });

Frames = [];

const bowlingGameScore = ((scores) => {
    let frameLength;
    if(scores.length == 21){
        frameLength = scores.length-2;
    }
    else if(scores.length == 20){
        frameLength = scores.length-1;
    }
    else{
        frameLength = scores.length;
    }
    for(let i=0;i<frameLength; i++){
        if(scores[i] == 10){
            Frames.push(scores[i]+ scores[i+1]+ scores[i+2]);
        }
        else if(scores[i]+scores[i+1] == 10){
            Frames.push(scores[i]+scores[i+1]+scores[i+2]);
            i = i+1;
        }
        else{
            Frames.push(scores[i]+scores[i+1]);
            i = i+1;
        }
    }
    // scores.forEach((throwScore) => {
    //     roll(throwScore);
    // });
    const result = score(Frames);
    return result;
});

// let spareFlag = 0;

// const roll = ((throwScore) => {
//     throwCount++;
//     if(throwCount%2 != 0 && throwScore == 10){
//         throwCount=0;
//         strike();
//     }
//     else if(throwCount%2 == 0 && throwScore == 10){
//         if(spareFlag == 0){
//             spare();
//             spareFlag = 1;
//         }
//         else{
//             spareFlag = 0;
//         }
//     }
//     else{
//         if(spareFlag == 0){
//             addScore();
//             spareFlag = 1;
//         }
//         else{
//             spareFlag = 0;
//         }
//     }
// });
// const strike = (() => {
//     totalScore = totalScore + Frames[throwCount];
// });

// const  spare = (() => {
//     totalScore = totalScore + Frames[throwCount/2];
// });
// const addScore = (() => {
//     totalScore = totalScore + Frames[throwCount/2]
// });

const score = ((Frames) => {
    let totalScore = 0;
    for(let i=0;i<Frames.length;i++){
        totalScore = totalScore+Frames[i];
    }
    return totalScore;
});

module.exports = bowlingGameScore;
module.exports = score;
console.log(bowlingGameScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
