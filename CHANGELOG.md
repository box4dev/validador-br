# Histórico de Alterações (Changelog)

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-29

### Adicionado
- **Nova API com prefixo `isValid`**: Exportações individuais renomeadas para melhorar autocompletar e tree-shaking:
  - `isValidCpf`, `isValidCnpj`, `isValidCnh`, `isValidCns`, `isValidCartaoCredito`
  - `isValidPis`, `isValidCertidao`, `isValidTituloEleitor`, `isValidInscricaoEstadual`
- **Novo objeto `validate`**: API centralizada para quem prefere estilo agrupado.
- Keywords expandidas no `package.json` para melhor descoberta.

### Changed
- **Renomeação das funções internas**: Todas as funções de validação agora usam padrão `isValidXxx` (camelCase com prefixo).
- Atualização completa da documentação (`README.md`) com exemplos da nova API.
- Atualização dos exemplos (`example.js` e `example.cjs`) demonstrando uso ESM e CJS.

### Deprecated
- Aliases de compatibilidade `cpf`, `cnpj`, `cnh`, `cns`, `pis`, `certidao`, `tituloEleitor`, `cartaoCredito`, `incricaoEstadual` - ainda funcionam mas a nova API `isValidXxx` é recomendada.
- Objeto `validar` (alias em português) - use `validate` em vez disso.

### Removed
- `export default` removido para melhorar tree-shaking e seguir boas práticas de ESM.

## [0.0.1] - 2026-04-28

### Adicionado
- Versão inicial do pacote `@box4dev/validador-br`.
- Validadores para: CPF, CNPJ, CNPJ Alfanumérico, CNH, CNS, Cartão de Crédito, PIS, Certidão, Título de Eleitor e Inscrição Estadual.
- Suporte completo a TypeScript com geração automática de tipos.
- Builds em formatos ESM, CJS e UMD.
- Pipeline de CI com GitHub Actions.
- Documentação inicial e guias de contribuição.
