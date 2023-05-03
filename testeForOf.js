console.log("--- Estrutura de reptição For Of ---"); 
/* 
  O loop FOR...OF percorre objetos iterativos (incluindo Array, Map, Set, etc) 
  Exemplos abaixo
 */

let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let curso of cursos){
    console.log("Faculdade: - "+ curso);
}
// Output : Faculdade: - Ciências da Computação Faculdade: - Análise de Sistemas ... Faculdade: - Engenharia de Software 

console.log("-----------------------------")

// Ao invés de let para a variável do FOR OF, você pode usar const se não for modificar a variável dentro do bloco. Veja um exemplo abaixo
let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value); // valores da variável value não podem ser modificados  
}
// Output: 10 20 30

console.log("-----------------------------")

console.log("--- Usando FOR OF para Arrays de Objetos ---"); 

  const infoPessoa = [  // Sintaxe de como criar um Array de Objetos em JS 
		   {nome: "Robison", idade: 18, altura:1.8},
		   {nome: "William", idade: 28, altura:1.6},
		   {nome: "Janaina", idade: 19, altura:1.5},
		   {nome: "Carla", idade: 25, altura:1.9},
		   {nome: "Maíra", idade: 32, altura:1.4},
         ];

    for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
} // Output : Robinson-18-1.8 William-28-1.6 ...  Maíra-32-1.4

// Considerações sobre FOR IN e FOR OF. São laços de repetições com sintaxes agradáveis de usar, sendo o FOR IN mais recomendado para percorrer Objetos 
// Enquanto o FOR OF pode ser usado para mais estruturas como: Arrays, Maps e Conjuntos(Set), etc. 