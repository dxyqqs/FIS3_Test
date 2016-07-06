//fis config

var init = require("./package.json");

var filesIgnore = fis.get('project.ignore');

[].push.apply(filesIgnore,['.git/**','clone/**','dist/**','.gitignore',"LICENSE","npm.debug.log","README.md"]);

fis.set('project.ignore',filesIgnore);

fis.set('project.fileType.text','es6,jsx');

console.log(fis.get('project.fileType.text'));

fis.match("/app/**",{
  release:false
})

fis.match("/app/("+init.testPath+"/**)",{
  release:'$1'
})

fis.match("/app/"+init.testPath+"/comp/(**)",{
    release:init.testPath+"/component/$1"
})

fis.match("/app/"+init.testPath+"/**.{jsx,es6}",{
    parser:fis.plugin('babel-5.x'),
    rExt:'js'
})

fis.hook('commonjs');

fis.match("/app/"+init.testPath+"/comp/**.{js,jsx,es6}",{
    isMod:true
})

fis.match("/app/"+init.testPath+"/libs/(**.js)",{
    isMod:true
})

fis.match("/app/"+init.testPath+"/app.es6",{
    isMod:true
})

fis.match("/app/"+init.testPath+"/libs/mod.js",{
    isMod:false
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

