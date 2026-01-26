// exercicio 1
function saudacao(nome) {
  console.log("olá, seja bem-vindo", nome);
}
saudacao("lucas");

// exercicio 2
function apresentarPessoa(nome, idade) {
  console.log("Olá, meu nome é", nome, "e tenho", idade, "anos");
}
apresentarPessoa("hugo", 18);

// exercicio 3
function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}
let meuImc = calcularImc(80, 1.79);
console.log("seu imc é", meuImc);

// exercicio 4
function verificarNota(nota) {
  if (nota >= 7) {
    console.log("aprovado");
  } else {
    console.log("reprovado");
  }
}
verificarNota(7);

// exercicio 5
function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(ehPar(2));
console.log(ehPar(3));
console.log(ehPar(8));
console.log(ehPar(9));

// exercicio 6
function soma(num1, num2) {
  return num1 + num2;
}
console.log("a soma dos dois numeros é", soma(4, 4));

// exercicio 7
function calcularTroco(valorCompra, valorPago) {
  if (valorPago >= valorCompra) {
    return valorPago - valorCompra;
  } else {
    console.log("vai trabalhar");
    return (valorCompra, (valorPago = 0));
  }
}
console.log("o troco é", calcularTroco(30, 40));

// exercicio 8
const somaa = (a, b) => {
  return a + b;
};
console.log(somaa(2, 3));

// exercicio 9
function exercutarAcao(acao) {
  acao();
}

function minhaAcao() {
  console.log("executando ação!!!");
}

exercutarAcao(minhaAcao);

// const { setDefaultAutoSelectFamily } = require("net");
// // exercicio 10'
// contador = 0;

// const cont = setInterval(() => {
//   contador++;
//   console.log("contador está em", contador);
//   if (contador >= 10) {
//     clearInterval(cont);
//   }
// }, 1000); //executa em milissegundos(ms)

//desafio
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let conta = 0;

rl.question(
  "(1)Qual o continente mais populoso do mundo?\n(a) europeu\n(b) asiático\n(c) americano\nResposta: ",
  (resp1) => {
    if (resp1 == "b") {
      console.log("Resposta correta!");
      conta++;
    } else {
      console.log("Resposta incorreta!");
    }
    rl.question(
      "(2)Qual o maior animal terrestre do mundo atual?\n(a) rinoceronte\n(b) elefante africano\n(c)hipopótamo\nResposta: ",
      (resp2) => {
        if (resp2 == "b") {
          console.log("Resposta correta!");
          conta++;
        } else {
          console.log("Resposta incorreta!");
        }
        rl.question(
          "Qual a é o maior animal marinho do mundo?\n(a) baleia azul\n(b) tubarão branco\n(c) baleia assassina\nResposta: ",
          (resp3) => {
            if (resp3 == "a") {
              console.log("Resposta correta!");
              conta++;
            } else {
              console.log("Resposta incorreta!");
            }
            console.log(`Você acertou (${conta}/3)`)
          },
        );
      },
    );
  },
);