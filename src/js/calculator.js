function calculator() {
    var  n = parseFloat(document.getElementById("input-n").value)
    var p = parseFloat(document.getElementById("input-p").value)
    var a, nF = n, pF = p
    p = n - p

    if (n&&p != undefined) {
        nF = factorial(n)
        pF = factorial(p)
        a = nF/pF
        //alert("Resultado do arranjo: " + a)
        document.getElementById('resultado').value = a
    }

    else {
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