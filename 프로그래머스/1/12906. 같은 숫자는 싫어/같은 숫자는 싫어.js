function solution(arr)
{
    let answer = [];
    
    // Iterate arr and push whether the element is not consecutive
    for(const number of arr) {
        if (answer[answer.length-1] !== number) {
            answer.push(number);
        }
    }
    
    return answer;
}