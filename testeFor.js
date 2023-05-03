// Estrutura de Repetição FOR em JS | Usamos o laço for quando sabemos exatamente quantas vezes queremos repetir um bloco de instruções 

/* Sintaxe Geral
 for (valor incial; condição ; incremento ou decremento){
     códigos executados enquanto a condição for verdadeira
 } 
*/

for(let i = 5; i > 0; i--){ // Decrementando
    console.log(i); 
}

console.log("---------------------")

for(let i = 0; i < 5; i++){ // Incrementando
    console.log(i); 
}

console.log("----------------")

let marcas = ["Asus","LG","Acer","Dell"]; // Vetor simples com 4 valores
let t = marcas.length; // Pega o tamanho do vetor, ou seja, a quantidade de valores, no caso 4

for(let x = 0; x < t; x++ ) { // Lembre-se que a variável t possui o tamanho do vetor, serve exatamente para que o FOR só para quando ele imprimir o último valor/elemento do vetor
    console.log(marcas[x]);
}