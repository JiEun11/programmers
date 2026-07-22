function solution(phone_book) {
    // 1. 정렬
    const sortedPhoneBook = [...phone_book].sort();
    
    // 2. 인접한 번호들을 순회
    for (let i = 0; i < sortedPhoneBook.length-1; i++) {
        // 3. 접두어 관계가 발견되면 false
        if (sortedPhoneBook[i+1].startsWith(sortedPhoneBook[i])) return false;
    }
    
    // 4. 끝까지 없으면 true
    return true;
}