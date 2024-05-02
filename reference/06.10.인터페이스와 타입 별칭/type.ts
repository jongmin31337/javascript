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