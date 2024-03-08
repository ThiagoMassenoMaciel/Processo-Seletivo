/*
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____ 49
     
d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

*/
console.log("-------------Resposta da questão 3 é :")
console.log("Item a")
console.log(itemA())

console.log("Item b")
console.log(itemB())

console.log("Item c")
console.log(itemC())

console.log("Item d")
console.log(itemD())

console.log("Item e")
console.log(itemE())


console.log("Item f")
console.log(itemF())


function itemA(){
    
    let array = [] // 1 , 3 , 5 , 7 , 9
    let indice = 1
    do{  
        array.push(indice)
        indice += 2 
    }while(indice <= 9)

    return array
}

function itemB(){
    
    let array = [] // 1 , 3 , 5 , 7 , 9
    const base = 2
    for( let expoente = 1 ; expoente <= 7 ; expoente++){
        let numero = Math.pow(base, expoente)
        array.push(numero)
    }

    return array
}

function itemC(){
    //49
    let impar = [ 1,3,5,7,9,11,13]
    let array =[]

    array.push(0)

    for( let i = 0 ; i <= 6 ; i++ ){
        array.push( array[ i ] + impar[i] )
    }
    return array 
}

function itemD(){
    //64
    let outros_numeros = [ 12, 20, 28 ]
    let array =[]

    array.push(4)

    for( let i = 0 ; i < 3 ; i++ ){
        array.push( array[ i ] + outros_numeros[i] )
    }
    return array 
}

function itemE(){

    let count = 0
    let a = 1 
    let b = 1 
    let c = a + b
    const numeros_fibonacci = []
    numeros_fibonacci.push(a)
    numeros_fibonacci.push(b)
    numeros_fibonacci.push(c)
    
    while( count <= 3 ){
      count++
      a = b 
      b = c 
      c = a + b
      numeros_fibonacci.push(c)
    }

    return numeros_fibonacci
    
}

function itemF(){
    //todos os numeros tem a palavra escrita com a primeira letra igual a D
    let array = [2, 10, 12, 16, 17, 18, 19, 200]
    return array 
}
