/*
5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/
console.log("\n-------------Resposta da questão 5 é :")

let string = "Vou inverter estes caracteres"
console.log(string)

let array_char = string.split("")
//console.log(array_char)

let array_char_invertida =[] 

for( let i = array_char.length - 1 ; i >= 0 ; i--){        
    array_char_invertida.push(array_char[i])
}
//console.log(array_char_invertida)

let string_invertida = ""

for( i in array_char_invertida){
    string_invertida += `${array_char_invertida[i]}`
}

console.log(string_invertida)