function solution(nums) {
    
    const distinctCount = new Set(nums).size;
    const selectableCount = nums.length/2;
    
    return Math.min(distinctCount, selectableCount);
}