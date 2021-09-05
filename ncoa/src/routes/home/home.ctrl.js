"use strict";


const output = {
	home : (req, res) => { //home함수는 그냥 해당 페이지("home/index"를 render 한마디로 렌더링 해주는 함수 -> output 이라는 객체로 빼주기 위해서 home이라는 Key값으로 이용하고
		res.render("home/index");
	},

	login : (req, res) => { //login함수는 그냥 해당 페이지("home/index"를 render 한마디로 렌더링 해주는 함수 
		res.render("home/login");
	},
};

const users = {
	id : ["apc7072", "seoks760577", "Kailyn235000"],
	psword : ["seo890624@", "seokyu0102@", "seo890624"],
};

const process = {
	login : (req, res) =>{
		const id = req.body.id,
			  psword = req.body.psword;//login.js에서 body에 접급할려면 req(요청)을 하고 body에 접근을 한다 body데이터를 받을려면 모듈을 설치 해줘야됨 
	
		if (users.id.includes(id)){
			const idx = users.id.indexOf(id);
			if (users.psword[idx] === psword){ //users안에 있는 psword의 idx가 프론트엔드에서 전달한 psword가 같은지 여부 확인
				return res.json({ //프론트 엔드한테 로그인이 성공했는지 여부를 응답해주는거임 똑같은 json 형태
						success : true,//로그인이 성공하게 되면 success true 라는 objcet를 json으로 만들어서 res으로 프론트로 보내는거임
				});
			}
		}
		
		return res.json({ //위서 return으로 나가져버리기 때문에 else구문은 안써도 됨
			success : false,
			msg : "로그인에 실패하셨습니다.",
		})
	},
};
//프론트 엔드에서 전달한 includes(id)의 id가 users 안에 id에 있으면 id의 idx를 가져옴 

module.exports = {
	output,
	process,
}; //module exports로 밖으로 내보내는거임 받는거는 index.js에 컨트롤러 부분에서