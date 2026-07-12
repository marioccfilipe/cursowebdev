const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!"; // Quebra de linhas são consideradas parte da variável, o que que causa erro!
const template = `
    Olá
    ${nome}
` // ${nome} é uma interporlação para ele interpretar o que está guardado na variável e já exibi-lá.

console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei ${up(nome)} não faça isso!`); // exemplo de templateString chamando uma função.