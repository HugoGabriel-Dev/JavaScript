function enviar(){
    let num = document.getElementById('num')
    let n = Number(num.value)
    let tab = document.getElementById('tab')
        if (n == 0 || n == ""){
            alert("Digite um número válido")
        }else{
            let c = 1
            tab.innerHTML = ""
                while (c <= 10){
                    let item =document.createElement('option')
                    item.textContent = `${n} x ${c} = ${n*c}`
                    item.value = `tabela${c}`
                    tab.appendChild(item)
                    c++
                }
        num.value = ""
        }
}