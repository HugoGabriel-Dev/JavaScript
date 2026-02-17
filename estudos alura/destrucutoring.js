const pessoa = {
  nome: "Hugo",
  idade: 18,
};

//pega as propriedades do objeto original
function saudacao({ nome, idade }) {
  console.log(`Olá,`, nome, `você tem`, idade, "anos");
}
saudacao(pessoa);

const frutas = ["uva", "banana", "maça", "morango"];

const [fruta1, fruta2] = frutas;

console.log(fruta1);
console.log(fruta2);
