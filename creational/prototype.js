const car = {
  wheels: 4,

  init() {
    console.log(`I've ${this.wheels} wheels, my owner is ${this.owner}.`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Sonik'
  }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()