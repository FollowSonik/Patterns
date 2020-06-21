/*
Позволяет создавать определённую абстрактную оболочку над функционалом,
который позволяет управлять через другой объект и тем самым записывая
определённые состояния, которые были вызваны.
Характерным примером command-патерна является Redux.
*/
class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))
const squared = x.execute('square')
const cubed = x.execute('cube')
const cmdsExecuted = x.commandsExecuted.join(' and ')

console.log(`${squared} and ${cubed}. Commands which was executed: '${cmdsExecuted}'.`)