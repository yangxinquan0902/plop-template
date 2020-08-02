const { createDir } = require('../utils/index');
let dirs = ['store'];
createDir(dirs);

const storeGenerrator = require('../store/index.js');

module.exports = plop => {
	plop.setGenerator('vuex', storeGenerrator);
};
