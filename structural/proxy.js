/*
Прокси позволяет ставить ловушки на поля объектов, на вызов ф-ций.
Избавляет от лишних запросов на сервер.
*/
function networkFetch(url) {
  return `${url} - answer from the server.`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - answer from the cache`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('twitch.tv'))
console.log(proxiedFetch('dev.twitch.com'))
console.log(proxiedFetch('twitch.tv'))