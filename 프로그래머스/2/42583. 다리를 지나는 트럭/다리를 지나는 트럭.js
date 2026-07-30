function solution(bridge_length, weight, truck_weights) {
    const bridgeQueue = Array(bridge_length).fill(0);
    let time = 0;
    let totalWeight = 0;
    const truckWeights = [...truck_weights];
    
    while (truckWeights.length !==0 || totalWeight > 0) {
        time++;
        const goneWeight = bridgeQueue.shift();
        totalWeight -= goneWeight;
        
        if (truckWeights.length !==0 && truckWeights[0] + totalWeight <= weight) {
            const nextTruck = truckWeights.shift(); 
            bridgeQueue.push(nextTruck);
            totalWeight += nextTruck;
        } else {
            bridgeQueue.push(0);
        }
        
    }
    return time;    
}