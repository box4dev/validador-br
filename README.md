# @box4dev/validador-br

<p align="center">
  <img src="https://raw.githubusercontent.com/box4dev/validador-br/main/logo.png" alt="Validador-BR Logo" width="200" />
</p>

<p align="center">
  <b>Uma biblioteca completa, performática e moderna para validação de documentos e dados brasileiros.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@box4dev/validador-br?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/l/@box4dev/validador-br?style=flat-square" alt="license" />
  <img src="https://img.shields.io/github/actions/workflow/status/box4dev/validador-br/ci.yml?style=flat-square" alt="build status" />
</p>

## 🚀 Características

- **Moderno**: Escrito em TypeScript com suporte total a tipos.
- **Completo**: Valida **CPF**, **CNPJ**, **CNPJ Alfanumérico**, **CNH**, **CNS**, **Título de Eleitor**, **PIS**, **Certidões** (Nascimento, Casamento, Óbito) e **Inscrições Estaduais**.
- **Performático**: Algoritmos otimizados para execução rápida no servidor ou navegador.
- **Seguro**: 100% de cobertura de testes para os algoritmos de validação.
- **Universal**: Suporte nativo a ES Modules (ESM), CommonJS (CJS) e UMD.
- **Fácil de usar**: API simples e intuitiva.

## 📦 Instalação

```bash
npm install @box4dev/validador-br
# ou
yarn add @box4dev/validador-br
# ou
pnpm add @box4dev/validador-br
```

## 🛠️ Como Usar

### API Recomendada (ES Modules)

Use os **named exports** com prefixo `isValid` para melhor tree-shaking e autocompletar:

```javascript
import { isValidCpf, isValidCnpj } from '@box4dev/validador-br';
console.log(isValidCpf('123.456.789-09')); // true ou false
console.log(isValidCnpj('GY.HU8.PG2/971E-10')); // true ou false
```

### Usando o objeto `validate`

Para quem prefere um estilo centralizado:

```javascript
import { validate } from '@box4dev/validador-br';
console.log(validate.cpf('123.456.789-09')); // true ou false
console.log(validate.cnpj('12.345.678/0001-95')); // true ou false
```

### Importação (CommonJS)

```javascript
const { isValidCpf, isValidCnpj, validate } = require('@box4dev/validador-br');
console.log(isValidCpf('12345678909')); // true ou false
console.log(validate.cnpj('GYHU8PG2971E10')); // true ou false
```

## 📚 Exemplos de Uso

### CPF

```javascript
import { isValidCpf } from '@box4dev/validador-br';
console.log(isValidCpf('741.535.041-30')); // true ou false
console.log(isValidCpf('43241612163')); // true ou false
```

### CNPJ

```javascript
import { isValidCnpj } from '@box4dev/validador-br';
console.log(isValidCnpj('GY.HU8.PG2/971E-10')); // true ou false
console.log(isValidCnpj('12.345.678/0001-95')); // true ou false
console.log(isValidCnpj('AYWO9JCVCHFB47')); // true ou false
console.log(isValidCnpj('47434563000151')); // true ou false
```

### CNH

```javascript
import { isValidCnh } from '@box4dev/validador-br';
console.log(isValidCnh('12345678901')); // true ou false
```

### CNS
```javascript
import { isValidCns } from '@box4dev/validador-br';
console.log(isValidCns('252 9608 1932 0002')); // true ou false
console.log(isValidCns('146471200460007')); // true ou false
```

### PIS
```javascript
import { isValidPis } from '@box4dev/validador-br';
console.log(isValidPis('589.21704.72.2')); // true ou false
console.log(isValidPis('07987894517')); // true ou false
```

### Título de Eleitor
```javascript
import { isValidTituloEleitor } from '@box4dev/validador-br';
console.log(isValidTituloEleitor('4113 4513 0930')); // true ou false
console.log(isValidTituloEleitor('428779582410')); // true ou false
```

### Certidão (nascimento, casamento, óbito)
```javascript
import { isValidCertidao } from '@box4dev/validador-br';
console.log(isValidCertidao('106836 11 1926 1001 1 88626 162 6561443')); // true ou false
console.log(isValidCertidao('81007223197120011105781766173474')); // true ou false
```

### Inscrição Estadual
```javascript
import { isValidIE } from '@box4dev/validador-br';
// valor da IE e UF
console.log(isValidIE('7122026812064', 'SP')); // true ou false
console.log(isValidIE('01.004.823/001-12', 'AC')); // true ou false
```

### Cartão de Crédito
```javascript
import { isValidCartaoCredito } from '@box4dev/validador-br';
console.log(isValidCartaoCredito('4389 3536 3524 6297')); // true ou false
console.log(isValidCartaoCredito('4389351453183261')); // true ou false
```

## ✅ Validadores Disponíveis

| Validador              | API                            | Descrição                                                           |
| :--------------------- | :----------------------------- | :------------------------------------------------------------------ |
| **CPF**                | `isValidCpf(value)`            | Valida Cadastro de Pessoas Físicas.                                 |
| **CNPJ**               | `isValidCnpj(value)`           | Valida Cadastro Nacional da Pessoa Jurídica (Suporta alfanumérico). |
| **CNH**                | `isValidCnh(value)`            | Valida Carteira Nacional de Habilitação.                            |
| **CNS**                | `isValidCns(value)`            | Valida Cartão Nacional de Saúde.                                    |
| **PIS**                | `isValidPis(value)`            | Valida Programa de Integração Social.                               |
| **Título de Eleitor**  | `isValidTituloEleitor(value)`  | Valida o Título Eleitoral brasileiro.                               |
| **Certidão**           | `isValidCertidao(value)`       | Valida Certidões (Nascimento, Casamento, Óbito).                    |
| **Inscrição Estadual** | `isValidIE(value, uf)`         | Valida Inscrição Estadual para todos os estados brasileiros.        |
| **Cartão de Crédito**  | `isValidCartaoCredito(value)`  | Valida números de cartão via Algoritmo de Luhn.                     |

### Objeto `validate` (Estilo Centralizado)

Todos os validadores também estão disponíveis via objeto `validate`:

```javascript
import { validate } from '@box4dev/validador-br';
validate.cpf('123.456.789-09');
validate.cnpj('12.345.678/0001-95');
// ... etc
```

## 📘 TypeScript

A biblioteca é construída com TypeScript e as definições de tipo são incluídas no pacote. Isso proporciona uma experiência de desenvolvimento superior com autocompletar e verificação de erros em tempo real.

```typescript
import { isValidCpf } from '@box4dev/validador-br';

const meuCpf: string = '123.456.789-00';
const isValid: boolean = isValidCpf(meuCpf);
```

## 🤝 Contribuição

Contribuições são muito bem-vindas! Sinta-se à vontade para abrir Issues para reportar bugs ou sugerir novas funcionalidades. Para mais detalhes, veja nosso [Guia de Contribuição](https://github.com/box4dev/validador-br?tab=contributing-ov-file#readme).

## ⚖️ Licença

Distribuído sob a licença MIT. Veja [Licença](https://github.com/box4dev/validador-br?tab=MIT-1-ov-file#readme) para mais informações.

## 🛡️ Segurança

Para reportar vulnerabilidades de segurança, consulte nossa [Política de Segurança](https://github.com/box4dev/validador-br?tab=security-ov-file#readme).

<p align="center">
  Feito com ❤️ por <a href="https://box4.dev">box4.dev</a>
</p>
