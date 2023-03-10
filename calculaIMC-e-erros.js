let altura = document.querySelector("#altura")
let peso = document.querySelector("#peso")

let botao = document.querySelector(".botao")

let calculadora = document.querySelector(".calculadora") //section

let frase = document.createElement("p")
frase.classList.add("frase")
calculadora.appendChild(frase)

let frase2 = document.querySelector(".frase")

function calculaIMC () {

    //IMC = peso / (altura x altura)
    let imc = peso.value / (altura.value * altura.value)
    let imcValor = imc.toFixed(1)

    frase.textContent = "Seu IMC é: " + imcValor

    //pra substituir a frase atual caso faça um novo calculo
    frase2.textContent = "Seu IMC é: " + imcValor
    frase.parentNode.replaceChild(frase2, frase)

    if (imcValor == 0 || imcValor == Infinity) { //altura 0 com peso válido dá infinity
        frase.textContent = "IMC inválido"
    } else if (peso.value <= 0 || altura.value <= 0) {
        frase.textContent = "IMC inválido"
    }
}

botao.addEventListener("click", calculaIMC)
botao.addEventListener("click", frasesErro)

function frasesErro () {
    let fraseErro = document.querySelector(".frase")
    fraseErro.parentNode.replaceChild(fraseErro, frase)

    if (peso.value == "" && altura.value != "") {
        fraseErro.textContent = "Digite o peso"
    } else if (altura.value == "" && peso.value != "") {
        fraseErro.textContent = "Digite a altura"
    } else if(peso.value == "" && altura.value == "") {
        fraseErro.textContent = "Digite peso e altura"
    } else if(altura.value > 3 || altura.value < 0.50) {
        fraseErro.textContent = "Altura inválida"
    } else if(peso.value > 600 || peso.value < 1 ) {
        fraseErro.textContent = "Peso inválido"
    }
}
