function isOneStepAway(wordA, wordB) {
    let diffrentCount = 0;
    
    for (let i = 0 ; i < wordA.length; i++) {
        if (wordA[i] !== wordB[i]) {
            diffrentCount++;
        }
    }
    return diffrentCount === 1;
}

function solution(begin, target, words) {
    const queue = [[begin, 0]];
    
    while (queue.length !==0 ) {
        const [currentWord, distance] = queue.shift();
        
        if (currentWord === target) {
            return distance;
        }
        
        for (const word of [...words]) {
            if (isOneStepAway(currentWord, word)) {
                // words에서 제거 + 큐에 push
                const index = words.indexOf(word);
                words.splice(index, 1);
                
                queue.push([word, distance+1]);
            }
        }
    }
    
    return 0; 
}