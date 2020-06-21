/*
С помощью данного патерна мы имеем возможность добавлять
новое поведение или функционал для существующих классов
*/

class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }

  return server
}

function azure(server) {
  server.isAzure = true
  server.port += 10e3 / 2
  return server
}

const s1 = aws(new Server('12.23.45.53', 8888))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('33.22.55.22', 1337))
console.log(s2.isAzure)
console.log(s2.url)