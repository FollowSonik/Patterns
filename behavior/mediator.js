/*
Позволяет выстраивать плотную и тесную коммуникацию между различными
объектами разного типа. При этом предоставляет централизованную абстракцию,
которая позволяет взаимодействовать группе объектов через друг друга.
*/
class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(msg, to) {
    this.room.send(msg, this, to)
  }

  receive(msg, from) {
    console.log(`@${from.name} -> @${this.name}: <${msg}>`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(msg, from, to) {
    if (to) {
      to.receive(msg, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(msg, from)
        }
      })
    }
  }
}

const sonik = new User('Sonik')
const pinkie = new User('Pinkie')
const eightbot = new User('Eightbot')
// const chat = new User('chat')

const room = new ChatRoom()

room.register(sonik)
room.register(pinkie)
room.register(eightbot)

sonik.send('forsenW', pinkie)
pinkie.send('Kappa', sonik)
eightbot.send('monkaS')
// eightbot.send('forsenW', chat)