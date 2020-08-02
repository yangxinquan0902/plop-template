// 执行命令的入口文件
const webpackGenerrator = require('../webpack/index.js');


module.exports = plop => {
	plop.setGenerator('webpack', webpackGenerrator);
};
