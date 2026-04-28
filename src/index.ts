import { cpf } from './cpf/index.js';
import { cnpj } from './cnpj/index.js';
import { cnh } from './cnh/index.js';
import { cns } from './cns/index.js';
import { cartaoCredito } from './cartaoCredito/index.js';
import { pis } from './pis/index.js';
import { certidao } from './certidao/index.js';
import { tituloEleitor } from './tituloEleitor/index.js';
import { inscricaoEstadual } from './inscricaoEstadual/index.js';

/**
 * Coleção completa de validadores para documentos e dados brasileiros.
 * @namespace validar
 */
const validar = {
  /** Valida CPF (Cadastro de Pessoas Físicas) */
  cpf,
  /** Valida CNPJ (Cadastro Nacional da Pessoa Jurídica) - Suporta novo formato alfanumérico */
  cnpj,
  /** Valida CNH (Carteira Nacional de Habilitação) */
  cnh,
  /** Valida CNS (Cartão Nacional de Saúde) */
  cns,
  /** Valida Cartão de Crédito (Algoritmo de Luhn) */
  cartaoCredito,
  /** Valida PIS (Programa de Integração Social) */
  pis,
  /** Valida Certidão (Nascimento, Casamento, Óbito) */
  certidao,
  /** Valida Título de Eleitor */
  tituloEleitor,
  /** Valida Inscrição Estadual (IE) para todos os estados brasileiros */
  inscricaoEstadual,
} as const;

export {
  cpf,
  cnpj,
  cnh,
  cns,
  cartaoCredito,
  pis,
  certidao,
  tituloEleitor,
  inscricaoEstadual,
  validar,
};

export default validar;
