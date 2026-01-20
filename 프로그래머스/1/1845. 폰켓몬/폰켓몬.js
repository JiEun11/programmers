function solution(nums) {
    // 1. 종류의 개수 구하기
    const countTypes = new Set(nums);
    const numberOfTypes = countTypes.size;
    
    // 2. 선택 가능한 수 (N/2)
    const length = nums.length;
    const availableSelectNum = length/2;
    
    // 3. 둘 중 작은값 반환 
    const answer = Math.min(numberOfTypes, availableSelectNum);
    return answer;
}