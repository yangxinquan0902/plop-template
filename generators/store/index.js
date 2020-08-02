const path = require('path');

const { dirExist, resolve } = require('../utils/index');
const resolve2 = (dir)=>{
  return path.resolve(__dirname, dir);
};

module.exports = {
  // 这里是对该plop的功能描述
  description: 'vuex modules',

  // 问题询问
  prompts: [
    {
      // 问题类型 此处为输入
      type: 'input',
      // actions 和 hbs 模板文件中可使用该变量
      name: 'modules',
      // 问题
      message: '请输入vuex模块名称',
      // 问题的默认答案
      default: 'mmf'
    }
  ],

  // 操作行为
  actions: ()=>{
    const actions = [];

    actions.push({
      // 操作类型，这里是添加文件
      type: 'add',
      // 添加的文件的路径  kebabCase烤串命名person-id
      path: resolve('store/modules/{{kebabCase modules}}.js'),
      // 模板文件的路径
      templateFile: resolve2('./modules.hbs')
    });

    // store里面的index.js不存在则创建
    if(!dirExist(resolve('store'), 'index.js')){
      actions.push({
        type: 'add',
        path: resolve('store/index.js'),
        templateFile: resolve2('./index.hbs')
      });
    }

    return actions;
  }
}
