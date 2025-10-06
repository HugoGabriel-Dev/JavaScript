let agora = new Date()
let dia = agora.getDay()

switch (dia){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
    default:
        console.log('[ERRO]')
}