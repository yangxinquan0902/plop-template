
/*
  kebabCase: change-format-to-this 烤串命名 
  camelCase: changeFormatToThis 小驼峰
  properCase/pascalCase: ChangeFormatToThis 大驼峰
*/
const path = require('path');

const { dirExist, resolve } = require('../utils/index');
const resolve2 = (dir)=>{
  return path.resolve(__dirname, dir);
};

module.exports = {
  description: 'api 配置文件 ',
  prompts: [
    {
      type: 'input',
      name: 'dir',
      message: '请输入api文件夹名称',
      default: 'home'
    },
    {
      type: 'input',
      name: 'file',
      message: '请输入api文件名称',
      default: 'index'
    }
  ],
  actions: ()=>{
    const actions = [];
    actions.push({
      type: 'add',
      path: resolve('api/{{camelCase dir}}/{{camelCase file}}.js'),
      templateFile: resolve2('./api.hbs')
    });

    // request里面的index.js不存在则创建
    if(!dirExist(resolve('request'), 'index.js')){
      actions.push({
        type: 'add',
        path: resolve('request/index.js'),
        templateFile: resolve2('./axios.hbs')
      });
    }
    return actions;
  }
}
