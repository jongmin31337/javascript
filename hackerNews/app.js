const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

// open('string', 'url문자열' , 'async를 사용할지 안할지 boolean')
ajax.open("GET", NEWS_URL, false);
// 데이터 가져오기
ajax.send();

// JSON 데이터를 객체로 반환
const newsFeed = JSON.parse(ajax.response);
console.log(typeof newsFeed);
console.log(typeof ajax.response);

// 반복문
// 시작값, 언제까지 반복, 증감식 값을 변환시켜야 끝이남
// 3번째값은 중괄호값이 실행이 끝나면 실행, 1번은 처음만실행되고 실행되지않음.
const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
