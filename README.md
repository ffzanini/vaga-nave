<h1 align="center">
    <img alt="nave" src="frontend/src/images/logo-white.png"/>
</h1>

<h4 align="center">
  Teste da vaga de Estagiário Backend na nave.rs
</h4>

<p align="center">
  ⚒️ <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  💻 <a href="#-sobre-os-projetos">Projetos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🚀 <a href="#-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	🤔 <a href="#-como-testar">Como Testar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	🧾 <a href="#-licença">Licença</a>&nbsp;&nbsp;
</p>

<br>
---

## ⚒️ Tecnologias

#### Tecnologias utilizadas no frontend:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

#### Tecnologias utilizadas no backend:
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Insomnia](https://insomnia.rest/download/)

---

## 💻 Sobre os Projetos

#### Lógica de programação

- [Link_para_o_teste_de_Lógica_Programação](https://codesandbox.io/s/teste-estagio-template-felipe-zanini-9isjy)

#### Frontend
<p>Desenvolvido um projeto bem simples e responsivo para apresentação de dados vindos de uma API externa via fetch.</p>

#### Backend
<p>Desenvolvida uma API para realizar o cadastro, alteração, exclusão e requisição de projetos e navers presentes na base de dados.</p>

---

## 🚀 Como Executar

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
#### Antes de gerar um novo banco, execute o comando abaixo para ter certeza que o mesmo se encontra vazio
```sh
cd backend
yarn knex:migrate:rollback
```
#### Gerar o banco de dados
```sh
cd backend
yarn knex:migrate
```
#### Popular o banco de dados
```sh
cd backend
yarn knex:seed
```
#### Iniciando a aplicação backend
```sh
cd backend
yarn start
```
---
## 🤔 Como Testar
<p>Com o servidor já inciado, abra o seu Insomnia ou Postman. Caso opte por utilizar o Insominia, na pasta <b>utils</b> contém um arquivo com todas as configurações para os testes. Basta exportar o arquivo para o seu Insominia.</p>
<p>Abaixo ficam detalhados as rotas disponíveis para os testes, assim como as querys que podem ser executadas.</p>

<h2 align="center">Projetos</h2>
<p><b>POST:</b> http://localhost:3333/navers - Cria um novo Naver e abaixo um exemplo para ser incluido na base:</p>

```sh
{
	"name": "Rubens Corrêa",
	"birthdate": "1995-12-12",
	"admission_date": "2021-02-11",
	"job_role": "Desenvolvedor Backend",
	"projects": [1, 2]
}
```
<p><b>GET:</b> http://localhost:3333/navers - Retorna todos os Navers cadastrados</p>
<p><b>GET:</b> http://localhost:3333/navers?admission_date=asc - Retorna todos os Navers cadastrados em ordem ascendente</p>
<p><b>GET:</b> http://localhost:3333/navers?admission_date=desc - Retorna todos os Navers cadastrados em ordem decrescente</p>
<p><b>GET:</b> http://localhost:3333/navers/:id - Retorna o Naver com o ID selecionado e os projetos que participa</p>
<p><b>PUT:</b> http://localhost:3333/navers/:id - Altera o Naver com o ID selecionado</p>
<p><b>DELETE:</b> http://localhost:3333/navers/:id - Deleta o Naver com o ID selecionado</p>

<h2 align="center">Projetos</h2>

<p><b>POST:</b> http://localhost:3333/projects - Cria um novo Projeto</p>

```sh
{
	"name": "Projeto Estoy Happy",
	"navers": [1,2]
}
```
<p><b>GET:</b> http://localhost:3333/projects - Retorna todos os Projetos cadastrados</p>
<p><b>GET:</b> http://localhost:3333/projects?navers=all - Retorna todos os Projetos cadastrados com seus respectivos Navers</p>
<p><b>GET:</b> http://localhost:3333/projects?navers=count - Retorna todos os Projetos cadastrados com sua quantidade de Navers</p>
<p><b>GET:</b> http://localhost:3333/projects/:id - Retorna o Projeto com o ID selecionado</p>
<p><b>DELETE:</b> http://localhost:3333/projects/:id - Deleta o Projeto com o ID selecionado</p>

<h2 align="center">Projetos</h2>

<p><b>POST:</b> http://localhost:3333/relations - Cria um novo relacionamento entre um Naver e um Projeto existentes na base</p>

```sh
{
	"naver_id": 1,
	"project_id": 1
}
```
<p><b>GET:</b> http://localhost:3333/relations - Retorna todos os Relacionamentos cadastrados</p>
<p><b>GET:</b> http://localhost:3333/relations/:id - Retorna o Relacionamento com o ID selecionado</p>
<p><b>DELETE:</b> http://localhost:3333/relations/:id - Deleta o Relacionamento com o ID selecionado</p>

---

## 🧾 Licença
<p align="justify">
Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/ffzanini/vaga-nave/blob/master/LICENSE">LICENSE<a/> para mais detalhes.
</p>
    
---

Feito com 💙 by Felipe Frantz Zanini