"use strict";

//DOM -> Document Object Model
//Document 객체 모델 한마디로 영어 그 자체 일종의 인터페이스 이것을 사용해서 자바 스크립티에서 HTML에 존재하는 데이터를 가져와서 제어한다

const id = document.querySelector("#id"), //querySelector는 질의 선택자 선택자를 통해서 HTML의 값을 가져올수 있다 #은 태그에 id로 부여되어 있는 id를 가져와 달라는 의미
	  psword = document.querySelector("#psword"), 
	  loginBtn = document.querySelector("button"); //버튼 버튼은 하나여서 굳이 선택자 안하고 버튼 태그 그대로 쓰기

loginBtn.addEventListener("click", login);

function login() {
	const req = {
		id : id.value, //id.value에 접근하면 해당 id의 값에 접근할수 있다.
		psword : psword.value,
	}; //req라는 변수에 담아두는 거임 아이디랑 패스워드를
	
	fetch("/login", { //서버에서 받을려면 /login이라는 경로
		method : "POST", //POST라는 메소드로 받을수 있는 API가 마련이 되있어야함 그런데 아직은 API는 마련 안하고 경로만 만들어졌다고 치고 입력해두는거
		headers : {
			"Content-Type" : "application/json", //내가 보내는 데이터의 타입을 명시하는 것이 Content-Type이라는 Key임 application/json 이러한 형태로  JSON을 전달을 한다
		},
		body : JSON.stringify(req) // body 라는 Key값으로 req를 전달 하는데 JSON이라는 타입으로 보내줄건데 JSON으로 감싸주고  stringify 메소드를 이용해서 req object를 JSON으로 감싸주는거임 stringify는 object를 단순히 문자열로 바꿔주는거
	}); //id랑 pw의 해당하는 데이터를 서버에 전달하는거 ()안에 있는거는 경로 어떤 경로로 아이디랑 비밀번호를 보내줄 건지
}