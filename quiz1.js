// 1. 
let uninitialized;
console.log(uninitialized); // ReferenceError: Cannot access 'uninitialized' before initialization
// 변수에 값이 할당 안되서 에러 

// 2.
const apple = "사과";
apple = "apple";
//  let : 재할당 O, const : 재할당 X


// 3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 : 19
// 배열의 4번쨰 값 출력

//4.
let mySchedule = "";
console.log(mySchedule || false); // false , or 연산자 , falsy
console.log(!!mySchedule); // false -> true, 두번 부정