const path = require('path');

const { projectName }  = require('../utils/index');

const resolve = (dir)=>{
  return path.resolve(__dirname, dir);
};

module.exports = {
  description: 'webpack 配置文件 ',
  prompts: [
  ],
  actions: ()=>{
    const actions = [];

    actions.push({
      type: 'add',
      path: resolve(`../../${projectName}/src/app.js`),
      templateFile: resolve('./app.js')
    });

    actions.push({
      type: 'add',
      path: resolve(`../../${projectName}/src/index.html`),
      templateFile: resolve('./index.html')
    });

    actions.push({
      type: 'add',
      path: resolve(`../../${projectName}/src/app.vue`),
      templateFile: resolve('./app.vue')
    });

    actions.push({
      type: 'add',
      path: resolve(`../../${projectName}/webpack.config.js`),
      templateFile: resolve('./webpack.config.js')
    });

    actions.push({
      type: 'add',
      path: resolve(`../../${projectName}/package.json`),
      templateFile: resolve('./package.json')
    });

    return actions;
  }
}
