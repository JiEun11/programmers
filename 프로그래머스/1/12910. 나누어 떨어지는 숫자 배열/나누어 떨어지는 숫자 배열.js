function solution(arr, divisor) {
    const filteredArr = arr.filter((number) => {
       if (number % divisor === 0) {
           return true;
       } 
    })
    
    if (filteredArr.length === 0) {
        return [-1];
    }
    
    return filteredArr.sort((a, b) => a - b);
}