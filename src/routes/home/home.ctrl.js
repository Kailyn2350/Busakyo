"use strict";

const home = (req, res) => {
	res.render("home/index");
};

const login =  (req, res) => {
	res.render("home/login");
};

module.exports = {
	home,
	login,
} //module exports로 밖으로 내보내는거임