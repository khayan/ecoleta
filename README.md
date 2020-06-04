# Next Level Week - [Rocketseat](https://rocketseat.com.br/)

## NLW#1 - Ecoleta

- Semana Internacional do Meio Ambiente - 01/06/2020 a [05/06/2020](https://pt.wikipedia.org/wiki/Dia_Mundial_do_Ambiente)
- Marketplace para conectar empresas e entidades às pessoas que estão descartando resíduos
- Entidades poderão cadastrar pontos de coleta

### API RESTful

- API dentro dos padrões [REST](https://pt.wikipedia.org/wiki/REST) - Representational State Transfer

#### Back-end - Node.js

- Regras de Negócio
- Conexão com banco de dados
- Envio de e-mails ou conexão com serviços externos
- Autenticação e autorização dos usuários
- Criptografia e segurança

#### REST

- /users
- Dados dos usuários (JSON)

#### Front-end - React.js

- Listagem de usuários (HTML & CSS)

#### Mobile - React Native

- Telas Mobile

### Typescript

- Superset
- "Javascript com super poderes"
- Tipagem estática

### React

- Biblioteca (*lib*) para construção de interfaces (*UI*)
- Utilizado para construção de Single Page Applications (*SPA*)
- Podemos considerar um framework? **Sim! O ecossistema faz com que o React possa ser considerado um framework**
- Tudo no React é Javascript!
- React | ReactJS | React Native

        import React from 'react';

        import './button.css';
        import icon from './button.png';

        function Button() {
            return (
                <button>
                    <img src={icon} />
                </button>
            );
        }

#### Vantagens do React

- Organização do código
    - Componentização
- Divisão de responsabilidades
    - Back-end: Regra de negócio
    - Front-end: Interface
- Uma API, múltiplos clientes

### React Native

- Uma única base de código para iOS e Android
- O código não é convertido, transpilado, para linguagens nativas
- O Javascript Core faz com que o iOS e o Android interpretem Javascript

### [Expo](https://blog.rocketseat.com.br/expo-react-native/)

- Não é necessário ambiente específico
    - ~~Android Studio + SDK~~
    - ~~Xcode + SDK~~
- Facilitador para acessar recursos nativos
- Não necessita geração de .apk ou .ipa
- O Expo é capaz de interpretar todo o código React Native

## NLW#2 - Back-end

### Rotas e Recursos

- Rota: Endereço da requisição
- Recurso: Entidade do sistema que estamos acessando

### Métodos HTTP

- GET: Recupera informações do back-end
- POST: Insere novas informações no back-end
- PUT: Atualizar informações no back-end
- DELETE: Remover informações no back-end

### Params

- request.params: Identificam um recurso requerido
- request.query: Parâmetros adicionados a rota, geralmente opcionais. Servem para realização de filtros, paginação e etc
- request.body: Parâmetros que chegam através do corpo da requisição

### Banco de Dados

- SQL: Postgres, MySQL, **SQLite**, SQL Server
- NoSQL: MongoDB, CouchDB

#### [Knex.js](http://knexjs.org/)

- Lib que permite trabalhar com banco SQL com linguagem unificada
- Suporte a muitos Bancos de Dados
- Query escrita em Javascript (query builder)

        SELECT * FROM users WHERE name = 'Khayan'

        knex('users').where('name', 'Khayan').select('*')

#### Tabelas

- points (Pontos de Coleta)
    - name
    - img
    - email
    - whatsapp
    - latitude
    - longitude
    - city
    - uf
- items (Itens para Coleta)
    - title
    - img
- point_items (Quais itens um ponto coleta?)
    - point_id
    - item_id

#### Migrations

- Histórico do Banco de Dados

### Funcionalidades da Aplicação

- Cadastro de Ponto de Coleta
- Listar os Itens de Coleta
- Listar Pontos (filtro por estado/cidade/itens)
- Listar um único Ponto de Coleta

### Padrões de Métodos Controller

- index: Listagem de registros
- show: Um único registro
- create/store: Cria ou armazena novos registros
- update: Atualiza um registro existente
- delete/destroy: Remove um registro existente

### Outros Padrões de Projetos

- Service Pattern
- Repository Pattern/Data Mapper

### CORS - Cross Origin Resource Sharing

- Define quais endereços externos podem acessar a aplicação

## NLW#3 - Front-end

- React é uma lib de Javascript
- Toda a interface é montada a partir do Javascript
- A interface fica disponível a partir do momento em que o site já carregou
- View Page Source: Página sem ação do Javascript
- O Javascript cria os elementos em tempo de execução

### <div id="root"></div>

- Elemento principal da aplicação
- Todos os arquivos devem importar o **React**
- Construção de interfaces
- ReactDOM integra o React com a DOM (árvore de elementos) do navegador web
- render() + document.getElementById('root') insere/renderiza os elementos na aplicação

### JSX

- Sintaxe de XML dentro do código Javascript
- Foi criado para facilitar a criação de elementos

### Components

- Separar a aplicação em blocos reutilizáveis
