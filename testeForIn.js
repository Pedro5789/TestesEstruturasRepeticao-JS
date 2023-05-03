/*
  O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção/criação do elemento 

  Saber mais sobre propriedades enumeradas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties 
 */

  let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

   for(let prop in objeto) {
      console.log("Linguagem: "+ prop +" - "+objeto[prop]);
   } 
   // Output: Linguagem: 1 - C Linguagem: 2 - Python ... Linguagem: 5 - PHP 
/*
A função acima toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.
*/

console.log("----------------------------------")


// Outro Exemplo com Objetos comuns do JS
console.log("--- Percorrer Objetos ---"); 
  const pessoa = { 
		nome:"Maria",
		idade:20,
		peso:65,
		altura:1.7
	   } 
  
  //console.log(pessoa.idade); // acesso manualmente
   for(let atributo in pessoa){ // 
    	console.log(pessoa[atributo]);
    }
// Output: Maria 20 65 1.7

console("------------------------------------")

console.log("--- For In para Interar Vetores ---"); 

let marcas2 = ["LG","Samsung","Microsoft","Apple","Acer"];

   for(let element in marcas2) {
      console.log("Index: "+element+" - "+marcas2[element]);
   } // Output: Index: 0 - LG Index: 1 - Samsung ... Index: 4 - Acer

// Vantagem de uso do FOR IN é que ele percorre as estruturas até o final automaticamente sem precisar que a gente se preocupe em quantos elementos existem
// Nota: o Laço For In como visto, pode ser usado em Arrays/Vetores, mas existem umas ressalvas que podem ser consultadas neste no link abaixo
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in 


console.log("----------------------------")


