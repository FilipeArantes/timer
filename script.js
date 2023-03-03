const cancelar = document.querySelector('#cancelar')
let pausar = document.querySelector('#iniciarParar')
let textpausar = document.querySelector('.iniciarParar span')
let segundoBotao = document.querySelector('.segundoBotao')
const minutes = 1
let totalSeconds = minutes * 60
let seconds = totalSeconds
let taPausado = false

function temporizador(minutos, segundos) {
    const mostrarMinutos = minutos < 10 ? minutos = 0 + String(minutos) : minutos
    const mostraSegundos = segundos < 10 ? segundos = 0 + String(segundos) : segundos

    const minutos1 = document.querySelector('.minutos')
    const seconds1 = document.querySelector('.segundos')

    minutos1.innerHTML = mostrarMinutos
    seconds1.innerHTML = mostraSegundos
}


const mostrarTempo = setInterval(function tempo() {
    if (seconds <= 0) {
        temporizador(0, 0)
        return
    }
    const contagemMinutos = parseInt(seconds / 60)
    const contagemSegundos = seconds % 60
    temporizador(contagemMinutos, contagemSegundos)
    seconds--
}, 1000)

cancelar.addEventListener('click', () => {
    clearInterval(mostrarTempo)
    clearInterval(temporizador(0, 0))
    const minutos1 = document.querySelector('.minutos')
    const seconds1 = document.querySelector('.segundos')

    minutos1.innerHTML = '00'
    seconds1.innerHTML = '00'
})

function pause() {
    console.log(taPausado)
    if (taPausado) {
        setInterval(function tempo() {
            if (seconds <= 0) {
                temporizador(0, 0)
                return
            }
            taPausado = false
            const contagemMinutos = parseInt(seconds / 60)
            const contagemSegundos = seconds % 60
            temporizador(contagemMinutos, contagemSegundos)
            seconds--
        }, 1000)
    }
    if (!taPausado) {
        clearInterval(mostrarTempo)
        taPausado = true
    }
}

// pausar.addEventListener('click', () => {
//     console.log(taPausado)
//     if (taPausado) {
//         setInterval(function tempo() {
//             if (seconds <= 0) {
//                 temporizador(0, 0)
//                 return
//             }

//             taPausado = false
//             const contagemMinutos = parseInt(seconds / 60)
//             const contagemSegundos = seconds % 60
//             temporizador(contagemMinutos, contagemSegundos)
//             seconds--
//         }, 1000)
//     }
//     if (!taPausado) {
//         clearInterval(mostrarTempo)
//         taPausado = true
//     }
// })