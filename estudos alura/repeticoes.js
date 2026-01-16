// CONTAGEM DE NÚMEROS PARES E IMPARES DE 1 A 100
let totalPares = 0;
let totalImpares = 0;
let cont = 1;

while (cont <= 100) {
  if (cont % 2 == 0) {
    totalPares += 1;
    cont++;
  } else if (cont % 2 != 0) {
    totalImpares += 1;
    cont++;
  }
}

console.log(`o total de numeros pares: ${totalPares}`);
console.log(`o total de numeros impares: ${totalImpares}`);

//SOMA DE NÚMEROS DE 1 A 100
num = 0;
for (contt = 0; contt <= 100; contt++) {
  num += contt;
}
console.log(`a soma de todos os numeros de 1 a 100 é: ${num}`);

//TABUADA DE ALGUM NÚMERO
number = 8;
for (contador = 0; contador <= 10; contador++) {
  console.log(`${number} x ${contador} = ${number * contador}`);
}

//CONTAGEM REGRESSIVA
for(Cont = 10; Cont >= 0; Cont--){
    console.log(Cont)
}