const agora = new Date()

let ano = agora.getFullYear()
let mes = agora.getMonth()
let dia = agora.getDate()
let hora = agora.getHours()
let minutos = agora.getMinutes()

let nasc = new Date()
console.log('data formatada (BR):', nasc.toLocaleDateString('pt-BR'))
console.log('data formatada (BR):', nasc.toLocaleDateString('en-US'))
console.log('data formatada (PT):', nasc.toLocaleDateString('pt-PT'))
