//let userName = prompt("Digite o seu nome")
//function welcome() {
//alert(`Bem vindo(a, ${userName})`)}

// function welcome(){
//     let number1 = +prompt("Digite o primeiro número")
//     let number2 = +prompt("Digite o segundo número")
//     alert(typeof number1)
//     alert(`A soma de ${number1} com ${number2} é igual a ${number1 + number2}` 
// }

//% é o restante do que sobra de uma divisão
function delta() {
    let number1 = +prompt("Digite o primeiro número")
    // > maior
    // < menor
    // == igual
    // === idêntico
    // ! não
    if (number1 % 2 == 0) {
        alert("O número digitado é par!")
    } else {
        alert("O número digitado é ímpar!")
    }
}

function welcome() {
    let number1 = +prompt("Digite o primeiro número")
    if (number1 < 0) {
        alert("o número digitado é negativo")
    } else if (number1 == 0)
        alert("O número digitado é nulo")
    else {
        alert("O número digitado é positivo")
    }
}

function beta() {
    let number1 = prompt("Digite o primeiro número")
    let number2 = prompt("Digite o segundo número")
    if (number1 > 10 && number2 > 10) {
        alert("Os números digitados são maiores que 10")
    } else if (number1 > 10 || number2 > 10) {
        alert("O número 1 ou o número 2 é maior que 10")
    } else {
        alert("Nenhum dos números digitados são maiores que 10")
    }
}

// + soma
// - subtração
// * multiplicação
// / divisão
// ** exponenciação
// % resto por

function nota() {
    let number1 = +prompt("Digite a nota do 1° bimestre")
    let number2 = +prompt("Digite a nota do 2° bimestre")
    let number3 = +prompt("Digite a nota do 3° bimestre")
    let number4 = +prompt("Digite a nota do 4° bimestre")
    let média = Math.ceil((number1 + number2 + number3 + number4) / 4)
    if (média >= 60) {
        alert(`Aprovado com a média ${media}`)
    } else (média < 60); {
         alert(`Aluno não aprovado com a ${media}`)

}
}