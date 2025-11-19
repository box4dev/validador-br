/* eslint-disable no-console */

// Exemplo de uso com ES Modules (import)
// Para executar: node examples/example.js
// (O package.json na raiz do projeto já tem "type": "module")

import { cpf, cnpj } from './dist/validador-br.js';

console.log('--- Testando validador-br com ES Modules ---');

// --- Exemplos de CPF ---
console.log('\n--- Validação de CPF ---');
const cpfValido = '12345678909'; // Use um CPF válido para testes reais
const cpfInvalido = '11111111111';
const cpfFormatado = '123.456.789-09';

console.log(`CPF "${cpfValido}" é válido?`, cpf(cpfValido));
console.log(`CPF "${cpfInvalido}" é válido?`, cpf(cpfInvalido));
console.log(`CPF formatado "${cpfFormatado}" é válido?`, cpf(cpfFormatado));

// --- Exemplos de CNPJ ---
console.log('\n--- Validação de CNPJ ---');
const cnpjValido = '12345678000195'; // Use um CNPJ válido para testes reais
const cnpjInvalido = '11111111000111';
const cnpjFormatado = '12.345.678/0001-95';

console.log(`CNPJ "${cnpjValido}" é válido?`, cnpj(cnpjValido));
console.log(`CNPJ "${cnpjInvalido}" é válido?`, cnpj(cnpjInvalido));
console.log(`CNPJ formatado "${cnpjFormatado}" é válido?`, cnpj(cnpjFormatado));

console.log('\n------------------------------------------');