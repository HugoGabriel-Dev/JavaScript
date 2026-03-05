// Acessando e modificando elementos de um array
const listaDeCompras = ["arroz", "feijão", "macarrão", "tomate"];
listaDeCompras[listaDeCompras.length - 1] = "fruta";
console.log("Segundo item da lista:", listaDeCompras[1]);
console.log(listaDeCompras);

// Percorrendo listas com for
const despesas = [120, 80, 45.5, 200, 60];
let total = 0;
for (let i = 0; i < despesas.length; i++) {
  total += despesas[i];
}
console.log("Total de despesas:", total);

// Exibindo nomes com for...of
const estudantes = ["Carla", "João", "Marina", "Lucas", "Beatriz"];
for (let nomes of estudantes) {
  console.log(`Estudante: ${nomes}`);
}
// Exibindo mensagens com forEach()
const mensagens = [
  "Pedido confirmado",
  "Pagamento aprovado",
  "Produto enviado",
];
mensagens.forEach((valor) => {
  console.log("Notificação:", valor);
});

// Adicionando e removendo itens de uma lista
const tarefas = ["Estudar", "Lavar roupa", "Fazer compras"];

tarefas.push("Pagar boletos");
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);

// Clonando um array
const pedidos = ["camiseta", "calça", "tênis"];
// const copia = [...pedidos, 'boné']
const copia = pedidos.slice();
copia.push("boné");

console.log(`Array original:`, pedidos);
console.log(`Array cópia:`, copia);

// Buscando itens em uma lista
const livros = ["Dom Casmurro", "O Cortiço", "Capitães da Areia", "Iracema"];
const livroProcurado = "O Cortiço";

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}

// Transformando dados com map()
const precos = [100, 80, 50, 120];
const precosDesconto = precos.map((preco) => {
  return preco - (preco * 10) / 100;
});

console.log("Preços com desconto:", precosDesconto);

// Filtrando valores
const participantes = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 19 },
  { nome: "Daniel", idade: 15 },
  { nome: "Eduarda", idade: 25 },
];

const participantesMaiores = participantes.filter((pessoa) => {
  if (pessoa.idade > 18) {
    console.log(`Acesso liberado para: ${pessoa.nome}`);
  } else {
    false;
  }
  return pessoa.idade >= 18;
});

const aprovados = participantesMaiores.map((pessoa) => pessoa.nome);

console.log(aprovados);

// Painel de controle de produtos
const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let relatorio = ''
let produtosVendasAltas = ''
let totalVendasProduto = ''
const maisLucrativo = {nome: '', totalVendas: 0 }

produtos.forEach((p)=>{

  const totalVendidoProduto = p.preco * p.quantidadeVendida; 

  relatorio += `produto: ${p.nome} | Preço: ${p.preco} | Quantidade: ${p.quantidadeVendida}\n`

  if (p.quantidadeVendida > 100){
    produtosVendasAltas += `${p.nome}\n`
  }

  totalVendasProduto += `${p.nome}: R$ ${totalVendidoProduto}\n`; 
  
  if (totalVendidoProduto > maisLucrativo.totalVendas){
    maisLucrativo.nome = p.nome
    maisLucrativo.totalVendas = totalVendidoProduto
  }

})

console.log('Relatório de produtos vendidos:\n')
console.log(relatorio)
console.log(`Produtos com alto volume de vendas (> 100 unidades):\n${produtosVendasAltas}`)
console.log('Total de vendas por produto:')
console.log(totalVendasProduto)
console.log("Produto mais lucrativo:")
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`)