let a = {nome: "Carlos Almeida"};
console.log(a);

b = a; // Atribuição por referência.

console.log(b.nome);
b.nome = "Mário Filipe";

console.log(a);

// Quando se trabalha com "tipos primitivos", você faz uma cópia por valor.

let c = 3;
let d = c;

d++;

console.log(`c = ${c} e d = ${d}`);

// Como você pode ver, a mudança feita em "d" não afeta "c";