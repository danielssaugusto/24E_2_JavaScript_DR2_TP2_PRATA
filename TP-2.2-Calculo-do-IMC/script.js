const peso = parseFloat(prompt("Digite o seu peso"));
const altura = parseFloat(prompt("Digite a sua altura"));

const calculoDeImc = peso / (altura * altura);

if (calculoDeImc) {
    if (calculoDeImc > 20) {
        alert("O seu IMC é maior do que 20");
    } else {
        alert("O seu IMC é menor do que 20");
    }
}