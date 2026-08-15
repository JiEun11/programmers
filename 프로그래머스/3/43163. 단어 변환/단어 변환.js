function canTransform(word1, word2) {
    let differenceCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            differenceCount++;
        }
    }
    
    return differenceCount === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const queue = [[begin, 0]];
    const visited = new Set([begin]);
    let head = 0;

    while (head < queue.length) {
        const [currentWord, distance] = queue[head++];

        if (currentWord === target) {
            return distance;
        }

        for (const nextWord of words) {
            // 이미 방문했다면 건너뛰기
            if (visited.has(nextWord)) {
                continue;
            }
            // currentWord와 nextWord가 한 글자만 다른지 확인
            const isDifferenceOneGap = canTransform(currentWord, nextWord);
            if (isDifferenceOneGap) {
                // 방문 처리
                visited.add(nextWord);
                // 다음 거리와 함께 큐에 넣기
                queue.push([nextWord, distance+1]);    
            };
                        
        }
    }

    return 0;
}