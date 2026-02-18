// Contagem de números
let numeroFinal = 5;
for (let i = 0; i <= numeroFinal; i++) {
  console.log(i);
}

// Contagem regressiva
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Lançar");

// Listando números pares
for (let i = 0; i <= numeroFinal; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Exibindo os caracteres

let senha = "marialuiza9826";
for (let i = 0; i < senha.length; i++) {
  console.log(`caracter ${i + 1}: ${senha[i]}`);
}

// Solicitando nomes até digitar ''fim''
const entradas = ["Ana", "Bruno", "fim", "carla", "Daniel"];
let i = 0;
while (entradas[i] !== "fim") {
  console.log("nome:", entradas[i]);
  i++;
}

// Verificando o acesso restrito
for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("Número proibido encontrado! Encerrando...");
    break;
  }
  console.log(i);
}

// Somando os primeiros N números
const totalDias = 20;
let dia = 1;
let economia = 0;

do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
console.log(economia);

// Temporizador de aquecimento
const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
for (let i = 0; i <= tempoMinimo; i++) {
  console.log("Aquecendo... segundo", i);

  if (i == 3) {
    console.log("Temperatura ideal atingida.");
  }
}

// Registro de caixas processadas
const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let totalMax = 0;
for (let i = 0; i < caixas.length; i++) {
  if (totalMax < 5) {
    if (caixas[i] >= 0) {
      console.log("Caixa processada:", caixas[i]);
      totalMax++;
    } else {
      console.log("Caixa danificada, ignorada.");
    }
  } else {
    console.log("Limite de caixas processadas atingido!");
  }
}

// Validação de login
const tentativas = ["1234", "admin", "secreto", "hugo"];
const senhaCorreta = "secreto";
let numerosTentativas = 0;
for (let i = 0; i < tentativas.length; i++) {
  if (numerosTentativas < 3) {
    if (tentativas[i] === senhaCorreta) {
      console.log("Acesso permitido!");
      break;
    } else {
      console.log(`Tentativa ${i + 1} inválida.`);
      numerosTentativas++;
    }
  } else {
    console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
  }
}
