const path = require('path');

const { dirExist, resolve } = require('../utils/index');
const resolve2 = (dir)=>{
  return path.resolve(__dirname, dir);
};

module.exports = {
  description: 'view 页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入 view 名称',
      default: 'home'
    }
  ],

  actions: data => {
    const actions = []

    actions.push({
      type: 'add',
      path: resolve('views/{{properCase name}}/index.vue'),
      templateFile: resolve2('./view.hbs')
    });

    actions.push({
      type: 'add',
      path: resolve('router/routes/{{properCase name}}.js'),
      templateFile: resolve2('./router.hbs')
    });

    // router里面的index.js不存在则创建
    if(!dirExist(resolve('router'), 'index.js')){
      actions.push({
        type: 'add',
        path: resolve('router/index.js'),
        templateFile: resolve2('./index.hbs')
      });
    }

    return actions;
  }
}
