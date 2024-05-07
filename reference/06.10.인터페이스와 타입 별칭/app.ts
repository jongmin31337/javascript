import * as allTypes from './type'; 

const foo: allTypes.FooFunction = function() {
    return ' 아무 쓸모 없어';
}

const iUser: allTypes.IUser = {
    id: 2,
    name: '빌 게이츠',
    email: 'bill@ms.com',
    receiveInfo: false,
    active: 'Y',
}

const IStyle: allTypes.IOnlyNumberValueObject = {
    borderWidth: 5,
    width: 300,
    height: 100,
}

const TStyle: allTypes.TOnlyNumberValueObject = {
    border: true,
    visible: false,
    display: true,
}


// 함수 규격을 작성 했을때, 함수 규격을 함수에 적용할때는
// 함수 선언문이 아니라, 함수 표현식을 써야한다.
const getApi: allTypes.IGetApi = (url, search = '') => {
    return new Promise(resolve => resolve('Ok'));
}

// 인터페이스는 항상 공개된(public) 속성만 기술하기떼문에 private를 사용할 수 없다.
class Rect implements allTypes.IRect {
    //private id: number;
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;

    //인스턴스를 만들기 위해 생성자가 호출이 되는데
    // 그런데 클래스의 규격과 생성자가 만들어내는 인스턴스의 규격이 미묘하게 다를 수 있다.
    // 인터페이스를 이용해서 생성자의 규격을 기술할 수 있다.
    constructor(x: number, y: number, width: number, height: number) {
        this.id = Math.random() * 100000;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

function createDefaultRect(cstor: allTypes.IReactConstructor) {
    return new cstor(0, 0, 100, 100);
}

// 생성자 자체를 이렇게 new Rect 인스턴스 객체를 만드는 것은 인터페이스가 필요가없다.
// Rect 클래스 자체가 설계도기 때문에
const rect1 = new Rect(0, 0, 100, 20);

// 그러나 만약에 이걸 대신해 주는 함수를 만든다고 하면
// 여기서 클래스를 넘기고 클래스의 생성자를 호출하게 될때 이때 스펙이 필요함
const rect2 = createDefaultRect(Rect);


