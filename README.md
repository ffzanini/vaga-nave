<h1 align="center">
    <img alt="nave" src="frontend/src/images/logo-white.png"/>
</h1>

<h4 align="center">
  Teste de vaga para estágio na nave.rs
</h4>

<p align="center">
  :rocket: <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  💻 <a href="#-projeto">Projetos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔖 <a href="#-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## :rocket: Tecnologias

Tecnologias utilizadas no frontend:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Tecnologias utilizadas no backend:
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Yup](https://github.com/jquense/yup/blob/master/yarn.lock)
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sqlite3](https://www.sqlite.org/index.html)


## 💻 Projetos

Lógica de programação

- [LógicaDeProgramação](https://codesandbox.io/s/teste-estagio-template-felipe-zanini-9isjy)

Frontend
<p>Desenvolvido um projeto bem simples e responsivo para apresentação de dados vindos de uma API externa via fetch.</p>

Backend
<p>Desenvolvida uma API no modelo MVC para realizar o cadastro, alteração, exclusão e requisição de projetos e navers presentes na base de dados.</p>

## 🔖 Como Executar

#### Clonando o projeto
```sh
git clone https://github.com/ffzanini/vaga-nave.git
```
#### Instalação Backend
No seu terminal, siga as instruções abaixo para instalar as dependências no projeto.
```sh
cd backend
yarn install
```
#### Gerar banco de dados
```sh
cd backend
yarn typeorm migration:run
```
#### Iniciando a aplicação Frontend
```sh
cd frontend

windowns: start .\index.html
linux: xdg-open index.html
```
Ou se prefirir, abrir a pasta frontend manualmente e executar a aplicação a partir do duplo clique no index.html.

#### Iniciando a aplicação Backend
```sh
cd backend
yarn start
```


## License
<p align="justify">
This project is licensed under the <a href="https://github.com/ffzanini/vaga-nave/blob/master/LICENSE">MIT<a/> License
</p>
    
---

Feito com 💙 by Felipe Frantz Zanini