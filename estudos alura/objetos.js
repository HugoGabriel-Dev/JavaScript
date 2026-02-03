//criação de um objeto simples de uma pessoa e seus dados
const hugo = {
  nome: "hugo",
  idade: 18,
  profissao: "entregador",
};

//acessando dados do objeto no console com ponto

//console.log(hugo.nome)
//console.log(hugo.idade)
//console.log(hugo.profissao)

//acessando dados do objeto no console com chave

//console.log(hugo['nome'])
//console.log(hugo['idade'])
//console.log(hugo['profissao'])

//modificando propriedade existente por outra

hugo.idade = 23;
hugo.profissao = "medico";
// console.log(hugo);

//adicionando uma nova propriedade ao objeto e adicionando mais opcoes a ela

hugo.cidade = ["JB", "RE"];
hugo.cidade.push("OL");
// console.log(hugo);

//criando funções com objetos
const funcao = (pessoa) => {
  return (
    "Nome: " +
    pessoa.nome +
    ", idade: " +
    pessoa.idade +
    ", profissão: " +
    pessoa.profissao +
    ", cidade: " +
    pessoa.cidade
  );
};

// console.log(funcao(hugo));

//lista de pessoas (array) com objetos dentro
const pessoa1 = {
  nome: "joao",
  idade: 23,
};
const pessoa2 = {
  nome: "maria",
  idade: 17,
};
const pessoa3 = {
  nome: "marcos",
  idade: 34,
};

const listaPessoas = [];
listaPessoas.push(pessoa1);
listaPessoas.push(pessoa2);
listaPessoas.push(pessoa3);
listaPessoas.forEach((valor, indice) => {
  console.log(
    `Pessoa${indice + 1} : Nome: ${valor.nome} | Idade: ${valor.idade}`,
  );
});
