// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
//  예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  return parseInt(
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 주어진 n에 + ‘’를 해서 String으로 만들어준다.
// split() 메소드로 각 자리를 쪼개서 sort 메소드로 정렬해준다.
// 2-1. 이때 sort(a, b)일때, b - a는 내림차순 정렬을 의미한다.
// join(””)으로 다시 각각의 자리들을 합쳐주고, parseInt를 통해 Number 형식으로 바꾸어준다.
