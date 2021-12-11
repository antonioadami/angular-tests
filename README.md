<h1> 
	AngularTests
</h1>

<p>
  <a href="https://www.npmjs.com/@angular/core">
    <img src="https://img.shields.io/npm/v/@angular/core.svg?logo=angular&logoColor=red&label=Angular+version&color=red" alt="Angular on npm" />
  </a>&nbsp;
  <a href="https://www.npmjs.com/typescript">
    <img src="https://img.shields.io/npm/v/typescript.svg?logo=typescript&logoColor=blue&label=Typescript+version&color=blue" alt="Typescript on npm" />
  </a>&nbsp;
  <img src="https://img.shields.io/github/license/antonioadami/angular-tests" alt="License" />
</p>

<h3 align="center"> 
  Passo a Passo para instalar e executar os testes.
</h3>

<br />

<p>
  Este projeto foi desenvolvido com o objetivo de aprender a realizar testes em aplicações Angular.
  Os testes desenvolvidos foram os de Unidade e Mock.
  <br />
</p>
<br />

### Pré-requisitos


O projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 12.2.6.

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
GIT, Node.js, Typescript e o Yarn(Opcional).
Além disto, é bom ter um editor para trabalhar com o código, um bom exemplo seria o [VSCode](https://code.visualstudio.com/).<br />
Para cada um dessas ferramentas, siga os seguintes passos:

- Git.

    Documentação: [Git](https://git-scm.com).<br />
    Download: [Download](https://git-scm.com/download/win).<br />
    Acesse o link de downloads.<br />
    Faça o download e instale.<br />

- Node.js.

    Documentação: [Node.js](https://nodejs.org/en/)<br />
    Download: [Download](https://nodejs.org/en/download/)<br />
    Acesse o link de downloads.<br />
    Faça o download e instale.<br />

- Typescript.

    Documentação: [Typescript](https://www.typescriptlang.org)<br />
    Download: [Download](https://www.typescriptlang.org/download)<br />
    Acesse o link de downloads.<br />
    Faça o download e instale.<br />
    
 - Yarn (Opcional).

    Documentação: [Yarn](https://classic.yarnpkg.com/en/)<br />
    Acesse o link para verificar toda a documentação sobre o Yarn.<br />
    Para instalar o Yarn, será necessário já estar com o Node instalado.<br />
    Com isso já feito, abra um terminal e rode o seguinte comando:
    ```
    $ npm install --global yarn
    ```
    
    
<br />


### 🚀 Começando

Para obter uma cópia do projeto a fim de executá-lo ou editá-lo de sua máquina, clone o repositório em uma pasta na sua máquina:

```
$ git clone https://github.com/antonioadami/angular-tests.git
```

### 🎲 Rodando o Front-End

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd angular-tests

# Instale as dependências
$ npm install
ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
ou
$ yarn dev

# Você poderá acessar a página no link http://localhost:4200
```

### ⚙️ Executando os testes

O Angular utiliza Jasmine e Karma para desenvolver e executar os testes.
Para executar os testes de unidade, basta executar o seguinte comando:

```
$ npm test
ou
$ yarn test
```

### 📕 Linting

Para realizar o linting no projeto e manter um padrão na escrita do código, foi utilizado o Eslint e Prettier

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.io)
- [Jasmine](https://jasmine.github.io)
- [Karma](https://karma-runner.github.io)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [VSCode](https://code.visualstudio.com/)
