const botao = document.querySelector('#contar')

botao.addEventListener('click', () =>{

    const n1 = document.querySelector('#num')
    const tab = document.querySelector('#tab')
    const n =  Number(n1.value)
    n1.value = ""
    tab.innerHTML = ""
        for(let c = 1; c <=10 ; c++){
            let op  = document.createElement('option')
            op.textContent = `${n} x ${c} = ${n*c}`
            tab.appendChild(op)
        }
})


        

