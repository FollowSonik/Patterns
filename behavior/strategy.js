/*
Позволяет создавать оболочку для различных интерфейсов, для того,
чтоб мы могли исп. разные алгоритмы и разные интерфейсы в конкретной задаче.
Иными словами, он определяет семейство некоторых алгоритмов, которые наследуют
объекты в неименеяемом порядке.
*/
class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

class OwnCar extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 2
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi))
console.log(commute.travel(new Bus))
console.log(commute.travel(new OwnCar))