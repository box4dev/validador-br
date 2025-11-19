/**
 * Remove todos os caracteres que não são dígitos de uma string.
 * @param value O valor a ser limpo, podendo ser string ou número.
 * @returns A string contendo apenas dígitos.
 */
export const clean = (value: string | number): string =>
  String(value).replace(/\D/g, '');
