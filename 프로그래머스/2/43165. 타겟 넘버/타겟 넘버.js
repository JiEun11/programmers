function solution(numbers, target) {
    let count = 0;
    
    function bruteForce(currentIndex, currentSum) {
        // 종료 조건 : 모든 숫자 다 처리했으면
        if (currentIndex === numbers.length) {
            if (currentSum === target) count++;
            return;
        }
        
        bruteForce(currentIndex + 1, currentSum + numbers[currentIndex]);
        bruteForce(currentIndex + 1, currentSum - numbers[currentIndex]);
    }
    
    // 재귀 시작 
    bruteForce(0, 0);
    
    return count;
}