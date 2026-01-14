const idade = 17;
idade >= 18
  ? console.log("VOCE PODE BEBER BEBIDA ALCÓLICA")
  : console.log("VOCE NÃO PODE BEBER BEBIDA ALCÓLICA");

const horaAtual = 10;
if (horaAtual > 6 && horaAtual < 12) {
  console.log("bomdia");
} else if (horaAtual > 12 && horaAtual < 18) {
  console.log("boatarde");
} else {
  console.log("boanoite");
}

const num = 0;
if (num >= 1) {
  console.log("positivo");
} else if (num < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

const nota = 3;

if (nota == 10) {
  console.log("A");
} else if (nota >= 8) {
  console.log("B");
} else if (nota >= 6) {
  console.log("C");
} else if (nota >= 4) {
  console.log("D");
} else if (nota >= 0) {
  console.log("E");
}

const numm = 2;
numm % 2 == 0 ? console.log("par") : console.log("impar");

const opcao = 3;
switch (opcao) {
  case 1:
    console.log("cadastrar");
    break;
  case 2:
    console.log("listar");
    break;
  case 3:
    console.log("sair");
    break;
}

const email = "";
if (email === "") {
  console.log("Preencha o campo de e-mail");
} else {
  console.log("email preenchido");
}

let senha = 1234;
let senhaValida = "";

if (senha === 1234) {
  senhaValida = true;
} else {
  senhaValida = false;
}

if (senhaValida) {
  console.log("senha valida");
} else {
  console.log("senha invalida");
}

let emaill = "asads";
let nome = "gcvhf";
let idadee = "hji";
let formularioValido = "";

if (emaill != "" && nome != "" && idadee != "") {
  formularioValido = true;
} else {
  formularioValido = false;
}

if (formularioValido) {
  console.log("Formulário enviado com sucesso");
} else {
  console.log("Por favor, preencha todos os campos corretamente");
}
