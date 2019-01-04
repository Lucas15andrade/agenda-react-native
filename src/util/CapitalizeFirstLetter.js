/*
    Deixa a primeira letra da palavra maiúscula
    Ex: exemplo -> Exemplo
*/
const CapitalizeFirstLetter = (string) =>{
    return string[0].toUpperCase() + string.slice(1);
}

export default CapitalizeFirstLetter;