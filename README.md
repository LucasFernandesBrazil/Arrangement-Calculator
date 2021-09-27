<h1 align="center" style="display: flex; place-items: center;">
  Calculadora de arranjo (probabilidade)
</h1>




📅 Iniciado dia 15/09/2021 | Término dia 27/09/2021
<br>
🕗 Tempo total gasto: 9 horas
<br>

## Foto do projeto
![image](https://user-images.githubusercontent.com/62476878/134946558-e0f8f9fa-8563-49e3-810c-4e89eb7f94ea.png)
<br><br>

## Lógica para realizar os cálculos
```javascript
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
```

Foi utilizado o `for` para realizar o **cálculo fatorial** de qualquer número, para isso foi criado a função `factorial`. 
<br>
Na função principal `calculator` foi realizado alguns tratamentos de erros e o **cálculo do arranjo simples**.

## Como posso acessar?
Este projeto está hospedado pelo GitHub-pages, clique para acessar: <br> [Calculadora](https://lucasfernandesbrazil.github.io/Arrangement-Calculator/)
