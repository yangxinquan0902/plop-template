const { createDir } = require('../utils/index');
let dirs = ['api', 'request'];
createDir(dirs);

// 执行命令的入口文件
const apiGenerrator = require('../api/index.js');

module.exports = plop => {
  plop.setGenerator('api', apiGenerrator);
};
