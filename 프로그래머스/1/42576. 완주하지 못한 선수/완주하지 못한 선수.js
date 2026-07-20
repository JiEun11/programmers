function solution(participant, completion) {
  const frequencyMap = new Map();

  // 1단계: participant를 돌면서 맵 채우기 (동명이인 카운트)
  for (const name of participant) {
    // 여기: name이 이미 map에 있으면 +1, 없으면 1로 시작
    // .has() 써서 분기해봐
    if(frequencyMap.has(name)) {
        frequencyMap.set(name, frequencyMap.get(name)+1)
    }
    else {
        frequencyMap.set(name, 1);
    }
  }

  // 2단계: completion을 돌면서 카운트 차감
  for (const name of completion) {
    // 여기: 완주자는 -1
     if (frequencyMap.has(name)) {
        frequencyMap.set(name, frequencyMap.get(name)-1)   
     }
  }

  // 3단계: 카운트가 1 이상 남은 사람 찾아서 반환
  for (const [name, count] of frequencyMap) {
    // 여기
     if (count >= 1) return name;
  }
}