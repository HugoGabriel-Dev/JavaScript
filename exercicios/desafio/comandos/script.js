function addtarefa(){
    //Pega o valor digitado na barra
    let instrucao = document.getElementById("tarefas")
    let tarefa = instrucao.value
    
    //confere cada elemento como listado após seu envio
    document.getElementById("msg").textContent = "adicionado com sucesso!"
    
    //seleciona a lista e depois cria itens poara ela
    let listadetarefas = document.getElementById("pai")
    let itensdalista = document.createElement("li")

    itensdalista.textContent = tarefa

    //adiciona cada item a lista não ordenada
    listadetarefas.appendChild(itensdalista)

    //Apaga o valor antes posto na barra de palavras
    instrucao.value = ""
    
}