//if(비교식) {}  비교식이 참이면 {} 시작
//else {}   // if문이 거짓이면 {} 시작

let age = 1;

if (age === 10) { // 
    console.log("나이는 10세");
} else if(age === 20) { // 없어도 됨
    console.log("나이는 20세");
} else { // 없어도 됨
    console.log("모르겠습니다");
}

//switch

if(age === 20) 
    console.log('나이는 20세'); // 한줄일 경우 {} 생략가능하나 추천하지않음




// 0, '', null, undefined 은 거짓 
// 문자열. 0을제외한 숫자, {} 모든 객체  참


//들어오는 인자값을 가지고 case를 비교함... 
// case문의 어떤 값을 계속 비교하면서 
// 여러 값 중 하나를 선택하여 각각 다른 동작을 실행해야 할 때 사용하면 가독성이 더 좋음.
switch(age) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('??');
        break;
}
 