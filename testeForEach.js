console.log("--- Estrutura de Repetição ForEach ---"); 

// O método forEach() permite executar uma função para cada elemento presente em um array.

// Considere o código abaixo

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor

function tabuadaDe2(item) {  // esta função será executada para cada elemento do array 
    console.log(item*2);
}

numeros.forEach(tabuadaDe2); // Referencia o vetor numeros concatena com o método forEach e passa a função tabuadaDe2 como parâmetro. 
//  Output : 0 2 4 6 8 .... 20, ou seja, a tabuade de 2

console.log("-----------------------------")

//Podemos criar um parâmetro para receber o índice do item do array   
//No exemplo a seguir faremos uma soma, exibindo o valor da somatória a cada posição do array e também o índice sendo percorrido

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; // adiciona o valor de cada item do array 
    console.log("Posição:" + indice + " - Soma = " + total); 
}


numeros.forEach(somar); // Output: Posição:0 - Soma = 0 Posição:1 - Soma = 1  Posição:2 - Soma = 3 ... Posição:10 - Soma = 55

console.log("-----------------------------")

// podemos usar forEach para percorrer Arrays, veja exemplo abaixo

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"]; 
// O exemplo abaixo incorpora a função como parâmetro do forEach, é uma forma de fazer, no caso a função perde o nome, chamamos de função anônima. 
modelPhones.forEach(function(item,indice){ // Veja que o parâmetro do forEach é a própria função que vai ser executada para cada item do vetor
   console.log(indice+" = "+ item); // para cada item do vetor, imprime o índice e valor dessa posição 
}); 
// Output : 0 = A31 1 = MotoOne ... 4 = Redmi 

console.log("-----------------------------")

// Para mais detalhes do uso do forEach, veja o tutorial abaixo no site devmedia:
// https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808

console.log("-----------------------------")

//Considerações sobre as estruturas de repetição no JS
// Os laços FOR IN, FOR OF e FOREACH possuem a vantagem se identificar automaticamente o tamanho das estruturas que estão se aplicadas
// É importante lembrar que existe uma recomendação de tentar evitar o uso do FOR IN para percorrer vetores/array, quando a ordem dos elementos for importante




