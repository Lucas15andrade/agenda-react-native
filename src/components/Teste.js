//Função normal
function Teste(nome){
    return 'Seu nome é: ' + nome;
}

//Arrow functions
const Teste2 = (nome) => 'Seu nome é ' + nome;

//Objeto Pessoa
const Pessoa = {
    nome: 'Andrade',
    idade: 20
}

console.log('Nome: ' + Pessoa.nome);

//Destructing
const { nome } = Pessoa;

console.log('Nome: '+ nome);