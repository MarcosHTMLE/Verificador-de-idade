
function enviar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nasc = document.getElementsByName('ano')[0]
    var ano_conversao = Number(ano_nasc.value)
    var calculo_idade = ano - ano_conversao
    var sexo = document.getElementsByName('sexo')

    if(calculo_idade < 0 || calculo_idade == 0){
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url(interrogacao.jpg)'
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = 'Ano inválido!'
        
    }else if(calculo_idade < 7 && sexo[0].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Homem com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("bebehomem.jpg")'
    }
    else if(calculo_idade < 7 && sexo[1].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Mulher com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("bebemulher.jpg")'
    }else if(calculo_idade <= 18 && sexo[0].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Homem com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("adolecentehomem.jpg")'
    }else if(calculo_idade <= 18 && sexo[1].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Mulher com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("adolecentemulher.jpg")'
    }else if(calculo_idade < 60 && sexo[0].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Homem com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("homem.jpg")'
    }else if(calculo_idade < 60 && sexo[1].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Mulher com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("mulher.jpg")'
    }else if(calculo_idade < 7 && sexo[0].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Mulher com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("bebemulher.jpg")'
    }else if(calculo_idade >= 60 && sexo[0].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Homem com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("idoso.jpg")'
    }else if(calculo_idade >= 60 && sexo[1].checked){
        var frase = document.getElementsByClassName('sexo_idade')[0]
        frase.innerHTML = `Mulher com ${calculo_idade} anos`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("idosa.jpg")'
    }
 

}