function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    let fano = document.getElementById('nascimento')
    let form_ano = fano.value
    let res = document.querySelector('p#res')
    if (form_ano.length == 0 || (form_ano > ano)){
        alert('[ERRO], idade invalida!')
    }else{
       let sex = document.getElementsByName('masc')
       let idade = ano - Number(form_ano)
       genero = ""
       if (sex[0].checked){
        genero = 'Homem'
       }else if (sex[1].checked){
        genero = 'Mulher'
       } 
       res.textContent = `Você é ${genero} com ${idade} anos`
    }

}