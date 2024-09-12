# Projeto Front-end

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sumário

- [Introdução](#introdução)
- [Começando](#começando)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Decisões Técnicas](#decisões-técnicas)
- [Dependências](#dependências)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Desenvolvimento](#desenvolvimento)
- [Recursos Adicionais](#recursos-adicionais)

## Introdução

Este projeto é uma aplicação front-end desenvolvida com Next.js, uma estrutura React para desenvolvimento de aplicações web. O projeto foi configurado para otimizar o desempenho e a experiência do desenvolvedor. O projeto tem como objtivo um teste técnico da CSkinStore realizado por Jones Torres.

## Começando

Primeiro, realize o clone do repositório GitHub em seu computador e depois execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3001 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto usa next/font para otimizar e carregar automaticamente Geist, uma nova família de fontes da Vercel.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

/frontend-cskinstore
├── /components
│   ├── /Cards
│   ├── /ModalSearchMobile
│   │   └── ModalSearchMobile.tsx
│   ├── /SearchBar
│   │   ├── SearchBarDesktop
│   │   │   └── SearchBarDesktop.tsx
│   │   ├── SearchBarMobile
│   │   │   └── SearchBarMobile.tsx
│   │   └── SearchBar.tsx
│   ├── /commons
│   │   ├── /Headers
│   │   │   └── Header.tsxs
│   │   └── /Selects
│   │       ├── CategorySelect.tsx
│   │       ├── FloatSelect.tsx
│   │       ├── OrderDirectionSelect.tsx
│   │       └── PriceSelect.tsx
├── /app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
├── /hooks
│   └── useFetchItems.ts
├── /services
│   └── api.ts
├── /styles
│   └── theme.css
└── tsconfig.json

## Decisões Técnicas

Next.js
Optamos por usar Next.js devido às suas funcionalidades avançadas, como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e suporte a rotas dinâmicas. Isso nos permite criar uma aplicação rápida e otimizada para SEO.

Chakra UI
Para a estilização, utilizamos o Chakra UI, uma biblioteca de componentes React que facilita a criação de interfaces de usuário acessíveis e responsivas.

Axios
Para fazer requisições HTTP, utilizamos o Axios, uma biblioteca que simplifica a comunicação com APIs.

Framer Motion
Para animações, utilizamos o Framer Motion, uma biblioteca que oferece uma API simples e poderosa para criar animações fluidas e interativas.

Estrutura de Componentes
Organizamos os componentes em pastas específicas para facilitar a manutenção e a escalabilidade do projeto. Componentes comuns, como o Header, são colocados na pasta commons.

Dependências
As principais dependências do projeto são:

next: Framework React para desenvolvimento de aplicações web.
react: Biblioteca para construção de interfaces de usuário.
react-dom: Biblioteca para manipulação do DOM com React.
@chakra-ui/react: Biblioteca de componentes para estilização.
@emotion/react e @emotion/styled: Utilizadas pelo Chakra UI para estilização.
axios: Biblioteca para fazer requisições HTTP.
framer-motion: Biblioteca para animações.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

npm run dev
Inicia o servidor de desenvolvimento.

npm run build
Compila a aplicação para produção.

npm start
Inicia o servidor em modo de produção.

npm run lint
Executa o linter para verificar problemas no código.

## Desenvolvimento

Durante o desenvolvimento, você pode utilizar o servidor de desenvolvimento para ver as mudanças em tempo real. Edite os arquivos na pasta pages ou components para ver as atualizações automaticamente.

Adicionando Novos Componentes
Para adicionar novos componentes, crie um arquivo na pasta components e importe-o onde necessário. Utilize o Chakra UI para estilização e o Framer Motion para animações.

Fazendo Requisições HTTP
Utilize o Axios para fazer requisições HTTP. Configure a base URL da API no arquivo services/api.ts.

## Recursos Adicionais

Para saber mais sobre Next.js, confira os seguintes recursos:

Documentação do Next.js - Saiba mais sobre as funcionalidades e API do Next.js.
Aprenda Next.js - Um tutorial interativo de Next.js.
Repositório do Next.js no GitHub - Sua contribuição e feedback são bem-vindos!

Com esta documentação, esperamos que você tenha uma visão clara de como configurar, desenvolver e fazer o deploy do projeto. Se tiver dúvidas, consulte os recursos adicionais ou entre em contato com a equipe de desenvolvimento.


### Explicação:

1. **Introdução**: Uma breve introdução sobre o projeto e o framework utilizado.
2. **Começando**: Instruções para iniciar o servidor de desenvolvimento.
3. **Estrutura do Projeto**: Descrição da estrutura de diretórios e arquivos do projeto.
4. **Decisões Técnicas**: Explicação das principais decisões técnicas tomadas durante o desenvolvimento do projeto.
5. **Dependências**: Lista das principais dependências do projeto.
6. **Scripts Disponíveis**: Descrição dos scripts disponíveis no projeto.
7. **Desenvolvimento**: Instruções para adicionar novos componentes e fazer requisições HTTP.
8. **Deploy**: Instruções para fazer o deploy da aplicação.
9. **Recursos Adicionais**: Links para recursos adicionais sobre Next.js.

Com essa documentação, você terá uma visão clara de como configurar, desenvolver e fazer o deploy do projeto.