let frutas = ["banana", "maça", "uva", "limão", "peira"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`indice: ${i} ${frutas[i]}`);
}

frutas.push("melancia"); // adiciona um item a lista no final
frutas.shift(); // remove o primeiro item

frutas.forEach((valor, indice) => {
  console.log(`indice: ${indice} ${valor}`);
});

for (const fruta of frutas) {
  console.log(fruta);
}

const notas = [10, 6, 6, 6];
let soma = 0;
for (const nota of notas) {
  soma += nota;
}

let media = soma / notas.length;
if (media >= 7) {
  console.log("aprovado");
} else {
  console.log("reprovado");
}

const nomesDeUsuarios = ["Hugo", "Marcos", "João", "Maria", "Ana"];

nomesDeUsuarios.forEach((valor, indice) => {
  console.log(`olá ${valor}`);
});

const precosProdutos = [23, 30, 10, 40.5, 19.9];

console.log("lista antes dos descontos", precosProdutos);

const produtosDesconto = precosProdutos.map((preco) => {
  return preco - (preco * 10) / 100;
});
console.log("lista depois dos descontos", produtosDesconto);

const numeros = [23, 8, 18, 17, 19, 20, 13];

const pessoasMaiores = numeros.filter((numeroMaior) => {
  return numeroMaior >= 18;
});

console.log("todos as idades:", numeros);
console.log("todos as idades acima de 18:", pessoasMaiores);
