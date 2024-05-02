// 값의 복사
// 기본형 데이터 타입은 모두 값이 복수
// 어떤 상황에서도 이전 변수에 담겨있는 값에 영향을 주지않는다. 
let a = 10;
let b = a;

b = 20;



//값의 참조
//참조되는값은 기본형을 제외한 나머지 값 즉 객체
let o = {
    isLoading: false,
}

// o가 저장되어 있는 객체 위치값만 저장되어있음.
let o2 = o;

// o2.isLoading = true;


function foo(o) {
    o.isLoading = true;
}

foo(o);
console.log('done');




