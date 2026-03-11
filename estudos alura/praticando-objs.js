// Criando um objeto com dados de um produto
const objeto = {
  nome: "arroz",
  preco: 9.9,
  disponivel: true,
};
console.log(objeto);

// Acessando dados com ponto e colchetes
const configuracoes = {
  tema: "",
  notificacao: "",
  idioma: "",
};

console.log((configuracoes.tema = "escuro"));
console.log((configuracoes["idioma"] = "pt-BR"));

// Lidando com arrays dentro de objetos
const receita = {
  nome: "strogonoff",
  igredientes: ["batata", "frango", "creme de leite", "tempero", "agua"],
  tempoPreparo: 2,
};

console.log("Ingrediente complementar:", receita.igredientes[2]);

// Removendo uma propriedade
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  modeloAntigo: "Corolla XEi",
};

delete carro.modeloAntigo;

console.log(carro);

// Iterando um array de objetos
const dispositivos = [
  { nome: "impressora", status: "ativo" },
  { nome: "projetor", status: "ativo" },
  { nome: "scanner", status: "Desativo" },
];

for (let dados of dispositivos) {
  console.log(`Dispositivo: ${dados.nome} | Status: ${dados.status}`);
}

// Criando métodos dentro de um objeto
const maquina = {
  nome: "Esteira Transportadora",
  funcionando: false,
  exibirStatus: function () {
    if (this.funcionando === true) {
      console.log(`a ${this.nome} está em funcionamento.`);
    } else {
      console.log(`a ${this.nome} está parada.`);
    }
  },
};

maquina.exibirStatus();

// Montando um objeto a partir de pares chave-valor
const array = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "Curitiba"],
];

function montarObjeto(lista) {
  let objeto = {};
  for (let i = 0; i < lista.length; i++) {
    objeto[lista[i][0]] = lista[i][1];
  }
  return objeto;
}

console.log(montarObjeto(array));

// Criando um sistema de inspeção
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30,
};

let arrayAvaliadas = Object.keys(relatorio);
let arrayValores = Object.values(relatorio);

console.log(arrayAvaliadas);
console.log(arrayValores);
console.log("Detalhamento:");

for (let [chave, valor] of Object.entries(relatorio)) {
  const status = valor > 50 ? "(Alerta)" : "(Ok)";
  console.log(`${chave}: ${valor} ${status}.`);
}

// Gerando um relatório de manutenção
const manutencao = {
  jan: 2,
  fev: 2,
  mar: 5,
  abr: 5,
  mai: 0,
  jun: 7,
};

let totalDiasParados = 0;
let mesesComManutecao = 0;

for (let [mes, dias] of Object.entries(manutencao)) {
  totalDiasParados += dias;
  if (dias > 0) {
    mesesComManutecao += 1;
  }
}

let mensagem =
  totalDiasParados > 20
    ? "Status: Atenção! Acima do limite anual."
    : "Status: Dentro do limite anual.";

console.log(`Total de dias parados: ${totalDiasParados}`);
console.log(`Meses com man manutenção: ${mesesComManutecao}`);
console.log(mensagem);

// Analisando desempenho de estudantes
const curso = {
  titulo: "curso",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 },
  ],
  gerarRelatorio: function () {
    let totalEstudantes = 0;
    let somaProgresso = 0;
    let mediaTotalProgresso = 0;
    for (let chave of this.estudantes) {
      console.log(
        `Nome: ${chave.nome} | Progresso: ${chave.progresso}% | Situação: ${chave.progresso > 70 ? "Aprovado" : "Em andamento"}`,
      );
      totalEstudantes++;
      somaProgresso += chave.progresso;
    }
    mediaTotalProgresso = somaProgresso / totalEstudantes;
    console.log(`Total de estudantes: ${totalEstudantes}`);
    console.log(`Média geral da turma: ${mediaTotalProgresso}%`);
  },
};

curso.gerarRelatorio();
