document.body.addEventListener("mousemove", function(){
    var msgTwo = document.querySelector("#msg-two")
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        msgTwo.innerText = "Tenha uma ótima tarde!"
    }else if (hora >= 12 && hora < 18){
        msgTwo.innerText = "Tenha uma ótima noite"
    }else {
        msgTwo.innerText = "Tenha uma ótima noite"
    }
})


function carregar (){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    var corpo = document.body
    msg.innerHTML = `Agora sao ${hora} Horas`
    
   
    if (hora >= 0 && hora < 12){
        img.src = "./bom dia.jpg"
        corpo.style.background = "rgba(103, 45, 203, 1)"
    }else if (hora >= 12 && hora < 18){
        img.src = "./boa tarde.jpg"
        corpo.style.background = "rgba(209, 63, 56, 1)"
    }else {
        img.src = "./boa noite.jpg"
        corpo.style.background = "rgba(54, 49, 63, 1)"
    }
}

