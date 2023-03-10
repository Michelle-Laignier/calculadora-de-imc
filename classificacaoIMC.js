function classificacaoIMC () {

    let classificacao = peso.value / (altura.value * altura.value)
    let classificacaoValor = classificacao.toFixed(1)

    let fraseClassificacao = document.createElement("p")
    fraseClassificacao.classList.add("fraseClassificacao")
    calculadora.appendChild(fraseClassificacao)

    let fraseClassificacao2 = document.querySelector(".fraseClassificacao")
    fraseClassificacao2.parentNode.replaceChild(fraseClassificacao2, fraseClassificacao)

    const magreza = classificacaoValor >= 1.1 && classificacaoValor <= 18.4;
    const normal = classificacaoValor >= 18.5 && classificacaoValor <= 24.9;
    const sobrepeso = classificacaoValor >= 25 && classificacaoValor <= 29.9;
    const obesidade1 = classificacaoValor >= 30 && classificacaoValor <= 34.9;
    const obesidade2 = classificacaoValor >= 35 && classificacaoValor <= 39.9;
    const obesidade3 = classificacaoValor >= 40 && classificacaoValor <= 228.6;
    const invalido = peso.value <= 1 || altura.value <= 1;
    const invalido2 = peso.value == "" || altura.value == "";
    const invalido3 = peso.value == Infinity || peso.value == Infinity;

    if (magreza == true) {
        fraseClassificacao.textContent = "Magreza"
        fraseClassificacao2.textContent = "Magreza"
    } else if (normal == true) {
        fraseClassificacao.textContent = "Normal"
        fraseClassificacao2.textContent = "Normal"
    } else if (sobrepeso == true) {
        fraseClassificacao.textContent = "Sobrepeso"
        fraseClassificacao2.textContent = "Sobrepeso"
    } else if (obesidade1 == true) {
        fraseClassificacao.textContent = "Obesidade grau I"
        fraseClassificacao2.textContent = "Obesidade grau I"
    } else if (obesidade2 == true) {
        fraseClassificacao.textContent = "Obesidade grau II"
        fraseClassificacao2.textContent = "Obesidade grau II"
    } else if (obesidade3 == true) {
        fraseClassificacao.textContent = "Obesidade grau III"
        fraseClassificacao2.textContent = "Obesidade grau III"
    } else if (invalido == true || invalido2 == true || invalido3 == true) {
        fraseClassificacao.remove;
        fraseClassificacao2.remove;
    }
}

botao.addEventListener("click", classificacaoIMC)

/*
Menor que 18.5	Magreza
18.5 a 24.9	Normal
25 a 29,9	Sobrepeso
30 a 34,9	Obesidade grau I
35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III
*/