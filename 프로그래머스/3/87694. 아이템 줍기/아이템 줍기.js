function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1. 격자 크기 정하기
    // 좌표 범위가 보통 1~50이라 치면, 2배 하면 최대 100
    // 여유 있게 0~102 정도로 격자 준비 (배열 인덱스라 0부터 시작 고려)
    const grid = Array.from({length: 102}, () => Array(102).fill(0));

    // 2. 모든 사각형의 "테두리"를 먼저 전부 표시
    for (const border of rectangle) {
        const [rawX1, rawY1, rawX2, rawY2] = border;
        const x1 = rawX1 * 2, y1 = rawY1 * 2, x2 = rawX2 * 2, y2 = rawY2 * 2;
        for (let x = x1; x <= x2; x++ ) {
            grid[x][y1] = 1;    // down border
            grid[x][y2] = 1;    // up border
        }
        for (let y = y1; y <= y2; y++) {
            grid[x1][y] = 1;    // left border
            grid[x2][y] = 1;    // right border
        }
    }

    // 3. 모든 사각형의 "내부"를 나중에 전부 지우기
     for (const border of rectangle) {
        const [rawX1, rawY1, rawX2, rawY2] = border;
        const x1 = rawX1 * 2, y1 = rawY1 * 2, x2 = rawX2 * 2, y2 = rawY2 * 2;
        
        for (let x = (x1+1); x <= (x2-1); x++) {
            for (let y = (y1+1); y <= (y2-1); y++) {
                grid[x][y] = 0; // 내부는 못감.
            }
        }
    }
    

    // 4. BFS (게임 맵과 동일 구조)
    const queue = [[characterX*2, characterY*2, 0]];
    const directions = [[-1,0],[1,0],[0,-1],[0,1]];

    while (queue.length !== 0) {
        const [x, y, distance] = queue.shift();
        if (x === itemX*2 && y === itemY*2) {
            return distance / 2   // 5. 2로 나눠서 반환
        }
        
        for (const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx <= 101 && ny >= 0 && ny <= 101 && grid[nx][ny] === 1) {
               grid[nx][ny] = 0;   // 방문 처리 (막기)
               queue.push([nx, ny, distance+1]);
            }
        }
            
                
    }
     
}