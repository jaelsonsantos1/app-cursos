# CursoX

Este projeto tem como finalidade a pratica de todo conhecimento adquirido no curso de React-Native promovido pelo Instituto Federal de Alagoas.

O projeto consiste em um aplicativo mobile para venda de cursos online, com sistema de login integrado, cadastro e outras funcionalidades. 


## ⚙ Instalando dependências!
* Para instalar as dependências listadas em dependencies:
``` bash
npm install
```
* Para instalar as dependências listadas em devDependencies (usadas para desenvolvimento):


``` bash
npm install --dev
```

## Configurando Variáveis de ambiente
Para configurar variáveis de ambiente, renomei o ``.env-example`` para ``.env`` trocando os valores das variáveis pelas configurações corretas.

``` bash
ren .env-example .env
```

## Configurando o Firebase
Para configurar o firebase, siga os passos abaixo.

* faça login no https://console.firebase.google.com/u/0/ e crie um novo projeto usando o botão “Criar um projeto”.

* Uma vez na tela do projeto, você precisa configurar um aplicativo. Clique no aplicativo de projeto da Web para criar um novo projeto da Web.

* Insira os detalhes do aplicativo e verifique se a hospedagem do Firebase está desativada. Depois de concluído, clique em Registrar aplicativo.

* Agora você verá um código fornecendo a comfiguração para acessar o firebase em nosso projeto. Copie os valores das variáveis geradas e insira nas variáveis correspondentes no arquivo ``.env``.
    ```
    FIREBASE_API_KEY = ATUALIZE-ME
    FIREBASE_AUTH_DOMAIN = ATUALIZE-ME
    FIREBASE_PROJECT_ID = ATUALIZE-ME
    FIREBASE_STORAGE_BUCKETt = ATUALIZE-ME
    FIREBASE_MESSAGING_SENDER_ID = ATUALIZE-ME
    FIREBASE_APP_ID = ATUALIZE-ME
    ```