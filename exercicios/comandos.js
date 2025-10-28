const botao = document.querySelector('#contar')

botao.addEventListener('click', () =>{

    const n1 = document.querySelector('#num')
    const tab = document.querySelector('#tab')
    const n =  Number(n1.value)
    n1.value = ""
    tab.innerHTML = ""
        for(let c = 1; c <=10 ; c++){
            let op  = document.createElement('option')
            op.textContent = `${n} x ${c} = ${n*c}`
            tab.appendChild(op)
        }
})


        

// Fatorial

// Crie uma função que calcule o fatorial de um número digitado.

// Contagem personalizada

// O usuário digita início, fim e passo.
// O programa conta conforme os valores e mostra o resultado na tela.

// Lista de números

// O usuário digita números (1 a 100), e o site mostra os valores adicionados.
// No final, mostra:

// Quantos números foram digitados

// O maior e o menor

// A soma e a média

// 🔴 Nível 4 – Desafios extras

// Para quem quer testar lógica e DOM.

// Relógio digital

// Mostre as horas atuais e atualize automaticamente a cada segundo.

// Verificador de palíndromo

// O usuário digita uma palavra, e o programa mostra se ela é um palíndromo (ex: “arara”).

// Simulador de sorteio

// Gere um número aleatório entre 1 e 10 e peça para o usuário tentar adivinhar.
// Mostre se ele acertou e conte o número de tentativas.