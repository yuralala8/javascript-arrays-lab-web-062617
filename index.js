const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
// function kittens() {
//   var kittens = ["Milo", "Otis", "Garfield"]
//   return kittens
// }

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kitties
  kitties = [...kittens, name]
  return kitties
}

function prependKitten(name) {
  var kitties
  kitties = [name, ...kittens]
  return kitties
}

function removeLastKitten() {
  var kitties
  kitties = kittens.slice(0, kittens.length - 1)
  return kitties
}

function removeFirstKitten() {
  var kitties
  kitties = kittens.slice(1)
  return kitties
}
