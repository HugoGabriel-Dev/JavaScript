//Desafio 1 - Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
let pessoa = {
  nome: "Hugo",
  idade: 18,
  email: "Hugo12345678@gmail.com.br",
};

const { nome, idade, email } = pessoa;
console.log(nome, idade, email);

//Desafio 2 - Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

let linguagens = ["JavaScript", "Python", "Ruby"];

const [ling1, ling2, ling3] = linguagens;
console.log(ling1, ling2, ling3);

//Desafio 3 - Crie uma função que receba vários números como parâmetros usando o operador rest (...). Utilize um laço for para somar todos os valores recebidos e retorne o total.
function conta(...numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}
console.log(conta(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Desafio 4 - Crie dois arrays de frutas e combine-os usando o operador spread.
let array = ["maça", "uva", "banana"];
let array2 = ["morango", "kiwi", "abacate"];
let combinacao = [...array, ...array2];
console.log(combinacao);

//Desafio 5 - Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
let obj = { nome: "Maria" };
let obj2 = { idade: 22 };
const ob3 = {
  ...obj,
  ...obj2,
};
console.log(ob3);

//Desafio 6 -Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function funcao(nome) {
  if (nome !== undefined && nome !== "") {
    console.log(`Olá, ${nome}.`);
  } else {
    console.log("Olá, visitante.");
  }
}
funcao("JOÂO");

//Desafio 7 - Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
console.log(dia, "/", mes + 1, "/", ano);

//Desafio 8 - Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).
import { soma } from "../estudos alura/calculadora/operacoesMatematicas.js";
console.log(soma(1, 1));

//Desafio 9 - Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.Em seguida, crie dois objetos Livro usando essa função.
function livro(titulo, autor) {
  this.titulo = titulo,
  this.autor = autor;

  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor;
  }
}

let livro1 = new livro("ViagemAoCentroDaTerra", "Hugo");
let livro2 = new livro("JoãoEmaria", "marta");

console.log(livro1.descrever())
console.log(livro2.descrever())
//Desafio 10 - Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

// executado no desafio 9