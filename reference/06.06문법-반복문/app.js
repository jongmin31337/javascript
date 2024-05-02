// 반복문 
// 크게 두가지종류
// 반복문
// 즉 값으로 환원되는게 아닌 문을 통해 반복하는거

// 식을 이용해서 반복하는 패턴


const arr = ['a' , 'b', 'c', 'd'];

// 첫번째 반복을 최초에 시작할 때 한번 실행되는 영역 반복한 초기값 지정할때 많이쓰임
// 비교 이 비교가 참인동안 계속 실행
// 첫번째 반복이 시작되고 나서 그 다음번 반복할때 반드시 실행되는 영역
for(let i = 0; i < arr.length; i++) {
    console.log(arr[1]);
}


// 변수가 따로있어 불편함. for문이 변수를 사용하는데 훨씬 유연성을 가짐.
let i = 0 ;

// while
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}

// do while
i = 0;
do {
    console.log(arr[i]);
    i++
} while( i < arr.length)



//for of : 배열의 특정 위치에 관심이 없는 상황에서 편함.
for(const item of arr) {
    console.log(item);
}


//for in : 키의 값을 하나씩 꺼내 올 때 많이 쓰개됨.
for (const index in arr) {
    console.log(arr[index]);
}

const obj = {
    color: 'red',
    width: 200,
    height: 200,
}

for (const key in obj) {
    console.log(key);
}