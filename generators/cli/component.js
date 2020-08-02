const { createDir } = require('../utils/index');
let dirs = ['components'];
createDir(dirs);

// 执行命令的入口文件
const componentGenerrator = require('../component/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerrator);
};
