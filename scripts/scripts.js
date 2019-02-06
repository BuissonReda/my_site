#!/usr/bin/env node

const program = require('commander')
const exec = require('child_process').exec;

program
  .version('1.0.0')
  .description('Node.js bash commands')

program
  .command('deploy')
  .description('Push the project in production')
  .action(() => {
    console.log("🍕 git status... 🍕")
    exec(`git st`, function callback(error, stdout, stderr) {
      console.log(stdout)
      console.log("Done.")
      console.log("🍕 git commit... 🍕")
      exec(`git commit -a -m "wip 👨‍💻"`, function callback(error, stdout, stderr) {
        console.log(stdout)
        console.log("Done.")
        console.log("🍕 git push... 🍕")
        exec(`git push`, function callback(error, stdout, stderr) {
          console.log(stdout)
          console.log("Done.")
        })
      })
    })
  })

program
  .command('hi')
  .description('Give informations about this project')
  .action(() => {
    console.log("Hello! This project is the personnal website of Buisson Réda")
  })

program.parse(process.argv)

