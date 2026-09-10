function solution(a, b) {
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;
    
    for (let month = 1; month < a; month++) {
        totalDays += monthDays[month-1];
    }
    totalDays += b;
    totalDays -= 1;
    
    return  days[totalDays % 7];
}