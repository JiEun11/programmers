function solution(phone_book) {
    //1. 모든 번호를 Set에 저장
    const phoneBookSet = new Set(phone_book);
    let answer = true;
    // 2. 각 번호의 앞부분(접두어)이 Set에 있는지 확인
    for (const phone of phone_book) {
        // phone의 접두어들을 하나씩 확인
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.slice(0, i);
            
            if (phoneBookSet.has(prefix)) {
                return false;
            }
        }
    }
    return answer;
}