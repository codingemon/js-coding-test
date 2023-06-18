function solution(phone_number) {
  // 새로운 배열을 만들어 phone_number의 전체길이의 4를 빼고 *로 바꿀것
  const newArr = new Array(phone_number.length - 4).fill("*");
  // phone_number의 마지막 숫자 4개를 변수에 담아서 새로운 배열에 추가할것
  let newNum = phone_number.slice(-4);
  // 마지막으로 배열안의 문자열을 하나의 문자열로 합쳐줌
  newArr.push(newNum);

  return newArr.join("");
}

// 정규식으로 해결
// function hide_numbers(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }
