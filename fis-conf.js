//fis config
var path = require('path');
var init = require("./package.json");
var filesIgnore = fis.get('project.ignore');
[].push.apply(filesIgnore,['.git/**','clone/**','dist/**','.gitignore',"LICENSE"]);
fis.set('project.ignore',filesIgnore);
fis.match("/app/**",{
  release:false
})
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
