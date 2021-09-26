function calculator() {
    var  n = parseFloat(document.getElementById("input-n").value)
    var p = parseFloat(document.getElementById("input-p").value)
    var a, nF = n, pF = p

    if (n&&p != undefined && n&&p >= 0) {
        if (p >= n) {
            alert('O valor de "n" precisa ser maior que o valor de "p". Tente novamente!') 
            return false
        }
        p = n - p

        nF = factorial(n)
        pF = factorial(p)
        a = nF/pF
        //alert("Resultado do arranjo: " + a)
        document.getElementById('resultado').value = a
    }

    else {
        alert('Valores digitados de maneira incorreta. Tente novamente!')
    }
    
    
}

function factorial (number) {
    let x = number
    for (var i = 2; i < number; i++) {
        x = x * i
    }
    return x
}