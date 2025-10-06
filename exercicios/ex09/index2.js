let hora = new Date()
let agora = hora.getHours()

console.log(agora)

if (agora >= 0 && agora <= 5){
    console.log('Boa madrugada!')
}else if (agora >= 6 && agora <= 11){
    console.log('Bom Dia!')
}else if (agora >= 12 && agora <=17){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}