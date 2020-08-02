const fs = require('fs');
const path = require('path');

// 项目名称
const projectName = 'demo';

const resolve = (dir)=>{
  return path.resolve(__dirname, `../../${projectName}/src`, dir);
};


// 创建文件夹
const createDir = (dirs)=>{
  dirs.forEach((item)=>{
    let dir = resolve(item);
    // 不存在则创建
    if(!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
  });
};


// dir文件夹里面是否存在文件
const dirExist = (dir, comp) => {
  const dirArr = fs.readdirSync(dir);
  return [...dirArr].indexOf(comp) > -1;
};



module.exports = {
  dirExist,
  createDir,
  resolve,
  projectName
};
