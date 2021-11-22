#!/usr/bin/env node

const program = require('commander')
const init = require('../lib/init')

program.version(require('../package.json').version)

program.command('init <name>').description('init project').action(name => {
  init(name)
})

program.parse(process.argv)