let hugo = {
  nome: "hugo",
  idade: 18,
};

let hugo2 = { ...hugo };
hugo2.idade = 30;
hugo2.profissao = "programador";

// console.log(hugo);
// console.log(hugo2);

hugo = {
  ...hugo2,
  profissao: "programador senior",
};
// console.log(hugo);

const { nome, ...restante } = hugo;

// console.log(nome);
// console.log(restante);

// spread e rest usado em arrays

const frutas1 = ["maça", "banana", "uva", "kiwi"];
const frutas2 = [...frutas1];
const frutas3 = ["melancia", "morango", "mamao", "ameixa"];
const frutasTotal = [...frutas1, ...frutas3];
const [fruta1, fruta2, ...resto] = frutasTotal;
frutas1.push("pitanga");
console.log(frutas1);
console.log(frutas2);
console.log(frutas3);
console.log(frutasTotal);
console.log(fruta1, fruta2, resto);
