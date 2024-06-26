// 함수는 어떤 목적의 계산을 하는 코드의 묶음
// 호출이라는 과정을 통해 수행을 해서 결과를 받아볼 수 있음
// 함수 정의문 ; 클론이 필요없ㅇ,ㅁ
function myFn(x) {
    return 100 + x;
}

const result = myFn(10, 20);


// 자바스크립트는 언어 레벨에서 함수를 값으로 취급한다.
// 값으로 취급한다는 것은 변수에 넣을 수 있따는 것을 의미한다.
// 변수에 함수를 넣게 되면 그 변수가 그 다음부터 그 함수의 이름을 대신하게 된다.
// 익명함수. 익명함수는 반드시 변수에 넣어야 사용할 수 있다.
// 함수식~~   ; 이 들어가야함.
const myFnV2 = function () {
    return 100;
};

// 자바스크립트 함수 호출 방법 3가지.
//1. 괄호 열고 닫기
myFnV2();

//call, apply 
//공통점 : 첫 번째 인자로 context 객체라는 것을 받음.
//2. call 함수가 제공하는 메소드 
// call은 인자를 sum함수를 호출하는 것 처럼 전달
myFnV2.call(null, 10, 20, 30);

//3. apply
// apply는 인자를 배열에 담아 전달
myFnV2.apply(null, [10, 20, 30]);

// call 은 인자를 전달하는걸 코드로 쓰고 있음 코드를 바꿔야함
// apply는 배열 데이터를 다른쪽으로 뺄 수 있음.



function sum(a, b, c) {
    let s = 0;
    
    // sum 함수는 a, b, c를 사용하지 않게됨 필요없어짐.
    for(let i = 0; i < arguments.length; i++) {
        s = s + arguments[i];
    }


    //return a + b + c;
    return s;
}

//call 하고 apply는 언제써?? 
// call , apply는 특수한 용도에 사용된다.
// 그 특수한 용도는 자바스크립트의 인자와 관련이 있다
// 가변인자 myFn에 인자 2개를 던져줘도 두번째꺼는 무시한다.
// sum의경우는 ...인자가 가변적일때도 처리하길 원할 수 있다..
// 기본적으로 가변인자를 처리하는 방법을 제공해줌
// 함수가 호출될때 함께 전달되는 유사배열이 있음
// arguments라는 배열
// sum 함수 시그니처(함수 겉모습) 을보고 가변인자를 처리하는지 뭘 받는지 알수가 없음.....  함수를 열어보고 알 수 있음... 함수가 함수사용자한테 함수사용법에 대한 정보를 거의 주지 않음 너무 불편
// 함수를 사용하기 위해 함수 내용물을 보고 힘들어짐

const abcSum = sum(10, 20, 30, 40);


// a에 10 b 에 20  나머지는 args 들어감  a 와 b는 필수값이고 뒤는 안줘도되고 몇개든 줘도됭.
function sum2(a, b, ...args) { // 몇개가 올지 모른다로 이해하면 편함.
    let s = 0;
    
    for(let i = 0; i < args.length; i++) {
        s = s + arguments[i];
    }

    return s;
}

// 함수 시그니처에 많은 정보가 있는게 좋음
// 새로운 스펙이 추가됨
// 새로운 스팩은 rest parameter 전개 파라티머임./
const abcSum2 = sum2(10, 20, 30, 40);





// 즉시 실행 함수
// 애플리케이션 내에서 단 한번만 실행하는 코드들의 경우 많이 사용되는 테크닉..
(function() {
    console.log('즉시 실행 함수 실행');
})();



//화살표함수
//함수 이름이 없고, 기본적으로 이름을 줄 수 없는 익명함수가 기본값.
// 호출을 할려면 필요할려면 이름이 필요하니까 변수에 넣어야함
// 왜 나왔을까는 context나 prototype을 배워야 알 수 있다.
// 지금은 형태적인 측면만
const sumV2 = (a, b, ...args) => { 
    let s = 0;
    
    for(let i = 0; i < args.length; i++) {
        s = s + arguments[i];
    }

    return s;
}

//화살표함수는 한줄함수라고도 불린다
//인자는 안받고 100을리턴한다.
// 코드가 한줄이고 그 코드의 결과를 리턴하는 경우 브레이스({}) 를 생략할 수 있다.
// 인자가 2개이상이면 인자에 괄호 코드가 2줄이면 함수자체에 {} 를 써야한다.
const ten = x => 100 + x;


//생성기함수
//GENERATOR FUNCTION
//최초에 함수를 실행하면 함수를 실행준비상태가됨..
//객체반환 : 함수를 실행할 도구를 반환
// 실행했다가 멈췄다가 이런식으로 할 수 있음.
// 다시 들어왔다가 나왔다 이런식의 동작을 할 수 있는게 generator 함수
function* gen() {
    yield 10;
    yield 20;
    return 30;
}

const g = gen();
g.next();
g.next();
g.next();