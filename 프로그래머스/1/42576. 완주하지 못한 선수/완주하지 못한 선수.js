function solution(participant, completion) {
    const countByParticipant = new Map()
    
    // participant 카운팅
    participant.forEach((participant) => {
        countByParticipant
            .set(participant, 
                (countByParticipant.get(participant) ||                 0) + 1)
        });
    
    // completion에서 카운트 빼기
    completion.forEach((participant) => {
        countByParticipant
            .set(participant,
                (countByParticipant.get(participant) ||                 0) -1)
        });
    
    // 값이 1인 사람 찾기
    console.log([...countByParticipant])
    return [...countByParticipant].find(([name, count]) => count >0)[0];
}