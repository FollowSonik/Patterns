/*
Определяет некоторый скелет будущего алгоритма, но при этом делегирует
создание конкретного функционала в дочерние классы: определяет некоторую структуру,
а дочерние классы уже реализовывают конкретный функционал, при этом не изменяя
поведение базового класса.
*/
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() { }
  secondResponsibility() { }

  wOMEGALULrk() {
    return `${this.name} ${this.responsibilities()} and ${this.secondResponsibility()}`
  }

  getPaid() {
    return `${this.name} have ${this.salary} salary.`
  }
}

class DickSucker extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'procrastinating'
  }

  secondResponsibility() {
    return 'doing'
  }
}

class Who extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'something'
  }

  secondResponsibility() {
    return 'anything'
  }
}

const dicksucker = new DickSucker('Sonik', 0)
console.log(dicksucker.getPaid())
console.log(dicksucker.wOMEGALULrk())

const somebody = new Who('Who', 13373228)
console.log(somebody.getPaid())
console.log(somebody.wOMEGALULrk())