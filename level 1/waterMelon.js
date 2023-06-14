// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

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
