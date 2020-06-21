/*
Служит для того, чтобы создавать более простой и уникальный
интерфейс для взаимодействия с различными классами.
Более публичный интерфейс, позволяющий упростить некоторые взаимодействия.
Простым примером фасада может быть библиотека jQuery.
*/
class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) { }

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({ id, customer, details })
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Sonik', 'service', 'forsenW'))
console.log(registry.register('Eightbot', 'product', 'Kappa'))