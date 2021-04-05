<div 
  align="center"
  style="
    background: #29292e;
    border-radius: 1.5rem;
    display: flex;
    alight-itens:center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 60px;
    margin: 10px 20px;
    border: 2px solid #444444;
  ">
  
  <h1 align="center">
      <img alt="ignews" title="ignews" src=".github/logo.svg" width="352px" />
  </h1>
  
  ![GitHub][repository_license_badge] ![React_Badge][web_react_badge] ![Types][typescript] ![Next][next]
  
</div>

<div align="center">

<br>


<p align="center">
  <strong>
      <a href="#-projeto">Projeto</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-layout">Layout</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-tecnologias">Tecnologias</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-tecnologias">Tecnologias</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-como-executar-o-projeto">Executando</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-referências">Referências</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-autor">Autor</a> 
  </strong>
</p>

<p align="center">
  <img alt="ignews" src=".github/ignews.png" width="100%">
</p>
</div>


---

## **💻 Projeto**

Ignews é um blog de tecnologia voltado a programação, com serviço pago mensal, com intenção de manter as pessoas antenadas nas atualidades e recursos que temos atualmente para deselvolvimento de softwares mais eficientes.

---

## **🔖 Layout**

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/PwkMoMxksroWkOkEXCn7OU/ig.news). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

#### **Web**

  <div style="
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;"
  >
    <img style="border-radius: 0.5rem;" alt="telasWeb" src=".github/screen01.png" width="100%">
    <br/>
    <br/>
    <img  style="border-radius: 0.5rem;" alt="telasWeb" src=".github/screen02.png" width="100%">
    <br/>
    <br/>
    <img style="border-radius: 0.5rem;" alt="telasWeb" src=".github/screen03.png" width="100%">
    <br/>
    <br/>
    <img style="border-radius: 0.5rem;" alt="telasWeb" src=".github/screen04.png" width="100%">
  <div>

---

## **💻 Tecnologias**


 #### **Website** ([React][react])
 
  - **[Typescript][typescript]**
  - **[Next.js][next_docs]**
  - **[Next Auth][next_auth]**
  - **[GitHub OAuth][github_oauth]**
  - **[FaunaDB][faunadb]**
  - **[Stripe][stripe]**
  - **[Prismic CMS][prismic]**
   
> \* Veja o arquivo <kbd>[package.json](./package.json)</kbd>

 #### **Utilitários**
 
  - Editor: **[Visual Studio Code][vscode]**
 - Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**

---

##  **🚀 Como executar o projeto**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** de forma global, utilizando os comandos:

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./package.json)</kbd> para saber quais scripts estão disponíveis.


### Executando o WebSite

```sh
# Executando o website no modo de desenvolvimento:
$ npm run dev

    OU

# Executando o website no modo de desenvolvimento:
$ yarn dev
```
> Se o browser não abrir automaticamente, acesse: http://localhost:3000.



### Configuraçoes de Ambiente

Você deve procurar 3 chaves na sua conta do Stripe para as variaveis de ambiente, 2 chaves do github oauth, 1 chave na sua conta do FaunaDB para e 2 chaves na sua conta do PrismicCMS.

> Veja o exemplo de arquivo de configurações de ambiente <kbd>[.env.local.example.txt](./.env.local.example.txt)</kbd> para se orientar melhor sobre quais chaves devem ser configuradas para o ambiente.


---

## **📚 Referências**

- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [Rocketseat](https://app.rocketseat.com.br/)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [Next.js](https://nextjs.org)
- [Node.js](https://nodejs.org/en/)



## **👨‍🚀 Autor**

<a href="https://github.com/jairodoni">
 <img style="border-radius: 50%;" src="https://github.com/jairodoni.png" width="100px;" alt="Bruno Henrique Saibert"/>
 <br />
 <sub><b>Jairo Doni Prudente Junior</b></sub></a>
 <br />

👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jairodoni/)](https://www.linkedin.com/in/jairodoni/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:jairo.doni97@gmail.com)](mailto:jairo.doni97@gmail.com)



## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[repository_license_badge]: https://img.shields.io/github/license/JairoDoni/NLW-1.0

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[typescript]: https://img.shields.io/badge/types-Typescript-blue

[next]: https://img.shields.io/badge/ReactJS-Next.js-lightgrey

[next_docs]: https://nextjs.org

[next_auth]: https://next-auth.js.org

[stripe]: https://stripe.com/docs

[faunadb]: https://fauna.com

[prismic]: https://prismic.io

[github_oauth]: https://docs.github.com/pt/developers/apps/authorizing-oauth-apps

<!-- Techs -->

[react]: https://reactjs.org/

[node]: https://nodejs.org/en/

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[feather_icons]: https://feathericons.com/

[next]: https://nextjs.org/

[typescript]: https://www.typescriptlang.org/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[supertest]: https://github.com/visionmedia/supertest

[cross_env]: https://github.com/kentcdodds/cross-env

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable


