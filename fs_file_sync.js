// it goes line by line 
// if there is more user it take more time so that we go for async

const {readFileSync, writeFileSync} = require('fs')
console.log("Start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync("./content/res_sync.txt", 
            `Here is the result ${first}, ${second}`,
            {flag:'a'})

// console.log(first, second);

console.log("Done with this task") 
console.log("Start another task")