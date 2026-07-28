function solution(progresses, speeds) {
    const completedDays = [];
    const answer = [];
    // Store completedDays at array by iterating.
    for(let i = 0; i < progresses.length; i++) {
        completedDays[i] = Math.ceil((100 - progresses[i])/speeds[i]);        
    }
    
    let standard = completedDays[0];
    let count = 1;
    
    for(let i = 1; i < progresses.length; i++) {  
        if (completedDays[i] <= standard) {
            count++;
        } else {
          answer.push(count);
          standard = completedDays[i];
          count = 1;  // reset the count
        }
    }
    answer.push(count);
    return answer;
}