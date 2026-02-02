// criando array 
let array = ['hugo', 'joao', 'maria', 'marcos', 'ana', 'milton']

//aplicando novos itens ao final 
array.push('lucas')

//removendo item em posição e quantidade específica
array.splice(1, 2)

//usando for tradicional para manipular arrays
for (let i = 0; i < array.length; i++){
    //console.log(`indice: ${i} ${array[i]}`)
}

//usando o forEach para manipular arrays
array.forEach((valor, indice)=>{
    //console.log(`indice: ${indice} ${valor}`)
}) 

//usando o for of para manipular arrays obs: não mostra indice
for(let nome of array){
    //console.log(`${nome}`)
}

//aplicando função filter para filtrar valores especificos em um novo array destinto
const arrayNumeros = [23, 45, 53, 22, 245, 44, 32, 36, 57]
const numerosPares = arrayNumeros.filter((numero) => {
    return numero % 2 === 0
})
const numerosImpares = arrayNumeros.filter((numero) => {
    return numero % 2 != 0
})
// console.log(numerosPares)
// console.log(numerosImpares)

// aplicando função map para mapear um array e criar um novo array destinto
const numerosDobrados = arrayNumeros.map((numero) => {
    return numero * 2
})
// console.log(numerosDobrados)

// usando a função new set para remover e verificar duplicidades em arrays
const nums = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9]
const numSemDuplicatas = new Set(nums)
// console.log(nums)
// console.log(numSemDuplicatas)
let num = new Set()

num.add(1)
num.add(2)
num.add(2)
num.add(7)
// console.log(num)

//usando o new map para lidar com array e suas chaves
let lista = new Map()

lista.set('nome', 'Hugo')
lista.set('idade', 18)

// console.log(lista.get('nome'))
// console.log(lista.get('idade'))