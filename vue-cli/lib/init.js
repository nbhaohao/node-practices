const {promisify}  = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone, spawn} = require("./download");
const open = require('open')
const log = content => {
  console.log(chalk.green(content))
}

module.exports = async name => {
  // 打印欢迎页面
  clear()
  const data = await figlet('Welcome!')
  log(data)
  log(`🚀创建项目：${name}`)
  await clone('github:su37josephxia/vue-template', name)
  // 安装依赖
  log("安装依赖")
  await spawn('npm', ['install'], {
    cwd: `./${name}`
  })
  log('✅安装完成！')
  await spawn('npm', ['run', 'serve'], {
    cwd: `./${name}`
  })
  open('http://localhost:8080') 
}