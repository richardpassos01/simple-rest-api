# simple-rest-api
API criada com intuito didático

# Iniciando
* utilize a versão 10 ou superior do nodejs
* Após clonar o projeto, rode o comando `npm install` ou `yarn install`
* Configure um arquivo chamado .env, contendo as mesmas variaveis do arquivo .enx-example, com os valores corretos
* Rode a api com o comando `npm start` ou `npm run dev`, se estiver utilizando yarn, utilize os comandos `yarn start` ou `yarn run dev`

## Desing Patterns utilizados
# Singleton
    * Forma de atribuir o valor a uma variavel, para evitar demais instancias desnecessárias. 
# Factory
    * Um arquivo isolado que servira para fazer todas as instancias do seu projeto/dominio
# Repository
    * Código responsável por manipulação de dados no banco
# Service
    * Código dedicado a regra de negócio da aplicação
# DDD (Domain-driven design)
    * Cria estrutura isolada de dominios na sua aplicação: EX
    v1/api
        domains
            domainName
                controllers
                    DomainController.js
                factories
                    index.js
                repositories
                    DomainRepository.js
                routes
                    index.js -> carregar todas as rotas dinamicamente
                    //rotas
                services
                    DomainService.js


# Estrutura de roteamento no express
    Para trabalharmos com camadas de dominio, primeiro criamos o arquivo [root na raiz das rotas](./src/routes/index.js).
    Esse arquivo, contem uma função (loadIn), que é responsável por carregar dinamicamente as rotas de todos os dominios
    que estão dentro do diretório v1/api/domains*. 
    Ao finalizar a leitura de todos os arquivos criando as rotas, elas são retornadas para o arquivo app.js.
    Depois inserimos essas rotas na nossa aplicação atraves do comando `app.use('/', routerConfig.routes)`
    