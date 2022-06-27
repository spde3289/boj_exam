const memberArray = ['egoing', 'graphittle', 'leezhce']
console.group('arr loop')
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i])
    i++
}
console.groupEnd('object loop')
const memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}
console.group('object loop')
for(let name in memberObject) {
    console.log(name, memberObject[name])
}
console.groupEnd('object loop')



