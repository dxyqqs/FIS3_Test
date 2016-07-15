# 记录
### 2016-07-06
- 使用fis.get('project.ignore')和fis.set('project.ignore',[])设定忽略的文件夹和文件，另外配合fis.match(query,{release:false})忽略指定的文件
- mod.js练习 如果使用cmd方式引入模块(require(moudle))，那么编译后直接引入相应的模块文件。如果使用amd方式requie([moudle])，将会是脚本异步载入。关于模块化开发请看这如下几篇文章[fis3 commonJs 开发支持](https://github.com/fex-team/fis3-hook-commonjs)、[模块化开发](http://fex-team.github.io/fis3/docs/lv3.html#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91)、[modJS](https://github.com/fex-team/mod#modjs)

### 2016-07-07
- React开发请参考[这篇文章](http://fex.baidu.com/blog/2016/04/develop-react-with-fis3/)

### 2016-07-15
- es6 中模块导出 建议使用export {} 或者 export default name
