const array = ["Banana", "Orange", "Apple", "Mango"]

let fruit = array.splice(2, 0, "Lemon", "Kiwi")
// (posição, quantidade, "" define os elemementos a serem adicionados)
console.log(array)
console.log(fruit)
