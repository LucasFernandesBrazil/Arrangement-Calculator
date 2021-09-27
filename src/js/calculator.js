function calculator() {
    var n = parseFloat(document.getElementById("input-n").value)
    var p = parseFloat(document.getElementById("input-p").value)
    var a, nF = n, pF = p

    if (n&&p != undefined && n&&p >= 0) {
        if (p >= n) {
            document.getElementById("alert").style.background="rgba(255, 0, 0, 0.329)"
            document.getElementById("alert").innerHTML = 'O valor de "<b>p</b>" não pode ser maior que "<b>n</b>". Digite novamente!'
            document.getElementById("input-n").value = ''
            document.getElementById("input-p").value = ''
            return false
        }
        p = n - p

        nF = factorial(n)
        pF = factorial(p)
        a = nF/pF
        document.getElementById('resultado').value = a
    }

    else {
        document.getElementById("alert").style.background="rgba(255, 0, 0, 0.329)"
        document.getElementById("alert").innerHTML = "Valores digitados de maneira incorreta. Tente novamente!"
        document.getElementById("input-n").value = ''
        document.getElementById("input-p").value = ''
    }
}

function factorial (number) {
    let x = number
    for (var i = 2; i < number; i++) {
        x = x * i
    }
    return x
}