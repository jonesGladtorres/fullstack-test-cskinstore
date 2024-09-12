# CSkinStore - Aplicação Full Stack

Este projeto é uma aplicação Full Stack para listar e filtrar skins de CS2. O front-end foi desenvolvido com **Next.js** e **Chakra UI**, enquanto o back-end foi construído com **Nest.js**, **Prisma** e **MongoDB**. A aplicação permite que os usuários filtrem skins por nome, categoria, preço e outros atributos, proporcionando uma experiência de usuário eficiente e responsiva.

## Índice

- [Requisitos do Sistema](#requisitos-do-sistema)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Projeto](#configuração-do-projeto)
- [Execução da Aplicação](#execução-da-aplicação)
- [Executando o Front-end](#executando-o-front-end)
- [Executando o Back-end](#executando-o-back-end)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Documentação da API](#documentação-da-api)
- [Endpoints](#endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [População do Banco de Dados](#população-do-banco-de-dados)
- [Testes](#testes)

---

## Requisitos do Sistema

Antes de começar, certifique-se de ter os seguintes softwares instalados no seu ambiente:

- **Node.js** (Versão 16.0.0 ou superior)
- **npm** ou **yarn** (Para gerenciamento de pacotes)
- **MongoDB** (Local ou usando um serviço em nuvem como MongoDB Atlas)
- **Docker** (Opcional, mas recomendado para ambientes containerizados)

---

## Tecnologias Utilizadas

### Front-end:

- **Next.js 14**: Framework React para renderização no lado do servidor e otimização de performance.
- **React**: Biblioteca JavaScript para interfaces de usuário.
- **Chakra UI**: Biblioteca de componentes modular e acessível para React.
- **React Query**: (TanStack Query) Para gerenciamento eficiente de estado de dados.
- **Axios**: Cliente HTTP baseado em Promises para navegação e Node.js.
- **Sharp**: Biblioteca para processamento e otimização de imagens.

### Back-end:

- **Nest.js**: Framework para construção de aplicações eficientes e escaláveis em Node.js.
- **Prisma**: ORM para interação com o banco de dados MongoDB.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados das skins.

---

## Configuração do Projeto

### Passo 1: Clonar o Repositório

## Clone o projeto para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/cskinstore.git
```

### Passo 2: Instalar Dependências
Navegue até os diretórios e instale as dependências necessárias:

# Front-end:

```bash
cd frontend-cskinstore
npm install
```

# Back-end:

```bash
cd backend-cskinstore
npm install
```

### Execução da Aplicação

## Executando o Front-end
Para iniciar o servidor de desenvolvimento do front-end:

```bash
cd frontend-cskinstore
npm run dev
```
O front-end estará disponível em http://localhost:4000.

## Executando o Back-end
Para iniciar o servidor Nest.js do back-end em modo de desenvolvimento:

```bash
cd backend-cskinstore
npm run start:dev
```
A API estará disponível em http://localhost:3000.


### Variáveis de Ambiente
Certifique-se de configurar as variáveis de ambiente para o front-end e o back-end:

##Variáveis do Front-end:
Crie um arquivo .env.local no diretório frontend-cskinstore com o seguinte conteúdo:

````bash
NEXT_APP_API_BASE_URL="http://localhost:PORT"
````

##Variáveis do Back-end:
Crie um arquivo .env no diretório backend-cskinstore com o seguinte conteúdo:

```bash
DATABASE_URL="String de conexão do MongoDB."

DATABASE_URI="String de conexão do MongoDB SEM BD."
DATABASE_NAME="Nome do banco de dados"
DATABASE_COLLECTION="Nome da Collection"
```


### Documentação da API
## Endpoints
# GET /items
Este endpoint retorna todas as skins disponíveis, com a opção de filtros por nome, categoria e faixa de preço.

# Parâmetros de Consulta (Query Parameters):

- name (opcional): Filtrar por nome da skin.
- category (opcional): Filtrar por categoria da skin (ex.: "Faca", "Pistola").
- minPrice (opcional): Definir preço mínimo para filtragem.
- maxPrice (opcional): Definir preço máximo para filtragem.
- minFloat (opcional): Definir float mínimo para filtragem.
- maxFloat (opcional): Definir float máximo para filtragem.
- orderDirection (opcional): Definir se a ordem é crescente ou decrescente.

# Exemplo de Resposta:

```json
[
    {
        "_id": "66e093bd9a6c2123b2f37bac",
        "name": "Karambit (★) | Aquecimento de Aço",
        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs…",
        "category": "Faca",
        "float": "0.48",
        "price": 5400,
        "createdAt": "2023-04-12T14:23:00.000+00:00",
        "updatedAt": "2023-09-10T10:30:00.000+00:00"
    },
    {
        "_id": "66e093bd9a6c2123b2f37bad",
        "name": "Desert Eagle | Cadeia de Caracteres",
        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs…",
        "category": "Pistola",
        "float": "0.34",
        "price": 307,
        "createdAt": "2023-03-15T10:45:00.000+00:00",
        "updatedAt": "2023-09-10T10:30:00.000+00:00"
    }
]
```


### População do Banco de Dados
Para popular o banco de dados com itens iniciais de skins, execute o seguinte comando:

```bash
cd backend-cskinstore
npm run seed
```
Isso irá gerar um conjunto de skins pré-definidas no banco MongoDB para facilitar o desenvolvimento e teste.

### Testes

## Testes do Back-end
No back-end, o Jest está configurado para executar testes de unidade e integração. Para rodar os testes:

```bash
cd cskinstore-backend
npm run test
```
Os testes cobrem as principais funcionalidades, como rotas da API, validações e interações com o banco de dados.

### Estrutura do Projeto
A estrutura do projeto segue uma organização modular para facilitar a escalabilidade e manutenção.


## Estrutura do Backend
```bash
backend-cskinstore/
│
├── dist/                         # Diretório de saída de build (gerado automaticamente)
├── node_modules/                 # Dependências do Node.js
├── prisma/                       # Configurações e arquivos do Prisma ORM
│   ├── prisma.module.ts          # Módulo do Prisma para injeção de dependências
│   └── prisma.service.ts         # Serviço para lidar com operações do Prisma (banco de dados)
├── src/                          # Código-fonte principal do back-end
│   ├── items/                    # Módulo para gerenciamento de skins (itens)
│   │   ├── interfaces/           # Definições de interfaces TypeScript
│   │   │   ├── find-all-query-params.interface.ts  # Interface para parâmetros de busca
│   │   │   ├── item-filters.interface.ts           # Interface para os filtros dos itens
│   │   │   ├── item-order.interface.ts             # Interface para ordenação de itens
│   │   │   └── item.interface.ts                   # Interface principal dos itens
│   │   ├── items.controller.spec.ts  # Testes do controller de itens
│   │   ├── items.controller.ts      # Controlador HTTP para as rotas dos itens
│   │   ├── items.module.ts          # Módulo que agrupa os serviços e controllers de itens
│   │   ├── items.service.spec.ts    # Testes do serviço de itens
│   │   └── items.service.ts         # Serviço de lógica de negócio para manipulação de itens
│   ├── app.module.ts               # Módulo raiz da aplicação
│   └── main.ts                     # Arquivo principal de inicialização da aplicação Nest.js
├── test/                           # Testes globais da aplicação (opcional)
├── .dockerignore                   # Arquivos ignorados pelo Docker
├── .env                            # Variáveis de ambiente para desenvolvimento
├── .env.example                    # Exemplo de variáveis de ambiente
├── .env.production                 # Variáveis de ambiente para produção
├── .eslintrc.js                    # Configuração do ESLint para o projeto
├── .gitignore                      # Arquivos ignorados pelo Git
├── Dockerfile                      # Arquivo para construção de imagem Docker
├── nest-cli.json                   # Configurações do Nest.js
├── package.json                    # Gerenciamento de dependências e scripts
├── README.md                       # Documentação do projeto
├── tsconfig.build.json             # Configurações específicas para build TypeScript
└── tsconfig.json                   # Configurações do TypeScript
```

## Estrutura do Frontend
```bash
frontend-cskinstore/
│
├── .next/                         # Diretório gerado automaticamente pelo Next.js
├── node_modules/                  # Dependências do Node.js
├── src/                           # Código-fonte principal do front-end
│   ├── app/                       # Configurações de layout e providers da aplicação
│   │   ├── layout.tsx             # Layout padrão da aplicação
│   │   ├── page.tsx               # Página principal da aplicação
│   │   └── providers.tsx          # Arquivo para prover contextos globais (ex.: ThemeProvider)
│   ├── components/                # Componentes reutilizáveis
│   │   ├── Card.tsx               # Componente Card para exibir informações das skins
│   │   ├── FloatLine/
│   │   │   ├── FloatLine.tsx      # Componente de linha para representar o float das skins
│   │   └── commons/               # Componentes comuns reutilizáveis
│   │       ├── Headers/           # Componentes de cabeçalho
│   │       │   └── Header.tsx     # Cabeçalho principal da aplicação
│   │       └── Selects/           # Componentes para filtros via selects
│   │           ├── CategorySelect.tsx  # Select para filtrar por categoria
│   │           ├── FloatSelect.tsx     # Select para filtrar por float
│   │           ├── OrderDirectionSelect.tsx # Select para ordem de exibição
│   │           └── PriceSelect.tsx     # Select para filtrar por preço
│   ├── hooks/                     # Hooks customizados
│   │   └── useFetchItems.ts       # Hook para buscar os itens via API
│   ├── ModalSearchMobile/         # Componentes modais para busca em dispositivos móveis
│   │   └── ModalSearchMobile.tsx  # Modal de busca para mobile
│   ├── SearchBar/                 # Componentes para a barra de busca
│   │   ├── SearchBarDesktop.tsx   # Barra de busca para desktop
│   │   ├── SearchBarMobile.tsx    # Barra de busca para dispositivos móveis
│   │   └── SearchBar.tsx          # Componente principal da barra de busca
│   ├── services/                  # Serviços de integração com a API
│   │   └── api.ts                 # Configuração e chamadas à API
│   ├── styles/                    # Estilos globais e temáticos
│       └── theme.ts               # Arquivo de tema do Chakra UI
├── .env                           # Variáveis de ambiente para o front-end
├── .env.example                   # Exemplo de variáveis de ambiente
├── .eslintrc.json                 # Configurações do ESLint para o projeto
├── .gitignore                     # Arquivos ignorados pelo Git
├── next-env.d.ts                  # Declarações de tipos para o Next.js
└── tsconfig.json                  # Configurações do TypeScript
```

### Descrição dos Principais Arquivos
## Backend:

- items.controller.ts: Gerencia as rotas e lida com as requisições HTTP.
- items.service.ts: Contém a lógica de negócio para manipular os itens (skins).
- prisma.module.ts: Módulo de integração com o Prisma (ORM) para gerenciar o MongoDB.
- items.interfaces.ts: Define as interfaces TypeScript usadas no módulo de itens.

## Frontend:
- SearchBarDesktop.tsx e SearchBarMobile.tsx: Componentes específicos para a barra de busca adaptados para diferentes dispositivos.
- api.ts: Centraliza as chamadas HTTP para a API do back-end.
- useFetchItems.ts: Hook customizado que faz a chamada para a API e lida com a busca de itens.
- theme.ts: Configurações de estilo global e tema utilizando Chakra UI.

## Considerações
- A estrutura do backend está bem organizada, com módulos independentes para cada parte do sistema (ex.: módulo de itens), e o Prisma como ORM facilita a interação com o MongoDB.
- O frontend também segue boas práticas, separando componentes, hooks e serviços, além de utilizar uma abordagem de design responsivo com Chakra UI e Next.js.
Essa estrutura modular permite uma boa escalabilidade e facilidade de manutenção do código.






