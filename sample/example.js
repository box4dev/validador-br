// Exemplo de uso com ES Modules (import)
// Para executar: node example.js (após build)
// (O package.json na raiz do projeto já tem "type": "module")

// === API RECOMENDADA (named exports com prefixo isValid) ===
import { isValidCpf, isValidCnpj, isValidCertidao, validate } from '../dist/index.js';

console.log('--- Testando validador-br com ES Modules ---\n');

// --- Nova API Recomendada ---
console.log('=== NOVA API (Recomendada) ===');
console.log('\n--- Validação de CPF (isValidCpf) ---');
const cpfValido = '12345678909';
const cpfInvalido = '11111111111';
const cpfFormatado = '123.456.789-09';

console.log(`CPF "${cpfValido}" é válido?`, isValidCpf(cpfValido));
console.log(`CPF "${cpfInvalido}" é válido?`, isValidCpf(cpfInvalido));
console.log(`CPF formatado "${cpfFormatado}" é válido?`, isValidCpf(cpfFormatado));

console.log('\n--- Validação de CNPJ (isValidCnpj) ---');
const cnpjValido = '12345678000195';
const cnpjInvalido = '11111111000111';
const cnpjFormatado = '12.345.678/0001-95';

console.log(`CNPJ "${cnpjValido}" é válido?`, isValidCnpj(cnpjValido));
console.log(`CNPJ "${cnpjInvalido}" é válido?`, isValidCnpj(cnpjInvalido));
console.log(`CNPJ formatado "${cnpjFormatado}" é válido?`, isValidCnpj(cnpjFormatado));

console.log('\n--- Validação de Certidão (isValidCertidao) ---');
const certidaoValida = '10683611192610011886261626561494';
const certidaoInvalida = '11111111111111111111111111111111';
const certidaoFormatada = '106836 11 1926 1001 1 88626 162 6561494';

console.log(`Certidão "${certidaoValida}" é válida?`, isValidCertidao(certidaoValida));
console.log(`Certidão "${certidaoInvalida}" é válida?`, isValidCertidao(certidaoInvalida));
console.log(`Certidão formatada "${certidaoFormatada}" é válida?`, isValidCertidao(certidaoFormatada));

// --- Usando o objeto validate ---
console.log('\n=== OBJETO validate (Estilo Centralizado) ===');
console.log(`validate.cpf("${cpfValido}"):`, validate.cpf(cpfValido));
console.log(`validate.cnpj("${cnpjValido}"):`, validate.cnpj(cnpjValido));
console.log(`validate.certidao("${certidaoValida}"):`, validate.certidao(certidaoValida));

console.log('\n------------------------------------------');