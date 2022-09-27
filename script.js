let progress = setInterval(addPixel, 10)

let barra = document.getElementById('progress')
let porcentagem = document.getElementById('porcent')
let width = barra.offsetWidth


function addPixel() {
    if(width <= 400) {
        width+=1
        let x = (0 + width)
        let y = (x * 100) / 400
        let resultPorcent = y.toFixed()
        let setPixel = barra.style.width = `${width}px`
        porcentagem.innerHTML = `${resultPorcent}%`
        if(width === 400) {
            clearInterval(progress)
        }
    }
}

