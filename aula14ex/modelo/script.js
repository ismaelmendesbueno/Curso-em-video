function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#res")
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ("[ERRO] Ano invalido")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement ('img')
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "homem"
            if (idade < 13){
                img.setAttribute("src", "../foto-bebe-m.png")
            }else if (idade >=13 && idade < 21){
                img.setAttribute("src", "../foto-jovem-m.png")
            }else if (idade < 50){
                img.setAttribute("src", "../foto-adulto-m.png")
            }else {
                img.setAttribute("src","../foto-idoso-m.png")
            }
        }else if (fsex[1].checked){
            genero = "mulher"
            if (idade >= 0 && idade < 13){
                img.setAttribute("src", "../foto-bebe-f.png")
            }else if (idade < 21){
                img.setAttribute("src", "../foto-jovem-f.png")
            }else if (idade < 50){
                img.setAttribute("src", "../foto-adulto-f.png")
            }else {
                img.setAttribute("src", "../foto-idoso-f.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign= "center"
        res.appendChild(img)
    }
}

var botao = document.querySelector("#botao")
botao.addEventListener("mousedown", function(){
    document.body.style.background = "Black"
    
})

