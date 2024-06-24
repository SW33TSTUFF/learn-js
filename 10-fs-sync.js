const { isUtf8 } = require('buffer');
const {readFileSync, writeFileSync, write, writeFile} = require('fs'); // use the method rightaway
// we can also use it like this
// const fs = require('fs');
// fs.readFileSync to access it too

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result ${first}, ${second}`, 
    {flag: 'a'}
)


console.log('done with this task')
console.log('starting the next task')