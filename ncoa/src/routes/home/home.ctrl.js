"use strict";

const output = {
	home : (req, res) => { //home함수는 그냥 해당 페이지("home/index"를 render 한마디로 렌더링 해주는 함수 -> output 이라는 객체로 빼주기 위해서 home이라는 Key값으로 이용하고
		res.render("home/index");
	},

	login : (req, res) => { //login함수는 그냥 해당 페이지("home/index"를 render 한마디로 렌더링 해주는 함수 
		res.render("home/login");
	},
}

const process = {
	login : (req, res) =>{
		console.log(req.body); //login.js에서 body에 접급할려면 req(요청)을 하고 body에 접근을 한다 body데이터를 받을려면 모듈을 설치 해줘야됨 
	}
}

module.exports = {
	output,
	process,
} //module exports로 밖으로 내보내는거임 받는거는 index.js에 컨트롤러 부분에서