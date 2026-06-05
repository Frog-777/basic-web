**3주차 웹 스터디 공부한 내용**

## 1. 블로그 글쓰고 버튼 누르면 내용이 업로드되는 사이트 만들기

## 2. 내가 적은 제목과 내용 그대로 업로드하기

## 3. 개념 공부

(1) API : 클라이언트와 서버 간의 데이터를 주고 받는 통로 역할
ex-자판기에서 돈과 주문이 여기선 URL+a(json)
API 요청을 보내서 json 데이터가 오기까지 5초 걸린다고 가정

(2) fetch 함수 : 무언가에게 API를 처리하고 다 되면(then) 보고하라고 시키는 함수

(3) **동기 처리 : 순차적으로 일 진행
    **비동기 처리 : 병렬적으로 일 진행 (그래야 더 빠르고 효율적)

(4) 제목과 내용 입력하는 Value만들기
```Javascript
json :
    let titleValue = titleInput.value;
    let bodyTextValue = bodyTextarea.value;
title: titleValue,
    body: bodyValue,
    userId: 1,
```
*userId는 숫자만 가능하다*

(5) 이전에는 Chrome : Web page의 개념
현재는 Chrome : Web Application의 개념

(6) SEO : search engine optimization

## 4. 검색 등록하기 : 
네이버 서치 어드바이저-웹마스터도구로 들어가 사이트 등록하면 됨
구글 서치 콘솔로 들어가서 오른쪽 URL 방법으로 등록하면 됨
