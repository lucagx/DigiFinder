# DigiFinder

Esta é uma aplicação para listar e buscar Digimons usando React, TypeScript e Vite. A aplicação se comunica com a [API Digimon](https://github.com/lucagx/Digimon-API) para listar e buscar Digimons.

## Link do Figma

Você pode visualizar o design do projeto no [Figma](https://www.figma.com/community/file/1428038068888149794/digifinder).

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

## Clonar e Rodar Localmente

Siga os passos abaixo para clonar e rodar o projeto localmente na porta `http://localhost:5173/`:

1. Clone o repositório:
   ```sh
   git clone https://github.com/lucagx/DigiFinder.git

2. Navegue até o diretório do projeto:
   ```sh
   cd digifinder

3. Instale as dependências:
   ```sh
   npm install

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev

5. Abra o navegador e acesse:
   ```sh
   http://localhost:5173/
