const { createDir } = require('../utils/index');
let dirs = ['views'];
createDir(dirs);

const viewGenerrator = require('../view/index.js');

module.exports = plop => {
	plop.setGenerator('views', viewGenerrator);
};
