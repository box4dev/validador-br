/**
 * Valida um número de CNPJ, numérico ou alfanumérico (padrão a partir de 2026).
 *
 * @param value O número de CNPJ a ser validado, com ou sem máscara.
 * @returns `true` se o CNPJ for válido, `false` caso contrário.
 */
export function cnpj(value: string | number): boolean {
  const rawValue = String(value);

  // 1. Check for invalid characters. Only A-Z, 0-9, '.', '/', '-' are allowed.
  if (/[^A-Z0-9./-]/.test(rawValue)) {
    return false;
  }

  const cleanedValue = rawValue.toUpperCase().replace(/[./-]/g, '');

  // 2. Check length and format (12 alphanumeric chars + 2 digits).
  if (cleanedValue.length !== 14 || !/^[A-Z0-9]{12}\d{2}$/.test(cleanedValue)) {
    return false;
  }

  // 3. Check for sequences of the same character (e.g., '00...0', 'AA...A').
  if (/^([A-Z0-9])\1{13}$/.test(cleanedValue)) {
    return false;
  }

  const valorBase = '0'.charCodeAt(0);

  const calculateDigit = (digits: string): number => {
    // The first set of weights is for the first DV, the second is for the second DV.
    const weights =
      digits.length === 12
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const sum = digits.split('').reduce((acc, char, index) => {
      // For alphanumeric, the value is derived from its charCode.
      // '0' -> 0, '1' -> 1, ..., 'A' -> 17, 'B' -> 18, ...
      const charValue = char.charCodeAt(0) - valorBase;
      return acc + charValue * weights[index];
    }, 0);

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // 4. Calculate and check the first verification digit.
  const firstDigit = calculateDigit(cleanedValue.substring(0, 12));
  if (firstDigit !== parseInt(cleanedValue.charAt(12), 10)) {
    return false;
  }

  // 5. Calculate and check the second verification digit.
  const secondDigit = calculateDigit(cleanedValue.substring(0, 13));
  return secondDigit === parseInt(cleanedValue.charAt(13), 10);
}
