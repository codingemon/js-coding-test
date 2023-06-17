// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);
}

// n의 type을 string으로 바꾸어준다
// 문자영ㄹ에 쓰는 메서드인 split을 사용하여, 각 자릿수 별로 쪼개 배열을 만들어준다. 123이 있다면, ['1','2','3'] 이런식으로 해준다
// 배열에 사용하는 메서드인 reduce를 사용해 각 자릿수의 합을 구해줄 수 있따.
// 현재 reduce메서드의 cur값은 문자열이기 때문에 숫자처리를 해주어햐한다. parseInt(cur) Number(cur) cur * 1과 같은 방법으로 처리해줄 수 있다.
