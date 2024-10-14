# DigiFinder

Esta é uma aplicação para listar e buscar Digimons usando React, TypeScript e Vite. A aplicação se comunica com a [API Digimon](https://github.com/lucagx/Digimon-API) para listar e buscar Digimons.

## Dependências

- [React](https://reactjs.org/) | Biblioteca para construir interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/) | Superset do JavaScript que adiciona tipagem estática.
- [Vite](https://vitejs.dev/) | Ferramenta de build rápida para projetos web modernos.
- [axios](https://axios-http.com/) | Cliente HTTP baseado em Promises para o navegador e Node.js.

## Estrutura do Projeto

- `src/` | Contém os arquivos fonte da aplicação.
  - `components/` | Componentes React reutilizáveis.
  - `services/` | Serviços para comunicação com a API.
  - `assets/` | Arquivos estáticos como imagens e ícones.
  - `App.tsx` | Componente principal da aplicação.
  - `index.tsx` | Ponto de entrada da aplicação.

## Conexão com a API

A aplicação se comunica com a [API Digimon](https://github.com/lucagx/Digimon-API) no backend para listar e buscar Digimons. A API está hospedada em https://digimon-api-phi.vercel.app/.

A conexão é feita através do serviço `axios` configurado em `src/services/api.ts`. Aqui estão os endpoints utilizados:

#### Listar todos os Digimons
  - URL: `/api/digimons`
  - Método: `GET`
  - Resposta: Lista de todos os Digimons.

#### Buscar Digimon pelo Nome
  - URL: `/api/digimons/name/:name`
  - Método: `GET`
  - Parâmetros:
      - `name` (string): Nome do Digimon.
  - Resposta: Detalhes do Digimon correspondente.

#### Buscar Digimon pelo Nível
  - URL: `/api/digimons/level/:level`
  - Método: `GET`
  - Parâmetros:
      - `level` (string): Nível do Digimon.
  - Resposta: Lista de Digimons no nível especificado.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm install`

Instala as dependências do projeto.

### `npm run dev`

Inicia o servidor de desenvolvimento.
