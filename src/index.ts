import { cpf } from './cpf/index.js';
import { cnpj } from './cnpj/index.js';
import { cnh } from './cnh/index.js';
import { cns } from './cns/index.js';
import { cartaoCredito } from './cartaoCredito/index.js';
import { pis } from './pis/index.js';
import { certidao } from './certidao/index.js';
import { tituloEleitor } from './tituloEleitor/index.js';
import { inscricaoEstadual } from './inscricaoEstadual/index.js';


const validar = {
  cpf,
  cnpj,
  cnh,
  cns,
  cartaoCredito,
  pis,
  certidao,
  tituloEleitor,
  inscricaoEstadual,
};

export { cpf, cnpj, cnh, cns, cartaoCredito, pis, certidao, tituloEleitor, inscricaoEstadual, validar };
export default validar;
