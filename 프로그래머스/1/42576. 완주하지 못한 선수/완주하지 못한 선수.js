function solution(participant, completion) {
    const countByPerson = new Map();
    
    // 1. participant 순회하면서 개수 세기
    participant.forEach((person) => {
        countByPerson.set(person, (countByPerson.get(person) || 0) + 1);
    });
    
    // 2. completion 순회하면서 개수 빼기
    completion.forEach((person) => {
        countByPerson.set(person, (countByPerson.get(person) || 0) - 1);
    });
    
    // 3. 개수가 1 이상인 이름 반환
    for (const [name, count] of countByPerson) {
        if (count >= 1) return name;
    }

}