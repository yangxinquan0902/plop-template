const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const DataHub = require('macaca-datahub');
const datahub = new DataHub();


function resolve(dir) {
  return path.join(__dirname, dir);
};

// src目录下的文件夹 -- 配置别名
const alias = fs.readdirSync(resolve('src')).reduce((memo, f) => {
  memo[f] = resolve(`src/${f}`);
  return memo;
}, {});


const datahubConfig = {
  port: 5678,
  store: path.join(__dirname, 'data'),
  proxy: {
    '^/api': {
      hub: 'sample',
    },
  },
  showBoard: true,
};

module.exports = {
	mode:"development",
	entry:"./src/app.js",
	resolve: {
	    alias: {
				...alias,
	      '@': path.resolve(__dirname, 'src'),
	      vue$: 'vue/dist/vue.esm.js',
	    },
	    extensions: ['.js', '.vue', '.json', '.less'],
	},
	devServer:{
		hot:true,
		open:true,
		port: 9999,
		after: () => {
	        datahub.startServer(datahubConfig)
	        .then(() => {
		      	console.log('datahub ready');
		    	});
	  },
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:"vue-loader"
			},
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				use:["style-loader","css-loader"]
			},
			{
				test:/\.less$/,
				use:["style-loader","css-loader","less-loader"]
			}
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
