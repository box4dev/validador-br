

// Exemplo de uso com CommonJS (require)
// Para executar: node examples/example.cjs

const validador = require('./dist/validador-br.cjs');

console.log('--- Testando validador-br com CommonJS ---');

// --- Exemplos de CPF ---
console.log('\n--- Validação de CPF ---');
const cpfValido = '12345678909'; // Use um CPF válido para testes reais
const cpfInvalido = '11111111111';
const cpfFormatado = '123.456.789-09';

console.log(`CPF "${cpfValido}" é válido?`, validador.cpf(cpfValido));
console.log(`CPF "${cpfInvalido}" é válido?`, validador.cpf(cpfInvalido));
console.log(`CPF formatado "${cpfFormatado}" é válido?`, validador.cpf(cpfFormatado));

// --- Exemplos de CNPJ ---
console.log('\n--- Validação de CNPJ ---');
const cnpjValido = '12345678000195'; // Use um CNPJ válido para testes reais
const cnpjInvalido = '11111111000111';
const cnpjFormatado = '12.345.678/0001-95';

console.log(`CNPJ "${cnpjValido}" é válido?`, validador.cnpj(cnpjValido));
console.log(`CNPJ "${cnpjInvalido}" é válido?`, validador.cnpj(cnpjInvalido));
console.log(`CNPJ formatado "${cnpjFormatado}" é válido?`, validador.cnpj(cnpjFormatado));

console.log('\n------------------------------------------');