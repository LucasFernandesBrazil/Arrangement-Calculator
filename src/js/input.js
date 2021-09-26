var n = document.getElementById("input-n")
n.onfocus = function(){
    n.placeholder = "Digite apenas números"
    document.getElementById("alert").innerHTML = ""
}

n.onblur = function(){
    n.placeholder = "Digite n"
}

var p = document.getElementById("input-p")
p.onfocus = function(){
    p.placeholder = "Digite apenas números"
    document.getElementById("alert").innerHTML = ""
}

p.onblur = function(){
    p.placeholder = "Digite p"
}

var input = document.querySelector("#resultado");

input.disabled = true;

function clear() {
    document.getElementById("input-n")
    alert("teste")
}
