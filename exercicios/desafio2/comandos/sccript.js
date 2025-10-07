function carregar() {
  let msg = document.querySelector('p.msg')
  let imagem = document.getElementById('img')
  let hora = new Date().getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    imagem.src = 'imagens/manha1.jpg'
    document.body.style.background = '#e2cd9f' // manhã
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'imagens/tarde2.jpg'
    document.body.style.background = '#b9846f' // tarde
  } else {
    imagem.src = 'imagens/noite3.jpg'
    document.body.style.background = '#515154' // noite
  }
}