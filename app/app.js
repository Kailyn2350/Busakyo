"use strict";

//서버 열때 꼭 app으로 경로 이동한 후에 npm start 하시길!!

//모듈
const express = require('express');
const app = express();


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //__dirname = app.js를 반환 해준다. 그 위에있는 src에 있는 public폴더를 static = 정적 경로로 추가해주겠다 추가로 : `${~~~~}`여기 부분 `이거랑 '이거랑 구분 잘하기.

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드. 일단 외우도록!

module.exports = app;

