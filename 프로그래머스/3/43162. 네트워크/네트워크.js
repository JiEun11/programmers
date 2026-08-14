

function solution(n, computers) {
    
    const visited = new Array(n).fill(false);
    let count = 0;
    
    const dfs = (currentNetwork) => {
        visited[currentNetwork] = true;
        for (let next = 0; next < n; next++) {
            
            if (computers[currentNetwork][next] ===1 && !visited[next]) {
                dfs(next);
            }
            
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (visited[i]===false) {
            count++;
            dfs(i);
        }
    }
    return count;
}