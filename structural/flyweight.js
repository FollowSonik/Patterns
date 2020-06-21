/*
Служит для того, чтоб мы могли эффективно передавать и
взаимодействовать с данными через различные типы объектов.
Пример: загрузка различных изображений.
Браузеры исп. flyweight паттерны для того, чтобы избежать повторной
загрузки тех элементов, которые уже были загружены.
К данному патерну относятся такие понятия кэширование, сохранение памяти и др.
*/
class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

const BMWX6 = factory.create('BMW', 10000)
const AUDI = factory.create('AUDI', 12000)
const BMWX3 = factory.create('BMW', 8000)
console.log(BMWX6 === BMWX3)