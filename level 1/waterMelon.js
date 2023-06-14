function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer = answer + "수";
    } else {
      answer = answer + "박";
    }
  }
  return answer;
}

// String.repeat메소드를 이용한 풀이도 있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환하다.
// str,repeat(count);
function solution(n) {
  return "수박".repeat(n).substring(0, n);
}
