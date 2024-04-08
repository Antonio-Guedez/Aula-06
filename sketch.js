//window.alert("Meu primeiro alerta"); //criação de alerta
//window.confirm("Esta gostando do curso?"); //criação de confirmação
//window.prompt("Qual o seu nome?"); //criação de caixa de pergunta (Não aparece na tela, pois nao esta programado)

//variaveis e concatenação
var nome = window.prompt("Qual o seu nome?");
window.alert('Seja bem Vindo ' + nome + '!');

//criando 2 numeros
//numero inteiro: (Number.parsInt)
//float são numeros flutuantes, vem depois da virgula

var n1 = Number.parseInt(window.prompt('Digite um numero'));
var n2 = Number.parseInt(window.prompt('Digite outro numero'));
var s = n1+n2;
var s = window.alert('A soma dos 2 numeros é ' + s );

//para deixar que o JS decida se é flot ou inteiro, Retire o .parseInt do "Number"
