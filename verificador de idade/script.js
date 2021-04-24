function verificar() { // função
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') // ano digitado pelo usuario
    var res = document.querySelector('div#res') // transformar res em variavel.
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('Erro')
    } else {
        var fsex = document.getElementsByName('radsex') //Tem a opção 0 e 1, caso o número de radios fosse maior, teriam outras mais opções.
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //forma de crirar um ID para uma TAG HTML
        if (fsex[0].checked ) {
            genero = 'homem'
            if (idade >=0 && idade <15){
                //criança
                img.src=('hcrianca.png')
            } else if (idade < 23 ) {
                //jovem
                img.src=('hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.src=('hadulto.png')
            }else{
                //idoso
                img.src=('hidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <15){
                //criança
                img.src=('mcrianca.png')
            } else if (idade < 23) {
                //jovem
                img.src=('mjovem.png')
            } else if (idade <50) {
                //adulto
                img.src=('madulto.png')
            }else {
                //idoso
                img.src=('midosa.png')
            }
        }
        res.style.textAlign = 'center' //estilo diretamente no JS
        res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos.`
        res.appendChild(img)
    }
}