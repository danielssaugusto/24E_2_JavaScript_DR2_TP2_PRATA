const texto = prompt("Digite um texto").toLowerCase();
const larguraDoTexto = texto.length;

let contador = 0;
const vogais = ['a', 'e', 'i', 'o', 'u', 'à', 'á', 'ã', 'é', 'ó'];
for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
        contador++;
    }
}

alert(`Quantidade de caracteres: ${larguraDoTexto}\nQuantidade de vogais: ${contador}`);
