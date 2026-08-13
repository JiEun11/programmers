function solution(maps) {
    const queue = [[0, 0, 1]];
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    
    while (queue.length !== 0) {
        const [row, col, distance] = queue.shift();
        
        if (row === n-1 && col === m-1) {
            return distance;
        }
        
        for (const [rowData, colData] of directions) {
            const nextRow = row + rowData;
            const nextCol = col + colData;
            
            if (nextRow >= 0 && nextRow < n &&
               nextCol >= 0 && nextCol < m &&
               maps[nextRow][nextCol] ===1) {
                maps[nextRow][nextCol] = 0;
                queue.push([nextRow, nextCol, distance+1]);
            }
        }
    }
    return -1
}