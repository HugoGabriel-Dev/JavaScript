import { createInterface } from "readline";
import { soma, sub, multi, div } from "./operacoesMatematicas.js";
import { exit } from "process";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número: ", (numero1) => {
  leitor.question("Digite o segundo número: ", (numero2) => {
    leitor.question(
      "Escolha qual é Operação:\n+ )soma\n- )subtração\n* )multiplicação\n/ )divisão\n>",
      (operacao) => {

        operacao = operacao.trim()

        const num1 = Number(numero1);
        const num2 = Number(numero2);

        let resultado = null;

        if (operacao === "+") {
          resultado = soma(num1, num2);
        } else if (operacao == "-") {
          resultado = sub(num1, num2);
        } else if (operacao == "*") {
          resultado = multi(num1, num2);
        } else if (operacao == "/") {
          resultado = div(num1, num2);
        } else {
          console.log("[ERRO], OPERAÇÃO INVÁLIDA!!!");
          exit()
        }

        if (resultado !== null) {
          console.log("o resultado da sua operação é:", resultado);
          leitor.close()
        }
      },
    );
  });
});
