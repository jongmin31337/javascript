/*

아래와 같이 변수명에 의미를 부여할 수 있지만
타입 자체에 의미를 부여하고 싶을 때 사용하는게 바로
타입 alias 타입 별칭이다 확인해보자
*/
let xPosition: number = 10;

export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | ' 금' | '토' |' 일';

//enum 타입은 특정 값으로 제한하는 기능은 유사하지만 실제 데이터이고, 
// 타입 알리아스는 컴파일 타임의 타입만 검사하는 용도라 사용.
export enum DayOfTheWeek {'월' , '화' , '수' , '목' , '금' , '토' ,'일' };



export type Name = string;
export type Email = string;
export type FooFunction = () => string;


// 인터페이스
export interface IUser {
    readonly id: number;
    readonly name : Name;
    email: string;
    receiveInfo: boolean;
    active: YesOrNo;
}

export interface IUser {
    address?: string; // OPTIONAL 있어도 되고 없어도 됨.
}


// typealias 
// 문법적차이밖에없음 interface랑 typealias랑?
// 인터페이스는 특별하게도 이렇게 이름이 중복되면
// 확장되는 효과를 만들어내나
// typealias는 지원을 안함함
// 권장하지않음.
export type TUser = {
    readonly ID: number;
    readonly NAME: string;
    email: Email;
    receiveInfo: boolean;
    active: YesOrNo;
}


// export type TUser = {
//     address?: string;
// }


export interface IUserProfile extends IUser { // TypeALIAS도 올수있음.
    profileImage: string;
    github?: string;
    twitter?: string;
}

export type TUserProfile = IUser & { // 인터페이스, TypeAlias 상관없음
    profileImage: string;
    github?: string;
    twitter?: string;
}

export interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor: string;
}

export type Display = {
    display: 'none' | 'block';
    visibility: boolean;
    opacity: number;
}

export type Geometry = {
    width: number;
    height: number;
    padding: number;
    margin: number;
}


export interface IStyle extends Color, Display, Geometry {
    tagName: string;
}

export type TStyle = Color & Display & Geometry & {
    tagName: string;
}


export interface IOnlyNumberValueObject {
    [key: string] : number;
}

export type TOnlyNumberValueObject = {
    [prop: string] : boolean;
}

export interface IGetApi {
    (url: string, search?: string) : Promise<string>; // 인자 : 리턴
}


//type alias 함수 타이핑 시  표기법이 다름
// 괄호로 묶거나 그럴경우 :  
// 직접 이퀄하고 함수 규격 작성 시는 활살표
export type TGetApi = {
    (url: string, search?: string) : Promise<string>;
}

export interface IRect {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface IReactConstructor {
    new (x: number, y: number, width: number, height: number): IRect;
}


// 정리!!!
// 타입알리아스 , 인터페이스
// 타입 알리와스와 인터페이스의 차이점은
// 구체적인 차이점이라고 하면은 문법적인 사항 말고도, 인터페이스에는 없는 내용이 타입알리에스에 들어있따
// 구체적인 타입읆 명시할 수 있따는 거다.
// 데이터를 표현할 때는 타입 알리아스를 쓰고
// 메소드와 같은 구체적인 행위까지 포함된 객체를 디자인할 때는 인터페이스 위주로 쓴다.
// 당연히 클래스같은경우는 데이터와 메소드를 포괄하기 떼문에 인터페이스가 좋다.