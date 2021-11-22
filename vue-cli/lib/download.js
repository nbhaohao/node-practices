const {promisify}  = require('util')

// 将 npm i 的输出流，引入主进程中
const spawn = async (...args) => {
  const {spawn} = require('child_process')
  return new Promise(((resolve, reject) => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  }))
}

module.exports.spawn = spawn

module.exports.clone = async (repo, desc) => {
  const download = promisify(require('download-git-repo'))
  const ora = (await import('ora')).default
  const process = ora(`🕙下载中....${repo}`)
  process.start()
  await download(repo, desc)
  process.succeed()
}