#! /usr/bin/env node

// console.log('lac-cli working ~')

const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

program
  // 定义命令和参数
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .option('-d, --dev', '安装在本地测试options')
  .action((name, options) => {
    // 打印执行结果
    require('../lib/create.js')(name, options)
  })


// 配置 config 命令
program
  .command('config [value]')
  .description('inspect and modify the config')
  .option('-g, --get <path>', 'get value from option')
  .option('-s, --set <path> <value>')
  .option('-d, --delete <path>', 'delete option from config')
  .action((value, options) => {
    // TODO
    console.log(value, options)
  })

// 配置 ui 命令
program
  .command('ui')
  .description('start add open roc-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    // TODO
    console.log(option)
  })

// 额外的一些样式
program
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('lac', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`lac <command> --help`)} show details\r\n`)
  })


program
   // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')
  
// 解析用户执行命令传入参数
program.parse(process.argv);

