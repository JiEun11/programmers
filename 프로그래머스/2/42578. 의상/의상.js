function solution(clothes) {
    const countClothes = new Map();
    
    // Fill the map
    for (const [name, type] of clothes) {
        if (countClothes.has(type)) {
             countClothes.set(type, countClothes.get(type) +1);
        }
        else countClothes.set(type, 1);
    }
    
    // count all possibilities
    let answer = 1;
    for (const count of countClothes.values()) {
        answer *= count + 1; 
    }
    return answer -1;
}