import { isValidCpf } from './cpf/index.js';
import { isValidCnpj } from './cnpj/index.js';
import { isValidCnh } from './cnh/index.js';
import { isValidCns } from './cns/index.js';
import { isValidCartaoCredito } from './cartaoCredito/index.js';
import { isValidPis } from './pis/index.js';
import { isValidCertidao } from './certidao/index.js';
import { isValidTituloEleitor } from './tituloEleitor/index.js';
import { isValidIE } from './ie/index.js';

// ============================================================================
// Named exports primários (API recomendada - camelCase com prefixo isValid)
// ============================================================================
export {
  isValidCpf,
  isValidCnpj,
  isValidCnh,
  isValidCns,
  isValidCartaoCredito,
  isValidPis,
  isValidCertidao,
  isValidTituloEleitor,
  isValidIE,
};

// ============================================================================
// Objeto agrupador (para quem prefere estilo centralizado)
// ============================================================================
export const validate = {
  /** Valida CPF (Cadastro de Pessoas Físicas) */
  cpf: isValidCpf,
  /** Valida CNPJ (Cadastro Nacional da Pessoa Jurídica) - Suporta novo formato alfanumérico */
  cnpj: isValidCnpj,
  /** Valida CNH (Carteira Nacional de Habilitação) */
  cnh: isValidCnh,
  /** Valida CNS (Cartão Nacional de Saúde) */
  cns: isValidCns,
  /** Valida Cartão de Crédito (Algoritmo de Luhn) */
  cartaoCredito: isValidCartaoCredito,
  /** Valida PIS (Programa de Integração Social) */
  pis: isValidPis,
  /** Valida Certidão (Nascimento, Casamento, Óbito) */
  certidao: isValidCertidao,
  /** Valida Título de Eleitor */
  tituloEleitor: isValidTituloEleitor,
  /** Valida Inscrição Estadual (IE) para todos os estados brasileiros */
  ie: isValidIE,
} as const;

