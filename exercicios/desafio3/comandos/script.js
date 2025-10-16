
//funcão para pegar o valor dentro do input e transformar em número
function pegar(){
    const date = new Date()
    const ano = date.getFullYear()
    const nascinput = document.querySelector("#nascimento")
    const nasc = Number(nascinput.value) 

    const idade = ano - nasc
        if(nasc > ano || nasc == "" || nasc <= 1925){
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
    let img = document.getElementById("img")
        if (sexo[0].checked && idade != null){
            res.innerHTML = `Você é um Homem de ${idade} anos.`
            
        }else if(sexo[1].checked && idade != null){
            res.innerHTML = `Você é uma mulher de ${idade} anos.`
        }else{
            res.innerHTML = "Preencha os dados acima para ver o resultado!"
        }
        //verificação homem
        if (idade <= 6 && sexo[0].checked && idade != null){
            img.src = 'imagens/menino_homem.png'
        }else if(idade <= 21 && sexo[0].checked && idade != null){
            img.src = 'imagens/jovem_homem.png'
        }else if(idade <= 60 && sexo[0].checked && idade != null){
            img.src = 'imagens/adulto_homem.png'
        }else if(idade > 60 && sexo[0].checked && idade != null){
            img.src = 'imagens/velho_homem.png'
        }
        //verificação mulher
            if (idade <= 6 && sexo[1].checked && idade != null){
            img.src = 'imagens/menina_mulher.png'
        }else if(idade <= 21 && sexo[1].checked && idade != null){
            img.src = 'imagens/jovem_mulher.png'
        }else if(idade <= 60 && sexo[1].checked && idade != null){
            img.src = 'imagens/adulto_mulher.png'
        }else if(idade > 60 && sexo[1].checked && idade != null){
            img.src = 'imagens/velho_mulher.png'
        }
        
}

//função para dar start na verificação de idade e sexo
function verificar(){
    pegar()
    sexualidade()

    let input = document.getElementById('nascimento')
    input.value = ""

}
