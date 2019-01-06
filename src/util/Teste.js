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


     /*
     async function getUsers(){
       try {
         const response = await axios.get('https://randomuser.me/api/?nat=br&results=5');
         
       } catch (error) {
         console.log('Erro! :/');
       }
       //return response;
     }
     
     const resultados = getUsers();
     this.setState({
       peoples: resultados.data
     })
     */
     /*
 
     const getUsersTest = async () =>{
       return await axios.get('https://randomuser.me/api/?nat=br&results=5');
     }
     
     const result = getUsersTest();
     this.setState({
       peoples: result.data
     })
     */
 
     //console.log(result);
     
 