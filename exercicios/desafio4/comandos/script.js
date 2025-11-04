const listaNumeros = []
let input = document.querySelector('#num')

const buttonadd = document.querySelector("#Adicionar")
buttonadd.addEventListener('click', () =>{
   let num =  Number(input.value)
   input.value = ""
    if(num < 1 || num === "" || num > 100){
        alert('Valor já existe ou é inválido!')
    }else{
        if(listaNumeros.includes(num)){
            alert(`O valor ${num} já está na lista, tente outro!`)
        }else{
            let tabela = document.querySelector("#tab")
            let op = document.createElement('option')
            op.text = `Valor ${num} adiconado`
            tabela.appendChild(op)
            listaNumeros.push(num)
        }
   }
})

const buttonfim = document.querySelector("#finalizar")
buttonfim.addEventListener('click', () =>{
    const res = document.querySelector("#resultado")
    let total = listaNumeros.length
    let maior = Math.max(...listaNumeros)
    let menor = Math.min(...listaNumeros)
    let soma = listaNumeros.reduce((a, b) => a + b, 0)
    let media = soma / total
    res.innerHTML = `
    <p>O total de números foi ${total}</p>
    <p>O maior foi ${maior}</p>
    <p>O menor foi ${menor}</p>
    <p>A soma de todos os números foi ${soma}</p>
    <p>A média de todos os números foi ${media}</p>
    `
})