// const fs = require('fs')

// sync
// const data = fs.readFileSync(*

// async
// error first callback
// fs.readFile('./config.js', (error ,data) => {
//   if (error) {
//     throw error
//   }
//   console.log(data.toString());
// })

// promisify
(async () => {
  const fs = require('fs')
  const {promisify} = require('util')
  const readFile = promisify(fs.readFile)
  const data = await readFile('./config.js')
  console.log(data.toString());
})()