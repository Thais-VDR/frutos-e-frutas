//Declarando variaveis ou constantes
const botaoabrir = document.querySelector('#openModal')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const closeModalButton = document.querySelector('#close-modal')

//funcao abrir modal muda o estado do elemento 
//com o uso da funcao toggle()
// alert('O click funcionou')

// let valor = ['Augusto']

// vetor.forEach((elemento) => {
//     console.log(elemento)
// })

function abrirModal(){
    [modal, fade].forEach((elemento) => elemento.classList.
        toggle('hide'))
    }
    [botaoabrir, closeModalButton, fade].forEach((elemento) => {
        elemento.addEventListener("click", () => abrirModal())
    })
