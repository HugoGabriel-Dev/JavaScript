const itemsCarrinho = [19, 35.9, 10, 9.9, 23, 28.45, 45.95, 12, 7.5];
let valorTotal = 0;
for (const item of itemsCarrinho) {
  valorTotal += item;
}
let valorTotalDesconto = valorTotal - (valorTotal * 20) / 100;
console.log("Valor do carrinho:", Number(valorTotal.toFixed(1)));
console.log("Valor do carrinho com 20% de desconto:", valorTotalDesconto);

const tarefas = [
  "Estudar JS",
  "Fazer exercícios",
  "Ler documentação",
  "Descansar",
];
const concluidas = [true, false, true, false];

let tarefasPendentes = tarefas.filter((tarefa, indice) => {
  return concluidas[indice] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);
