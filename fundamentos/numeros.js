const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // essa função verifica se a variável é um número inteiro.
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871; 
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 + peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // método para formatação de casas decimais.
console.log(media.toString()); // retorna uma string, se colocado 2 no parâmetro da função retorna binário.
console.log(typeof media);