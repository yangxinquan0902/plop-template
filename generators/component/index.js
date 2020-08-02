const path = require('path');

const { dirExist, resolve } = require('../utils/index');
const resolve2 = (dir)=>{
  return path.resolve(__dirname, dir);
};

module.exports = {
  description: 'component 组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入 component 名称',
      default: 'home'
    }
  ],

  actions: data => {
    // 通过data可以获取data.name
    // const { name } = data;

    const actions = []

    actions.push({
      type: 'add',
      path: resolve('components/{{properCase name}}/index.vue'),
      templateFile: resolve2('./components.hbs')
    });

    // register-global-components.js是注册全局组件，不存在则生成
    if(!dirExist(resolve('components'), 'register-global-components.js')){
      actions.push({
        type: 'add',
        path: resolve('components/register-global-components.js'),
        templateFile: resolve2('./register-global-components.hbs')
      });
    }

    return actions;
  }
}
