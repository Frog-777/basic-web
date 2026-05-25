##What I learned today##
**1. 오늘 공부한 내용**
Javascript란?
Javascript의 목적 : 내가 작성한 스크립트대로 페이지 조작
**Java와는 전혀 다른 개념(관련없음)
함수 console.log -> 파이썬에서 print()와 같은 개념!

URL 열고 F12 = 개발자 도구
변수 선언 방법 : let
ex. let hello = "hello hongik”;
의미 : 자, hello 변수에 “hello hongik” 문자열을 넣어!

홍익대학교 축제 라인업 궁금한 사람 -> [여기 클릭!] (http://127.0.0.1:5500/week%201/index.html)


**2. JS 데이터 타입 '배열'**
배열 : 여러 데이터를 하나로 묶어서 저장하는 자료형
    ex. 학생 이름 여러 개를 저장하는 경우
    let students = ["민수", "지훈", "서연"];
배열의 특징
    여러 값을 순서대로 저장
    번호(index)로 접근
    index는 0부터 시작
    배열 안에는 다양한 데이터 저장 가능 (숫자/문자열/객체 등)
! 배열 선언 : 
```javascript
let fruits = ["사과", "바나나", "포도"];
```
! 배열 인자 접근 : 배열이름[index]
```javascript
let fruits = ["사과", "바나나", "포도"];
console.log(fruits[0]); 
```
    -> 사과를 의미함
🚨 배열에서 index를 메길 때는 1이 아니라 0부터 0, 1, 2, 3, 4...로 이어짐!!!
배열 쓰임새
메서드	      설명
```javascript
push()	    뒤에 추가
pop()	    뒤에서 제거
shift()	    앞에서 제거
unshift()	앞에 추가
length()	길이 확인  
```
