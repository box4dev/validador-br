import { clean } from '../utils/clean.js';

/**
 * Valida o formato de um número de CNH (Carteira Nacional de Habilitação).
 *
 * **Atenção:** Este validador verifica apenas o formato (11 dígitos numéricos)
 * e se não são todos os dígitos iguais. A CNH possui um algoritmo de verificação
 * complexo que depende do estado (UF) e não é publicamente documentado de forma
 * estável. Portanto, uma validação completa do checksum **não** é realizada.
 *
 * @param value O número da CNH a ser validado, com ou sem máscara.
 * @returns `true` se o formato da CNH for válido, `false` caso contrário.
 */
export function isValidCnh(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (cleanedValue.length !== 11 || /^(\d)\1{10}$/.test(cleanedValue)) {
    return false;
  }

  return true;
}
