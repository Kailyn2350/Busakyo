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
	console.log(req);
	//fetch(); //id랑 pw의 해당하는 데이터를 서버에 전달하는거
}