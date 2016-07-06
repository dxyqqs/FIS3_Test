//fis config
var path = require('path');
var init = require("./package.json");
var projectPath = "/app/"+init.testPath+"/";
console.log(projectPath);

// fis.set('projec.ignore',function(){
//   var ignore = fis.get('projec.ignore');
//   [].push.call(ignore,['.git/**','clone/**','dist/**','.gitignore']
//   return ignore;
// }());

fis.match("/app/("+init.testPath+"/**)",{
  release:'$1'
})
//fis.hook('commonjs');
// fis.match('/copm/**/*.js',{
//   isMod:true,
//   release:'/static/$0'
// })
// fis.match('::package',{
//   postpackage:fis.plugin('loader',{
//     resourceType:'commonjs',
//     useInlineMap:true
//   })
//
// })
// fis.media('prod')
//    .match('*.js',{
//      packTo:'/static/libs/main.js'
//    })
//
