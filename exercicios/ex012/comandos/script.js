function enviar(){
    let num = document.getElementById('num')
    let n = Number(num.value)
        if (n == "" || n == 0){
            alert('[ERRO], DIGITE UM NÚMERO VÁLIDO')
        }else{
            tab.innerHTML = ""
            let c = 1
                while(c <= 10){
                    let tab = document.getElementById('tab')
                    let op = document.createElement('option')
                    op.text = `${n} x ${c} = ${n*c}`
                    tab.appendChild(op)
                    c++
                }
        num.value = ""
        }
}