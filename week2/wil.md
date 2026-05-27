##오늘 공부한 내용##
**1. 서버와 통신하기**
(1) F12 -> console 확인 가능
(2) 서버와 클라이언트
- 서버 : 고객이 요청하는 일을 수행하는 사람
- 클라이언트 : 고객
- API : 서버와 클라이언트 간의 데이터를 주고받는 통로 역할
        서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인터페이스
(3) 프론트엔드와 백엔드
- 프론트엔드 : 사용자가 직접 상호작용하는 웹 페이지의 화면을 다루는 개발 영역
- 백엔드 : 서버에서 동작하는 부분을 다루는 개발 영역
(4) fetch함수 
: 네트워크 요청을 서버 데이터를 받아오는 표준 API 함수

**2. 데이터를 화면에 뿌리기**
(1) class vs id
- class : 묶음 단위 (분반)
- id : 나만을 식별할 수 있는 고유한 무언가 (학번)
(2) 화면에 뿌리기 단계 정리
    1. 새로운 HTML 태그로 제목, 내용 만들어서 뿌리기
```javascript
function render(data) {
console.log("1. h2 태그/p 태그를 만들기");
console.log("2. h2 태그에 title / p태그에 body를 넣기");
console.log("3. 두 태그를 root에 추가하기");
return console.log("4. 화면을 확인하기");
}    
render();
```
    2. 100개를 한 번에 뿌리기
        배열 : let friends [철수, 짱구, 유리] 
**첫번째가 0번임!!!**

    3. 버튼을 눌렀을 때 API 요청해서 화면에 뿌리기
```javascript      
let postsButton = document.getElementById("posts");
```

**3. 배포하기**
(1) 배포?
: URL로 다른 사람이 링크를 통해 볼 수 있게 하는 것
(2) 배포 과정
    1. github desktop으로 commit&push하기 -> github 링크에 업데이트된 걸 확인할 수 있음
    2. Vercel 사이트에서 new repository 선택해서 작업 폴더 import 하고 deploy 클릭 
    -> Vercel이 배포 완료!
(3) CI와 CD
- CI 지속적 통합) 코드의 컨벤션을 팀원끼리 맞추거나 테스트 코드 돌리는 역할
- CD 지속적 배포) 코드를 깃허브에 업데이트하면 배포가 다시 자동으로 되는 시스템
(3) 배포 플랫폼
: GitHub pages, netlify, aws, google cloud platform, oracle, naver cloud platform

배포 완료 https://basic-web-gamma.vercel.app/

**추가 공부[promise 개념]**
(1) promise란? Javascript에서 “나중에 결과가 나오는 작업” 을 다루기 위한 객체

(2) promise를 필요로 하는 작업
- 서버에서 데이터 가져오기
- 파일 읽기
- 로그인 요청
- 타이머(setTimeout)

(3) 동기 vs 비동기처리✔️
동기 : 하던 작업이 끝나야 다음 작업을 수행할 수 있도록 함
비동기 : 오랜 시간이 걸리는 작업은 미루고 일단 다음 코드 먼저 실행
"응답 기다리는 동안 다른 코드 먼저 실행하자"
**대표적인 비동기처리 예시 : API**
비동기처리에서 promise의 역할 : 지금 수행 중인 작업에 대한 결과를 미래에 알려줄게!
                        = 비동기 작업의 결과를 담는 객체

(4) 사용 예시
```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
```
=> 결과 
```javascript
1
3
2
```

(5) promise의 3가지 상태
    1. pending
        → 대기 중
    2. fulfilled
        → 성공
    3. rejected
        → 실패
(6) 기본 문법
```javascript
const promise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("성공!");
  } else {
    reject("실패!");
  }
});
```
여기서    resolve() → 성공 처리
        reject() → 실패 처리
```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

성공하면 
```javascript
resolve("성공!");
```

promise 개념 강의 링크
https://www.youtube.com/watch?v=iUGLyhbwYkU