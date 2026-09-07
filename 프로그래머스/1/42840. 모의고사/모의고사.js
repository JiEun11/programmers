function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const calcuateScores = (pattern) => {
        let score = 0;
        
        for (let i = 0 ; i < answers.length; i ++ ) {
            if (answers[i] === pattern[i % pattern.length]) {
                score++;
            }
        }
        return score;        
    }
    
    const scores = patterns.map(calcuateScores);
    const maxScore = Math.max(...scores);
    
    const winners = scores
            .map((score, index) => ({number: index+1, score}))
            .filter((entrant) => (entrant.score === maxScore))
            .map((entrant) => (entrant.number));
        
    
    return winners;
}