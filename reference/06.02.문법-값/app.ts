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
// 실제 주고받는 데이터는 enum 불편함.


// enum은 0 부터 시작하여 멤버들의 번호를 매긴다.
enum Color2 {
    Red, Blue, Green
}

// 멤버중 하나의 값을 수동으로 설정하여 번호를 바꿀 수 있다.
enum Color3 { 
    Red = 1, Green, Blue
}

// 또는 모든 값을 수동으로 설정 가능
enum Color4 {
    Red = 1,
    Green = 2,
    Blue = 4,
};

// enum의 유용한 기능 중 하나는 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있다.
enum Color5 {
    Red = 1,
    Green,
    Blue
}

let colorName : string = Color[2]; // Green


