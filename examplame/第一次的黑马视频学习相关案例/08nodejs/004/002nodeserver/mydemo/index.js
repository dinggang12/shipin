/*
模板引擎*/


var template = require('art-template');
// var html = template(__dirname + '/tpl-user.art', {
//     user: {
//         name: 'aui'
//     }
// });

// console.log(html)


// let tpl='<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>';

// let render =template.compile(tpl);

// let ret=render({
// 	list:['apple','orange','banna'];
// });

// console.log(ret);

// let tpl='<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>';

// let ret=template.render(tpl,{
// 	list:['apple','orange','banna'];
// });
// console.log(ret);

var html = template(__dirname + '/score.art', {
   chinese:'120',
   math:'130',
   english:'145',
   summary:'180'
});

console.log(html)