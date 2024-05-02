let age = 10;

function setAge() {
    
}

const o = {
    age: 10,
    ['my Name']: '김',
}

// JavaScript에서 식별자를 문자열로 변환하는 방법은 없지만, 어떤 경우 문자열을 분석해 식별자로 사용할 수 있습니다.
// 위에서 myName 은 문자열 즉 데이터 인데 데이터가 코드화되었다.
o['my Name'];



//object
// 객체값이기때문에 어떤값이든 내가 원하는 값을 넣을 수 있음.
// enum과는 표현의 기법이 다른지만 거의 유사하다.
// 객체가 표현력에 있어서 훨씬 더 풍성한 방법을 제공한다..
// enum을 선호하지 않는 이유는
// enum 은 실제로 데이터 코드이다.. 
// 객체는 데이터가 될 수 있어, 서버에서 데이터를 가져와서 그 데이터를 객체로 표현해서
// 실제로 UI에서 다루게 될 때, 
// Color라는 데이터를 가져다 왔을 땨
// Red, Blue, Green 이라는 enumtype으로 변환하는게 까다로움..
// Object는 그냥 변환이 쉬움.
const Color = {
    Red: 1,
    Blue: 2,
    Green: 3,
}

Color.Red;