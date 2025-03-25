console.log('Olá, Javascript!')

var userName = 'Bruno Quintanilha'

document.getElementById('user-name').innerHTML = userName

// VARIÁVEIS //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true
 
//console.log(typeof nome)
//console.log(typeofidade)
//console.log(jedi)

// OPERADORES MATEMÁTICOS //

//var n1 = 5
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

// + para somar //
// - para subtrair //
// * para multiplicação //
// / para divisão //

//var total = n1 / n2
//console.log(total)

// OPERADORES DE COMPARAÇÃO //

// var v1 = 5
// var v2 = '5'

//var resultado = v1 !== v2
//console.log(resultado)

// Igual(==) Retorna verdadeiro se os valores comparados forem iguais. Ex:1=='1' //true
// Não igual(!=) Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de. Ex:4!=1 //true
// Igual estrito (===)Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais. Ex:3==='3' //false, 3===3 //true
// Não igual estrito (!==) Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes. Ex:3!=='3' //true, 3!==3 //false, 3!==4 //true
// Maior que (>) Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro. Ex:1>2 //false, 5>3 //true, 4>'1' //true
// Maior ou igual que (>=) Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro. Ex:1>=2 //false, 5>=3 //true, 4>='1' //true, 2>=2 // true
// Menor que (<) Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro. Ex:1<2 //true, 5<3 //false, 4<'1' //false 
// Menor ou igual que (<=) Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro. Ex:1<=2 //true, 5<=3 //false, 4<='1' //false, 2<=2 // true

// FUNÇÕES //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 100)

// function boasVindas(nome) {
//     alert(nome + ', seja bem-vindo(a)')
// }

// boasVindas('Bruno')

// function soma(n1, n2) {
//     return n1 + n2 
// }

// var resultado = soma(5, 5)
// console.log(resultado)

// CONTROLE DE FLUXOS //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// var saldo = 1000

// function saque(valor) {
//     if(valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao máximo permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
   
// }

// saque(701)
// console.log(saldo)

// Cenário 1 : Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o vlaor não é superior ao saldo

// Cenário 3 : Saque com valor máximo 
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operaçãp é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o vlaor não é superior ao valor máximo permitido por operação

// ARRAYS //

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')

// //personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })


// console.log(personagens)

// CONTROLES DE REPETIÇÃO(LOOPS) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
//     // código vai ser executado até a condição retornar false
// }

// OBJETOS //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

// CONSTANTES //

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda' 
// console.log(nome)