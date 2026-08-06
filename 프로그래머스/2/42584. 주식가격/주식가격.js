function solution(prices) {
    const indexArray = [];
    const answer = [];
    let difference = 0;
    for (let i = 0; i < prices.length; i++) {
        
        while (prices[indexArray[indexArray.length-1]] > prices[i]) {
            const popedIndex = indexArray.pop();
            answer[popedIndex] = i - popedIndex;
        }        
        indexArray.push(i);
    }
    while (indexArray.length !==0) {
        const remainingIndex = indexArray.pop();
        answer[remainingIndex] = (prices.length -1) - remainingIndex;
    }
    
    return answer;
    
//     Brute force algorithm
//     let answer = [];
    
//     for (let i = 0 ; i < prices.length ; i++) {
//         let count = 0;
        
//         for (let j = i+1 ; j < prices.length; j++ ) {
//             count++;
            
//             if (prices[i] > prices[j]) {
//                 break;
//             }
//         }
//         answer.push(count);
//     }
    
//     return answer;
}