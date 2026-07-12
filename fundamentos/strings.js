const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna o caractere do indíce respectivo.
console.log(escola.charAt(5)); // Retorna nada, mesmo que tenha "passado" do indíce do caractere final da "String".
console.log(escola.charCodeAt(3)); // Retorna o valor da tabela ASCII (html).
console.log(escola.indexOf(3)); // Retorna o indíce que está armazenado o valor usado no parâmetro.

console.log(escola.substring(0, 3)); // vai do indíce "0" até o indíce "3".

console.log("Escola ".concat(escola).concat("!")); // Concatena literais e não literais.
console.log(escola.replace(3, "e")); // Troca o indíce pelo valor do segundo parâmetro.

console.log("Mário, Carlos, Triple T".split(",")); // Cria um array e usa o parâmetro da função "split" como demilitador de elementos.

// REGEX -> Não sei o que é, mas foi aprensentado de maneira superficial na aula.