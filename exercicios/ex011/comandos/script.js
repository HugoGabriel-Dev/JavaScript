function enviar(){
    let inicio = Number(document.getElementById('ini').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')

    if (passo <= 0 || passo == ""){
        alert('opção inválida!, considerando passo = 1')
        passo = 1
    }

    if (inicio == "" || fim == "" ){
        res.innerHTML = 'impossivel de contar'
    }else{
        res.innerHTML = 'contando:'

        let conteiner = document.getElementById('resul')
        let cont = document.createElement('p')
        conteiner.appendChild(cont)

        for (let c = inicio; c <= fim; c += passo){
            cont.innerHTML += ` ${c} 👉 `
        }
    }    
}