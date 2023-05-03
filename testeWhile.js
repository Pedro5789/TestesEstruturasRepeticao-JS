/*
Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. 
A execução das instruções vai continuar até que uma condição seja verdadeira. 
A condição a ser analisada para a execução do laço de repetição deverá retornar um valor booleano/lógico.
*/

let control = 0;     // variavel de controle 
while(control < 6){     // condição de repetição
 console.log(`${control} - Javascript`);    // Comandos do bloco serão executados enquanto a condição acima for verdaeira 
 console.log();    // imprime o valor atual da variável de controle | valor impresso apenas para entendimento
 control++;    // operação de incremento
}

// Obs: console.log(`${control} - Javascript`); -> Esta sintaxe se chama template string, é uma outra forma de juntar(concatenar) variável com string 

console.log("----------------")

let modelos = ["LG","Samsung","Microsoft","Apple","Acer"]; 

let cont = 0;
// Observe que na linha abaixo em vez de criar uma variável para armazenas o tamanho do vetor, usei direto a sintaxe(modelos.length) que obtem este tamanho 
while(cont < modelos.length){ 
 console.log(cont+ '-' +modelos[cont]);
 cont++;
}

/* 
let contador = true;   // a variável contador vai ser verdadeira sempre
while(contador == true){  // essa condição vai ser sempre verdadeira, poderia ser reescrita assim: while(contador) que daria no mesmo
   console.log("Comandos executados enquato o programa estiver em execução"); 
}
*/

console.log("---------------");

console.log("--- Estrutura de Repetição DO WHILE ---"); 
/* 
 O do/while tem quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.
*/

do {
  console.log("Executado pelo menos uma vez"); 
}while(false) 
// Output: Executado pelo menos uma vez
// Veja que a condição do While vai ser falsa sempre, mesmo assim a frase foi impressa uma vez.
