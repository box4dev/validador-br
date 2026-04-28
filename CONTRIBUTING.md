# Contribuindo para o Validador-BR

Primeiramente, obrigado por se interessar em contribuir! O `validador-br` é um projeto de código aberto e adoraríamos receber sua ajuda.

## Como posso contribuir?

### Reportando Bugs
Se você encontrar um erro na validação ou no comportamento da biblioteca, por favor abra uma **Issue**. Inclua detalhes como:
- O valor que causou o erro.
- O comportamento esperado vs. o comportamento atual.
- Versão da biblioteca e do Node.js.

### Sugerindo Melhorias
Ideias para novos validadores ou melhorias de performance são sempre bem-vindas! Abra uma Issue para discutirmos a proposta.

### Pull Requests
1. Faça um **Fork** do repositório.
2. Crie uma branch para sua alteração: `git checkout -b feature/novo-validador`.
3. Instale as dependências: `npm install`.
4. Faça suas alterações.
5. **Garanta que os testes passem**: `npm test`.
6. Se adicionou algo novo, adicione um teste correspondente em `src/[nome]/index.test.ts`.
7. Rode o lint para garantir o estilo de código: `npm run lint`.
8. Envie o Pull Request!

## Padrão de Commits

Para manter o histórico do projeto organizado, utilizamos o padrão de [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/). Suas mensagens de commit devem seguir este formato:

`tipo(escopo): descrição curta`

### Tipos Comuns:
- **feat**: Uma nova funcionalidade.
- **fix**: Correção de um bug.
- **docs**: Alterações apenas na documentação.
- **style**: Alterações que não afetam o sentido do código (espaços em branco, formatação, ponto e vírgula, etc).
- **refactor**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- **test**: Adição de testes ausentes ou correção de testes existentes.
- **chore**: Alterações no processo de build ou ferramentas auxiliares.

**Exemplo:** `feat(cpf): adiciona suporte a validação de CPFs gerados em SP`

## Padrões de Desenvolvimento

- Usamos **TypeScript** para garantir segurança de tipos.
- Seguimos o estilo de código definido pelo **ESLint** e **Prettier**.
- Todos os validadores devem residir em sua própria pasta dentro de `src/`.
- Mantenha a lógica de validação o mais performática possível (evite loops desnecessários ou regex pesadas).

## Configuração do Ambiente

```bash
# Clone o repositório
git clone https://github.com/box4dev/validador-br.git

# Entre no diretório
cd validador-br

# Instale as dependências
npm install

# Inicie os testes em modo watch
npm test
```

Agradecemos sua colaboração!
