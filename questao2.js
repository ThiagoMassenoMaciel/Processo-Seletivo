/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/


console.log(`-------------Resposta da questão 2 é :\n`)
const numeroo = 54
const sequencia_fibonacci = calcular_Sequencia_Fibonacci( numeroo)
const resultado = verificar_se_E_fibonacci(sequencia_fibonacci, numeroo)

console.log(sequencia_fibonacci)
console.log( `O número 54 é da sequencia fibonacci ? \n${resultado}`)

function verificar_se_E_fibonacci(array_dos_fibonacci, numero){
  
  let flag = "não , este número não é da sequencia fibonacci." 
  for( let indice = 0 ; indice < array_dos_fibonacci.length ; indice++ ){
    if( array_dos_fibonacci[indice] === numero){
      flag = "sim , este número é da sequencia fibonacci."
    }
  }
  return flag
}

function calcular_Sequencia_Fibonacci( numero){

  let count = 0
  let a = 0 
  let b = 1 
  let c = a + b
  const numeros_fibonacci = []
  numeros_fibonacci.push(a)
  numeros_fibonacci.push(b)
  numeros_fibonacci.push(c)
  
  while( count < 20 ){
    count++
    a = b 
    b = c 
    c = a + b
    numeros_fibonacci.push(c)
  }
  return numeros_fibonacci

}
