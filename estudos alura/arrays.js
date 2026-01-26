let nomes = ["Hugo", "joao", "maria", "carlos", "edson"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`nome:${nomes[i]}`);
  console.log(`posicao ${i}\n`);
}

let frutas = ["uva", "maça", "morango", "mertilo"];

console.log(`lista de frutas antes de tirar: ${[frutas]}`);
frutas.push("melancia");
frutas.shift();
console.log(
  `essa e a lista depois de tirar a primeira e colocar a ultima: ${frutas}`,
);

let cidades = ['pe', 'rj', 'sp', 'mg', 'ce']
console.log("ao total são", cidades.length, 'cidades')


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
let soma = 0
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
console.log(soma)