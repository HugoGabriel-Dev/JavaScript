// Gerando mensagens personalizadas
function saudacao(nome = "") {
  if (nome) {
    console.log("Olá,", nome, "bem vindo(a)");
  } else {
    console.log("Olá, bem vindo(a)");
  }
}

saudacao("matheus");

// Calculando desconto
function calcularDesconto(preco, desconto) {
  const valorfinal = preco - (preco * desconto) / 100;
  return valorfinal;
}

console.log(calcularDesconto(190, 10));

// Calculando a média de duas notas
const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(calcularMedia(7, 6));

// Verificando se um número é par ou ímpar
const verificarParidade = (numero) => {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
};

console.log(verificarParidade(8));
console.log(verificarParidade(5));

//Cálculo de frete por distância
function calcularFrete(numero) {
  if (numero <= 5) return 5;
  else if (numero <= 20) return numero * 0.5;
  else return 20;
}

console.log(calcularFrete(4));
console.log(calcularFrete(17));
console.log(calcularFrete(21));

// Mensagem pós-porcessamento
function processarPedido(nome, tipoCliente, callback) {
  console.log(`Processando pedido de ${nome}....`);
  callback(nome, tipoCliente);
}

function menssagemCliente(nome, tipo) {
  if (tipo === "vip") {
    console.log(
      `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`,
    );
  } else if (tipo === "novo") {
    console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
  } else {
    console.log(`Obrigado pela sua compra, ${nome}!`);
  }
}

processarPedido("Hugo", "vip", menssagemCliente);
processarPedido("Hugo", "novo", menssagemCliente);
processarPedido("Hugo", "normal", menssagemCliente);

//Mensagem com atraso
function responderUsuario(usuario, respostaUsuario) {
  respostaUsuario(usuario);
}

function resposta(nome) {
  setTimeout(() => {
    console.log("Olá,", nome, "Aqui está a resposta para sua dúvida.");
  }, 3000);
  console.log("Processando sua pergunta....");
}

// responderUsuario("Hugo", resposta);

// Avaliando a pontuação de um usuários
function avaliarDesempenho(num, callback) {
  console.log(`Pontuação: ${num}`);
  callback(num);
}

function mensagem(pontuacao) {
  if (pontuacao >= 70) console.log("Parabéns! Você foi aprovado!");
  else if (pontuacao >= 50) console.log("Ops... Precisa de reforço");
  else console.log("Você foi reprovado...");
}

avaliarDesempenho(49, mensagem);

// Classificador de consumo elétrico
function calcularConsumo(potencia, horasPorDia) {
  return (potencia * horasPorDia * 30) / 1000;
}
function classificarConsumo(consumo) {
  if (consumo < 50) return "Baixo consumo";
  else if (consumo < 199) return "Consumo moderado";
  else return "Alto consumo";
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
  console.log(
    `${nomeAparelho} tem consumo de ${consumo} e é classificada como ${classificacao}."`,
  );
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(15000, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

// Sistema de sorteio com avaliação de participantes

const sorteio = (lista) => {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
};

const avaliacao = (pontuacao) => {
  if (pontuacao > 80) {
    console.log("Parabéns, você foi premiado!");
  } else if (pontuacao > 50) {
    console.log("Você quase conseguiu! Fique de olho nos próximos sorteios.");
  } else {
    console.log("Infelizmente, não foi dessa vez.");
  }
};

const exibir = (participantes) => {
  console.log("Realizando sorteio....");
  setTimeout(() => {
    console.log(`Participante sorteado: ${participantes.nome}`);
    console.log(`Pontuação: ${participantes.pontuacao}`);
    avaliacao(participantes.pontuacao);
  }, 3000);
};

function realizarSorteio(participantes) {
  const sorteado = sorteio(participantes);
  exibir(sorteado);
}

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 },
];

realizarSorteio(participantes);

// Contagem regressiva recursiva

const contar = (f) => {
  if (f <= 0) {
    console.log("Lançamento....");
  } else {
    console.log(f);
    contar(f - 1);
  }
};

contar(10)

