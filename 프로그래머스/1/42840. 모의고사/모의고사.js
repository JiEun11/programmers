function solution(answers) {
    // 1. 패턴 검색
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let correctCount1 = 0;
    let correctCount2 = 0;
    let correctCount3 = 0;
    
    // 2. 각 수포자별 맞힌 개수 세기
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        
        const answerFor1 = pattern1[i % pattern1.length];
        const answerFor2 = pattern2[i % pattern2.length];
        const answerFor3 = pattern3[i % pattern3.length];
        
        if (answer === answerFor1) {
            correctCount1++;
        }
        if (answer === answerFor2) {
            correctCount2++;
        }
        if (answer === answerFor3) {
            correctCount3++;
        }
        
    }
     
    // 3. 최댓값 구하기
   const maxCount = Math.max(correctCount1, correctCount2, correctCount3);

    const answer = [];
    if (correctCount1 === maxCount) answer.push(1);
    if (correctCount2 === maxCount) answer.push(2);
    if (correctCount3 === maxCount) answer.push(3);
    return answer;
}