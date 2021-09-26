function calculator() {
    var  n = parseFloat(document.getElementById("input-n").value)
    var p = parseFloat(document.getElementById("input-p").value)
    var a, nF = n, pF = p

    if (n&&p != undefined && n&&p >= 0) {
        if (p >= n) {
            document.getElementById("alert").style.background="rgba(255, 0, 0, 0.329)"
            document.getElementById("alert").innerHTML = "Valores digitados de maneira incorreta, tente novamente!"; 
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
        document.getElementById("alert").style.background="rgba(255, 0, 0, 0.329)"
        document.getElementById("alert").innerHTML = "Valores digitados de maneira incorreta, tente novamente!";
    }
}

function factorial (number) {
    let x = number
    for (var i = 2; i < number; i++) {
        x = x * i
    }
    return x
}