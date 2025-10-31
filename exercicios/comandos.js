let listaNumeros = [];
const num = document.querySelector("#num");

const buttonAdd = document.querySelector("#Adicionar");
buttonAdd.addEventListener("click", () => {
  const n = Number(num.value);
  num.value = "";
  if (n > 0 && n <= 100)
    if (listaNumeros.includes(n)) {
      alert(`o número ${n} já está na lista: ` + "[" + listaNumeros + "]");
    } else {
      listaNumeros.push(n);
      num.innerHTML = "";
      alert(`Número ${n} adicionado com sucesso!`);
    }
  else {
    alert("o Número deve estar entre 1 e 100!");
  }
});
const buttonaFim = document.querySelector("#fim");
buttonaFim.addEventListener("click", () => {
  if (listaNumeros.length === 0) {
    alert("ADICIONE PELO MENOS UM NÚMERO!");
  } else {
    const tabela = document.querySelector("#tabela");
    let digitos = listaNumeros.length;
    let maior = Math.max(...listaNumeros);
    let menor = Math.min(...listaNumeros);
    let soma = listaNumeros.reduce((a, b) => a + b, 0);
    let media = soma / digitos;

    tabela.innerHTML = `
        <p>ao todo temos ${digitos} números</p>
        <p>o maior digito foi ${maior}</p>
        <p>o menor digito foi ${menor}</p>
        <p>a soma de todos os números foi ${soma}</p>
        <p>a média de todos esses números é igual a ${media}</p>
        `;
  }
});