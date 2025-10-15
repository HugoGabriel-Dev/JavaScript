
//funcão para pegar o valor dentro do input e transformar em número
function pegar(){
    const date = new Date()
    const ano = date.getFullYear()
    const nasc = Number(document.querySelector("#nascimento").value)
    const idade = ano - nasc
        if(nasc > ano || nasc == ""){
            alert("[ERRO], Coloque uma opção válida!")
            return null
        }else{
            return idade
        }
}

//função para conferir os valores da caixa de sexo
function sexualidade(){
    let idade = pegar()
    let res = document.getElementById("res")
    let sexo = document.getElementsByName("masc")
        if (sexo[0].checked && idade != null){
            res.innerHTML = `Você é um Homem de ${idade} anos.`
            
        }else if(sexo[1].checked && idade != null){
            res.innerHTML = `Você é uma mulher de ${idade} anos.`
        }else{
            res.innerHTML = "Preencha os dados acima para ver o resultado!"
        }
}

//função para dar start na verificação de idade e sexo
function verificar(){
    pegar()
    sexualidade()
}
