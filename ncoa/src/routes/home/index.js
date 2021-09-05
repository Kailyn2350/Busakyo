"use strict";

const express = require("express");
const router = express.Router(); //라우터 !!

const ctrl = require("./home.ctrl"); //컨트롤러 !!

router.get("/", ctrl.output.home); //home.ctrl.js에서 밖으로 내보낸 output 객체를 받는거
router.get("/login",ctrl.output.login); //get 으로 동작하는 API
router.post("/login",ctrl.process.login); //프런트로부터 로그인 데이터를 받아서 처리해주는 역할 

module.exports = router;