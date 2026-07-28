function solution(s){
    const stackToCheckPairness = [];

    for (const currentParentheses of s) {
        if (currentParentheses === "(") {
            stackToCheckPairness.push(currentParentheses)
        }
        else {
            if (stackToCheckPairness.length === 0) {
                return false;
            }
            else {
                stackToCheckPairness.pop();   // match found, remove one open paren.
            }
        }
    }
    
    return stackToCheckPairness.length === 0
}