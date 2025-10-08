function verificar() {
  const data = new Date()
  const ano = data.getFullYear()
  const fano = document.getElementById('nascimento')
  const form_ano = Number(fano.value)
  const res = document.querySelector('#img')
  const resc = document.getElementById('res')

  if (form_ano == 0 || form_ano > ano) {
    alert('[ERRO] Idade inválida!')
  } else {
    const sex = document.getElementsByName('masc')
    const idade = ano - Number(form_ano)
    let genero = ''
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/menino_homem.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/jovem_homem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto_homem.png')
      } else {
        img.setAttribute('src', 'imagens/velho_homem.png')
      }
    } else if (sex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/menina_mulher.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/jovem_mulher.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto_mulher.png')
      } else {
        img.setAttribute('src', 'imagens/velho_mulher.png')
      }
    }
    res.textContent = ""
    resc.innerHTML = `Você é ${genero} com ${idade} anos.`
    res.appendChild(img)
    
  }
}