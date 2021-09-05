"use strict";
//npm install 할때 끝에 -s를 붙이는 이유: pakage.json에 명시되기 위함!
//서버 열때 꼭 app으로 경로 이동한 후에 npm start 하시길!!

//모듈
const express = require('express');
const bodyParser = require('body-parser'); 
//login.js에서 body객체로 프론트로부터 로그인 데이터를 보내고 home.ctrl.js에서 process 객체에서 body를 받는데 파싱하기 위해 필요한 모듈 또한 bodyParser를 등록해도 미들웨어를 등록을 해줘야됨
const app = express();


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
//__dirname = app.js를 반환 해준다. 그 위에있는 src에 있는 public폴더를 static = 정적 경로로 추가해주겠다 추가로 : `${~~~~}`여기 부분 `이거랑 '이거랑 구분 잘하기.
app.use(bodyParser.json());
//use로 미들웨어 등록 해주고 json 데이터를 파싱할수 있도록 명시한것
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); 
//use -> 미들 웨어를 등록해주는 메서드. 일단 외우도록!

module.exports = app;

