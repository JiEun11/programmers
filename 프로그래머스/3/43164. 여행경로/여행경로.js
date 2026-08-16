function solution(tickets) {
    // 가능한 경로가 2개 이상일 수도 있으니 오름차순 정렬부터함.
    tickets.sort();
    
    const route = ["ICN"];
    const used = Array(tickets.length).fill(false);
    
    function dfs (currentAirport, usedCount) {
        if (usedCount === tickets.length) {
            return true;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            if (currentAirport === from && !used[i]) {
                used[i] = true;
                route.push(to);
                if (dfs(to, usedCount + 1)) {
                    return true;
                }
                used[i] = false;
                route.pop();
                
            }
        }
        
        return false;
    }
    
    dfs("ICN", 0)
    return route;
}