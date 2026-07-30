function solution(priorities, location) {
    const prioritiesQueue = [];
    let executionCount = 1;
    
    // Build the queue, keeping each process's original index so we can track our target
    for (let i = 0; i < priorities.length ; i++) {
        prioritiesQueue.push({ priority: priorities[i], index: i});    
    }

    // 2. Shift Queue when queue become an empty
    while ( prioritiesQueue.length !== 0 ) {
        const firstPriority = prioritiesQueue.shift();
        // Highest priority remaining among the processes still waiting in the queue
        const maxPriorityAtLeft = Math.max(...prioritiesQueue.map((process) => process.priority));
        const isFirstPriorityIsMax = (firstPriority.priority >= maxPriorityAtLeft);
        
        if (!isFirstPriorityIsMax) {
            // Someone stronger is waiting, so send this process to the back
            prioritiesQueue.push(firstPriority); 
        }
        else {
            // This process runs now; return immediately if it's the one we're tracking
            if (firstPriority.index === location) return executionCount;
            executionCount++; 
        }
    }
}