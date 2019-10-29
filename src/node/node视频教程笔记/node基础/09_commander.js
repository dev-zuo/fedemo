
const program = require('commander')

// console.log(program)

// program.version('0.0.1')

 
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');