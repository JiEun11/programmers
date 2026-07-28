function solution(progresses, speeds) {
    const completedDays = [];
    const answer = [];
    // Store completedDays at array by iterating.
    for(let i = 0; i < progresses.length; i++) {
        completedDays[i] = Math.ceil((100 - progresses[i])/speeds[i]);        
    }
    
    let standardDay = completedDays[0];
    let deployCount = 1;
    
    for(let i = 1; i < progresses.length; i++) {  
        if (completedDays[i] <= standardDay) {
            deployCount++;
        } else {
          answer.push(deployCount);
          standardDay = completedDays[i];
          deployCount = 1;  // reset the count
        }
    }
    answer.push(deployCount);
    return answer;
}