/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes 
quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. 

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor 
controla cada lâmpada?


*/
console.log("\n-------------Resposta da questão 4 é :")

console.log(" eu posso diferenciar as três lâmpadas com estas 3 caracteristicas  uma quente, uma acesa e outra apagada  ")

console.log("Ligo o primeiro interruptor e espero ums 20 minutos e desligo o mesmo interruptor, faço isso para referenciar a lâmpada quente com este interruptor")

console.log("Ligo o segundo interruptor e deixo assim ligado , faço isso para que quando eu ver a lâmpada acesa saber que é controlada por este interruptor ")

console.log("Deixo o terceiro interruptor sem ligar , para quando entrar na sala e a lâmpada tiver apagada saber que é controlada por este terceiro interruptor ")

console.log("----Primeira ida a sala: verifico qual das 3 características é presente na lâmpada da sala que entrei e relembro do interruptor de acordo com a ordem que liguei")

console.log("----Segunda ida a outra sala : verifico qual das 2 caracteristica tem a lâmpada da sala , com isso devo relembrar qual interruptor esta relacionado com tal característica")

console.log("depois de identificar as caracteristicas com o interruptor conectado de duas lâmpadas eu ja consigo descobrir qual interruptor é conectado a ultima lâmpada , sendo aquele que sobrou.")

console.log("Se a lâmpada tiver quente é conectada ao interruptor que liguei e desliguei depois de 20 minutos")

console.log("Se a lâmpada tiver acesa é conectada ao interruptor que deixei ligado")

console.log("Se a lâmpada tiver apagada é do interruptor que eu não liguei")