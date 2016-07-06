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

fis.hook('commonjs',{
    baseUrl:"/app/"+init.testPath+"/compoent"
});

fis.match("/app/"+init.testPath+"/comp/(**)",{
    release:init.testPath+"/component/$1"
})

fis.match("/app/"+init.testPath+"/comp/(**.js)",{
  isMod:true
})

fis.match('::package',{
   postpackager:fis.plugin('loader',{
     resourceType:'commonjs',
     useInlineMap:true
   })

})

//fis.match('*.js', {
//    packTo: init.testPath+'/aio.js'
//});

