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
  console.log('Olá,' ,nome,'Aqui está a resposta para sua dúvida.')
  }, 3000);
      console.log("Processando sua pergunta....");
}

responderUsuario("Hugo", resposta);

// Avaliando a pontuação de um usuário

function avaliarDesempenho(){
  
}

function mensagen(){

}

avaliarDesempenho(82, gerarMensagem)