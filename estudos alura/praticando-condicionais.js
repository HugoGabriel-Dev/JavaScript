// acesso liberado?
const idade = 17;

const stats = idade >= 18 ? "acesso liberado!" : "acesso negado!";

console.log(stats);

// classificando temperatura
const temperatura = 12;

if (temperatura < 15) {
  console.log("frio");
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log("agradável");
} else {
  console.log("quente");
}

// Classificação de idades para uma atividade
const faixa = 18;

if (faixa <= 12) {
  console.log("infantil");
} else if (faixa > 12 && faixa < 18) {
  console.log("juvenil");
} else {
  console.log("adulto");
}

// Horário de funcionamento da loja
const horario = 6;

switch (horario) {
  case 0:
    console.log("Loja aberta em horario especial: 10Hrs ás 14Hrs");
    break;
  case 1:
    console.log("Loja aberta em horario normal: 9Hrs ás 18Hrs");
    break;
  case 2:
    console.log("Loja aberta em horario normal: 9Hrs ás 18Hrs");
    break;
  case 3:
    console.log("Loja aberta em horario normal: 9Hrs ás 18Hrs");
    break;
  case 4:
    console.log("Loja aberta em horario normal: 9Hrs ás 18Hrs");
    break;
  case 5:
    console.log("Loja aberta em horario normal: 9Hrs ás 18Hrs");
    break;
  case 6:
    console.log("Loja aberta em horario especial: 10Hrs ás 14Hrs");
    break;
  default:
    console.log("digite um número correspondente a um dia da semana");
    break;
}

// Validação de login
const usuario = "hugo";
let situacao;
situacao = usuario === "admin" ? "Login bem-sucedido!" : "Usuário inválido.";
console.log(situacao);

// Verificando compatibilidade de tipos de frutas
const nomeFruta = "abacaxi";
if (nomeFruta === "laranja" || nomeFruta === "abacaxi") {
  console.log("fruta compátivel com a receita.");
} else {
  console.log("fruta incompátivel com a receita.");
}

// Controle de acesso com manutenção
const verificacao = "arroz";
let carrinhoVazio = "";
if (verificacao === "") {
  carrinhoVazio = true;
} else {
  carrinhoVazio = false;
}

if (carrinhoVazio !== true) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
}

// Verificando o status de pagamento
const stts = "pendente";
switch (stts) {
  case "pendente":
    console.log("Pagamento pendente");
    break;
  case "aprovado":
    console.log("Pagamento aprovado");
    break;
  case "recusado":
    console.log("Pagamento recusado");
    break;
  default:
    console.log("situação indisponivel");
}

// Verificar acesso a nível do jogo
const pontos = 50;
const vidas = 1;
if (pontos > 49 && vidas > 0) {
  console.log("Próximo nível liberado!");
} else {
  console.log("Não pode avançar para o próximo nível.");
}

// Nível de bateria do dispositivo
const nivelBateria = 100;
let sts;
sts =
  nivelBateria < 20
    ? "CRÍTICA"
    : nivelBateria >= 20 && nivelBateria <= 80
      ? "MODERADA"
      : "CHEIA";
console.log(sts);
