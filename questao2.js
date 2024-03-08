/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
const numeroo = 1


  for( let indice = 0 ; indice < array_dos_fibonacci.lenght ; indice++ ){

    if( array_dos_fibonacci[i] === numero){
      flag = true
    }

  }
  return flag

function calcular_Sequencia_Fibonacci( numero){

  let count = 0
  let a = 0 
  let b = 1 
  let c = a + b
  const numeros_fibonacci = []
  numeros_fibonacci.push(a)
  numeros_fibonacci.push(b)
  numeros_fibonacci.push(c)
  
  while( count < loops ){
    console.log("---------")
    count++
    a = b 
    b = c 
    c = a + b
    numeros_fibonacci.push(c)
    console.log(a)
    console.log(b)
    console.log(c)
  }
  console.log(numeros_fibonacci)
  return numeros_fibonacci
}
