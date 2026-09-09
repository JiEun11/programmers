function solution(board, moves) {
    const stack = [];
    let removedCount = 0;
    
    const pickFromColumn = (columnIndex) => {
        for (let row = 0; row < board.length; row++) {
            if (board[row][columnIndex] !== 0) {
                const value = board[row][columnIndex];
                board[row][columnIndex] = 0;
                return value;
            }
        }
        return null;
    };
    
    for (let i = 0; i < moves.length; i++) {
        const columnIndex = moves[i] -1;
        const picked = pickFromColumn(columnIndex);
        
        if (picked === null) {
            continue; // 뽑을게 없으면 이번 move는 스킵
        }
        // 아직 비교/터뜨리기 로직 필요
        if (stack[stack.length-1]===picked) {
            stack.pop();
            removedCount = removedCount+2;
        } else {
            stack.push(picked);
        }
    }
    return removedCount;
}