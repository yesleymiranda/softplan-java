## softplan-java
Desafio Softplan Aplicação em JAVA

### Descrição
Aplicação back-end Java e front em React

* Ao Acessar a aplicação web, a home apresenta uma tabela de usuários cadastrados.
e também funcionalidades como Novo cadastro, Editar e excluir;

### Recursos
#### Api
* Java 11 - Spring
* Maven
* H2 Database

#### Web
* react
* axios

### API Documentação
https://documenter.getpostman.com/view/3146792/Szf54pVD?version=latest

### Imagem docker
`docker pull cyb3rwolf1/softplan-java:latest`

Ao subir, a aplicação está disponivel em localhost:80

### Nova imagem docker
Caso necessário uma nova imagem:

1. Build do projeto Web React: acessar `cd softplan-front` e executar  `yarn build` ou `npm run build`
2. Gerar novo jar da Api JAVA: Na raiz executar `mvn clean install`
3. Dockerfile está na raiz do projeto. Basta executar: `docker-compose build`









