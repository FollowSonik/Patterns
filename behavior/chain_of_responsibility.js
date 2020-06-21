/*
Позволяет последовательно вызывать у одного того же объекта какой-то
набор операций и последовательно их модифицировать.
Как пример библиотека jQuery
*/

class MyMultiply {
  constructor(initialValue = 322) {
    this.productOfNumber = initialValue
  }

  multiply(value) {
    this.productOfNumber *= value
    return this
  }
}

const productOfNumbers = new MyMultiply()
console.log(`Time is [${new Date().toLocaleTimeString()}] and the product of numbers is (${productOfNumbers
  .multiply(2)
  .multiply(100)
  .multiply(3223)
  .productOfNumber})`.replace(/\s/g, '\n'))