let hugo = {
  nome: "hugo",
  idade: 18,
};

let hugo2 = { ...hugo };
hugo2.idade = 30;
hugo2.profissao = "programador";

console.log(hugo);
console.log(hugo2);

hugo = {
  ...hugo2,
  profissao: "programador senior",
};
console.log(hugo);

const { nome, ...restante } = hugo;

console.log(nome);
console.log(restante);
