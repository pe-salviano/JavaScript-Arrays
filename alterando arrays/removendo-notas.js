const notas = [10, 6.5, 8, 10, 10]
notas.pop() //pop remove a ultima nota 
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(`A média é ${media}`)