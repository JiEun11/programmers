function solution(game_board, table) {
    const size = game_board.length;

    // 격자에서 (startRow, startCol)부터 DFS로 연결된 같은 값(targetValue)의 덩어리를 모으는 함수
    const collectConnectedShape = (grid, startRow, startCol, targetValue, visited) => {
        const stack = [[startRow, startCol]];
        const shapeCoordinates = [];
        visited[startRow][startCol] = true;

        while (stack.length !== 0) {
            const [currentRow, currentCol] = stack.pop();
            shapeCoordinates.push([currentRow, currentCol]);

            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for (const [rowDelta, colDelta] of directions) {
                const nextRow = currentRow + rowDelta;
                const nextCol = currentCol + colDelta;
                if (
                    nextRow >= 0 && nextRow < size &&
                    nextCol >= 0 && nextCol < size &&
                    !visited[nextRow][nextCol] &&
                    grid[nextRow][nextCol] === targetValue
                ) {
                    visited[nextRow][nextCol] = true;
                    stack.push([nextRow, nextCol]);
                }
            }
        }
        return shapeCoordinates;
    };

    // 격자 전체를 훑으면서 targetValue의 모든 덩어리를 찾는 함수
    const findAllShapes = (grid, targetValue) => {
        const visited = Array.from({ length: size }, () => Array(size).fill(false));
        const shapes = [];
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (grid[row][col] === targetValue && !visited[row][col]) {
                    shapes.push(collectConnectedShape(grid, row, col, targetValue, visited));
                }
            }
        }
        return shapes;
    };

    // 덩어리를 정규화 (기준점을 (0,0)으로 이동) + 정렬해서 비교 가능하게 만드는 함수
    const normalizeShape = (shapeCoordinates) => {
        const minRow = Math.min(...shapeCoordinates.map(([row, col]) => row));
        const minCol = Math.min(...shapeCoordinates.map(([row, col]) => col));
        const normalizedCoordinates = shapeCoordinates.map(([row, col]) => [row - minRow, col - minCol]);
        normalizedCoordinates.sort((coordinateA, coordinateB) =>
            coordinateA[0] - coordinateB[0] || coordinateA[1] - coordinateB[1]
        );
        return normalizedCoordinates;
    };

    // 90도 회전: (row, col) -> (col, -row), 이후 다시 정규화
    const rotateShape = (shapeCoordinates) => {
        const rotatedCoordinates = shapeCoordinates.map(([row, col]) => [col, -row]);
        return normalizeShape(rotatedCoordinates);
    };

    // 두 정규화된 모양이 같은지 비교하기 위해 좌표 배열을 문자열 키로 변환
    const shapeToKey = (shapeCoordinates) =>
        shapeCoordinates.map(([row, col]) => `${row},${col}`).join('|');

    // 1. 게임판에서 0(빈칸) 덩어리들 찾기
    const emptySpaceShapes = findAllShapes(game_board, 0);

    // 2. 조각판에서 1(블록) 덩어리들 찾기 (미리 정규화까지 해둠)
    const puzzlePieceShapes = findAllShapes(table, 1).map(normalizeShape);

    // 이미 사용한 조각을 표시하는 배열
    const isPieceUsed = new Array(puzzlePieceShapes.length).fill(false);

    let totalFilledCount = 0;

    // 3~4. 각 빈칸 덩어리마다, 회전 4가지를 다 시도해서 일치하는 조각 찾기
    for (const emptyShape of emptySpaceShapes) {
        const normalizedEmptyShape = normalizeShape(emptyShape);
        let currentShape = normalizedEmptyShape;

        for (let rotationCount = 0; rotationCount < 4; rotationCount++) {
            const currentKey = shapeToKey(currentShape);
            const matchedPieceIndex = puzzlePieceShapes.findIndex(
                (pieceShape, index) => !isPieceUsed[index] && shapeToKey(pieceShape) === currentKey
            );

            if (matchedPieceIndex !== -1) {
                isPieceUsed[matchedPieceIndex] = true;
                totalFilledCount += normalizedEmptyShape.length;
                break;
            }
            currentShape = rotateShape(currentShape);
        }
    }

    return totalFilledCount;
}