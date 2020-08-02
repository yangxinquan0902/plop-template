// 创建src里面的文件夹
const { createDir } = require('../utils/index');
let dirs = ['api', 'components', 'request', 'views', 'store'];
createDir(dirs);

// 执行命令的入口文件
const storeGenerrator = require('../store/index.js');
const apiGenerrator = require('../api/index.js');
const componentGenerrator = require('../component/index.js');
const viewGenerrator = require('../view/index.js');
const webpackGenerrator = require('../webpack/index.js');

module.exports = plop => {
	plop.setGenerator('vuex', storeGenerrator);
	plop.setGenerator('api', apiGenerrator);
	plop.setGenerator('component', componentGenerrator);
	plop.setGenerator('views', viewGenerrator);
	plop.setGenerator('webpack', webpackGenerrator);
};
