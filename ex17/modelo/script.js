var botao = document.querySelector("#botao")
botao.addEventListener("mousedown", function(){
    document.body.style.background = "Black"
    
})

function tabuada (){
    var num = document.querySelector("#txtn")
    var tab = document.querySelector("#seltab")

    if (num.value.length == 0){
        alert("me derrubaro aqui ó")
    }else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""

        while (c <= 10){
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}