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
  const status = valor > 50 ? '(Alerta)' : '(Ok)'
  console.log(`${chave}: ${valor} ${status}`)
}
