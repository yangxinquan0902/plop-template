const fs = require('fs');
const path = require('path');

const resolve = (dir)=>{
  return path.resolve(__dirname, dir);
};


// 创建文件夹
const createDir = (dir)=>{
  let url = resolve(dir);
  // 不存在则创建
  if(!fs.existsSync(url)){
    fs.mkdirSync(url);
  }
};



const { projectName }  = require('./generators/utils/index');
createDir(`${projectName}`);
createDir(`${projectName}/src`);