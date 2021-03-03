<h1 align="center">
    <img alt="nave" src="frontend/src/images/logo-white.png"/>
</h1>

<h4 align="center">
  Teste da vaga de Estagiário Backend na nave.rs
</h4>

<p align="center">
  :rocket: <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  💻 <a href="#-projeto">Projetos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔖 <a href="#-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## :rocket: Tecnologias

#### Tecnologias utilizadas no frontend:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

#### Tecnologias utilizadas no backend:
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Yup](https://github.com/jquense/yup/blob/master/yarn.lock)
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Insomnia](https://insomnia.rest/download/)

## 💻 Projetos

#### Lógica de programação

- [LógicaDeProgramação](https://codesandbox.io/s/teste-estagio-template-felipe-zanini-9isjy)

#### Frontend
<p>Desenvolvido um projeto bem simples e responsivo para apresentação de dados vindos de uma API externa via fetch.</p>

#### Backend
<p>Desenvolvida uma API no modelo MVC para realizar o cadastro, alteração, exclusão e requisição de projetos e navers presentes na base de dados.</p>

## 🔖 Como Executar

#### Clonando o projeto
```sh
git clone https://github.com/ffzanini/vaga-nave.git
```
#### Iniciando a aplicação frontend
```sh
cd frontend

windowns: start .\index.html
linux: xdg-open index.html
```
<p>Ou se prefirir, abrir a pasta frontend manualmente e executar o index.html a partir do duplo clique.</p>

#### Instalação backend
No seu terminal, siga as instruções abaixo para instalar as dependências no projeto.
```sh
cd backend
yarn install
```
#### Antes de gerar um novo banco, execute o comando abaixo para ter certeza que o mesmo se encontra em branco
```sh
cd backend
yarn typeorm schema:drop 
```
#### Gerar banco de dados
```sh
cd backend
yarn typeorm migration:run
```
#### Iniciando a aplicação backend
```sh
cd backend
yarn start
```
#### Como executar os testes
<p>Com o servidor já inciado, abra o seu Insomnia ou Postman e insira as seguintes rotas para cada operação:</p>

#### Navers
<p>Método POST: http://localhost:3333/navers - Cria um novo Naver e abaixo um exemplo para ser incluido na base:</p>

```sh
{
	"name": "Felipe Frantz Zanini",
	"birthdate": "1993-06-30",
	"admission_date": "2021-03-10",
	"job_role": "Desenvolvedor BackEnd"
}
```
<p>GET: http://localhost:3333/navers - Retorna todos os Navers cadastrados</p>
<p>GET: http://localhost:3333/navers/:id - Retorna o Naver com o ID selecionado</p>
<p>DELETE: http://localhost:3333/navers/:id - Deleta o Naver com o ID selecionado</p>

#### Projetos

<p>POST: http://localhost:3333/projects - Cria um novo Projeto</p>

```sh
{
	"name": "Projeto Feliz"
}
```
<p>GET: http://localhost:3333/projects - Retorna todos os Projetos cadastrados</p>
<p>GET: http://localhost:3333/projects/:id - Retorna o Projeto com o ID selecionado</p>
<p>DELETE: http://localhost:3333/projects/:id - Deleta o Projeto com o ID selecionado</p>

#### Relacionamentos

<p>POST: http://localhost:3333/relations - Cria um novo relacionamento entre um Naver e um Projeto existentes na base</p>

```sh
{
	"naver_id": 1,
	"project_id": 1
}
```
<p>GET: http://localhost:3333/relations - Retorna todos os Relacionamentos cadastrados</p>
<p>GET: http://localhost:3333/relations/:id - Retorna o Relacionamento com o ID selecionado</p>
<p>DELETE: http://localhost:3333/relations/:id - Deleta o Relacionamento com o ID selecionado</p>

## License
<p align="justify">
This project is licensed under the <a href="https://github.com/ffzanini/vaga-nave/blob/master/LICENSE">MIT<a/> License
</p>
    
---

Feito com 💙 by Felipe Frantz Zanini