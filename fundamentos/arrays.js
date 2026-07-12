const valores = [7.7, 8.9, 6.7, 9.2]; 
console.log(valores[0], valores[2]);
console.log(valores[4]);

console.log(valores.length);
valores.push("hello world", 67, {mario: 3}, false, null);
console.log(valores);

console.log(valores.pop()); // Retorna e exclui o último elemento do "array".
delete valores[0]; // Delete um elemento específico do array.

console.log(valores);

console.log(typeof valores);