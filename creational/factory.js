class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 228
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name
    this.cost = 322
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 1488
  }
}

class ShortPoweredMembership {
  constructor(name) {
    this.name = name
    this.cost = 10e6
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standart: StandartMembership,
    premium: PremiumMembership,
    spm: ShortPoweredMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Sonik', 'simple'),
  factory.create('Eightbot', 'standart'),
  factory.create('Pinkie', 'premium'),
  factory.create('Saonik', 'spm'),
  factory.create('Who')
]

members.forEach(member => {
  member.define()
})