let tarefas = []


function addtarefa(){
    //Pega o valor digitado na barra
    const instrucao = document.getElementById("tarefas")
    let tarefa = instrucao.value.trim()
    let mensagem = document.getElementById("msg")

    if (tarefa == ""){
        mensagem.style.color = '#A34743'
        mensagem.textContent = "Erro, Adicione um item a lista!"
    }else{
        //confere cada elemento como listado após seu envio
        mensagem.style.color = '#28A745'
        mensagem.textContent = "Adicionado com sucesso!"
        tarefas.push(tarefa)
        renderizar()
    }

    //Apaga o valor antes posto na barra de palavras
    instrucao.value = ""
}

function renderizar(){
    //seleciona a lista e depois cria itens poara ela
    const listadetarefas = document.getElementById("pai")
    listadetarefas.innerHTML = ""

    let i = 0
    for(i; i < tarefas.length; i++){
        let itensdalista = document.createElement("li")
        itensdalista.textContent = tarefas[i]
        listadetarefas.appendChild(itensdalista)
    }
        
}

