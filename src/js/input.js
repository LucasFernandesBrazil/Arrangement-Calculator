var n = document.getElementById("input-n")
n.onfocus = function(){
    n.placeholder = "Digite apenas números"
}

n.onblur = function(){
    n.placeholder = "Digite n"
}

var p = document.getElementById("input-p")
p.onfocus = function(){
    p.placeholder = "Digite apenas números"
}

p.onblur = function(){
    p.placeholder = "Digite p"
}

var input = document.querySelector("#resultado");

input.disabled = true;

document.getElementById("clear-buttom").addEventListener('click', (event) => {
    document.getElementById("input-n").value = ""
    document.getElementById("input-p").value = ""
})