//fis config

var init = require("./package.json");
var filesIgnore = fis.get('project.ignore');
[].push.apply(filesIgnore,['.git/**','clone/**','dist/**','.gitignore',"LICENSE","npm.debug.log","README.md"]);
fis.set('project.ignore',filesIgnore);
fis.match("/app/**",{
  release:false
})
fis.match("/app/("+init.testPath+"/**)",{
  release:'$1'
})
fis.hook('commonjs');
fis.match("/app/"+init.testPath+"/copm/(**.js)",{
  isMod:true,
  release:'component/$1'
})
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
