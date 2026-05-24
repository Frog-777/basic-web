let bodyTag = document.body;

let hongikFestival = {
    name: "축제 라인업",
    date: "2026.05.13 - 2026.05.15",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
        day1: "다이나믹듀오 ",
        day2: "백예린, 코르티스",
        day3: "프로미스나인, 엔플라잉, 로꼬 그레이 우원재 (feat.시크릿게스트)"
    }
}

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");

let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1;
sectionTag.appendChild(dynamicDuoTag);

let baekYeolinTag = document.createElement("p");
baekYeolinTag.innerText = hongikFestival.lineup.day2;
sectionTag.appendChild(baekYeolinTag);

let promiseNineTag = document.createElement("p");
promiseNineTag.innerText = hongikFestival.lineup.day3;
sectionTag.appendChild(promiseNineTag);

// 화면을 본다.

