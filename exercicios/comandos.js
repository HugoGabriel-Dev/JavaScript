const valor = document.querySelector('#num')
let listaValores = []

const buttonAdd = document.querySelector('#Adicionar')
buttonAdd.addEventListener('click', () => {
  
  let valorNum = Number(valor.value)
  valor.value = ""
  if (valorNum < 1 || valorNum > 100 || valorNum === "" || listaValores.includes(valorNum)){
    alert('Erro, porfavor digite um número entre 1 e 100! ou não digitado!')
  }else{
    listaValores.push(valorNum)
    alert('Número adicionado com sucesso!')
  }
  
})

const buttonFim = document.querySelector('#Finalizar')
buttonFim.addEventListener('click', () => {

  let total = listaValores.length
  let maior = Math.max(...listaValores)
  let menor = Math.min(...listaValores)
  let soma = listaValores.reduce((a, b) => a + b, 0)
  let media = soma / total

  let res = document.querySelector('#tabela')
  res.innerHTML = `
  <p>Sua lista de números foi: [${listaValores}]</p>
  <p>Foram digitados ao todo ${total} números</p>
  <p>O maior número foi ${maior}</p>
  <p>O menor número  foi ${menor}</p>
  <p>A soma de todos os números foi: ${soma}</p>
  <p>A média dos números foi: ${media}</p>
  `
})