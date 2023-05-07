const pergunta  = document.querySelector('.pergunta')
const input = document.querySelector('.input')
const p_venceu = document.querySelector('.venceu')
const reiniciar = document.querySelector('.reiniciar')
const historico = document.querySelector('.container-historico')

const frases = ['eu gosto de batata mais batata gosta de mim', 'este texto vai ser bem loco porque o loco e dinheiro batata', 'goiaba grande dinheiro eu curto youtube porque eu sou doido', 'dificuldade e ficar mais legal repetindo', 'no alto daquele cume planteu uma roseira o vento no cume bate a rosa no cume cheira']

let EmAndamento = false;
let frase = null
let timeStart = null
let fim = null

function Novafrase(){
    frase = Math.floor(Math.random() * frases.length)
    pergunta.innerHTML = frases[frase]
}


function iniciar(){
    if(!EmAndamento){
        EmAndamento = true
        timeStart = new Date().getTime()
    }
}



function atualizarFrase(){
    Novafrase()
    input.value = ''
    EmAndamento = false
}


function teste(){
    if(frases[frase] == input.value){
        fim = ((new Date().getTime() - timeStart) / 1000).toFixed(2)
        p_venceu.innerHTML = `Parabens! Voce levou ${fim} segundos!`
        atualizarHistorico()
        atualizarFrase()
        
    }
}

function atualizarHistorico(){
    const h = document.createElement('p')
    h.innerHTML = `Frase "${input.value}" - ${fim} segundos!`
   historico.appendChild(h)

}

function resetar(){
    p_venceu.innerHTML = ''
    historico.innerHTML = ''
    atualizarFrase()
}



reiniciar.addEventListener('click', ()=>{
    resetar()
})


input.addEventListener('input', ()=>{
    iniciar()
    teste()
})




Novafrase();
