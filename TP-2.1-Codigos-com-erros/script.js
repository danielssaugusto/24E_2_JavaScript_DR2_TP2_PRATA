// Exemplo de erro com o uso de var
if (true) {
    var number = 10;
}
console.log(number); // Saída: 10 (a variável "number" é acessível fora do bloco if, pois o var possui um escopo global, o que pode levar a variáveis sendo acessadas em partes de código onde não deveriam, causando um comportamento inesperado.

// Exemplo de erro com o uso de let
let numeroA = 5;
let numeroA = 15 // Não é possivel criar duas ou mais variaveis com o mesmo nome no mesmo escopo.

// Exemplo de erro com o uso de const
const nome = "Pedro";
console.log(nome);

nome = "Maria"; // O tipo const não permite a reatribuição e, também, não permite a redeclaração de uma variável

// É recomendado usar o let ou o const no desenvolvimento de uma aplicação em JavaSCript, dando preferência ao const
