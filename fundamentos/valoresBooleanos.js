let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\nos falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("\npara finalizar!");
console.log(!!("" || null || 0 || " "));

let nome = "Lucas";
console.log(nome || "Desconhecido!"); // Ele faz uma verificação lógica entre as variáveis e imprime a primeira verdadeira da expressão lógiaca.

nome = "";
console.log(nome || "Desconhecido!"); // Aqui como nome é uma variável vazia ela consta como "false", então é imprimido no terminal "Desconhecido!"

