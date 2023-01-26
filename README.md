## Lib
> Projeto base para criação de biblioteca de componentes ReactJS

Este projeto tem como objetivo servir como base para criação de bibliotecas de componentes
baseados em ReactJS. Dentre os recursos disponíveis no projeto, estão:

- Suporte a Typescript
- Processo de build com rollup

___

### 1. Instalando a biblioteca

Faça a instalação do pacote usando `npm` ou `yarn`. 

**NPM:** Instalação com npm

```bash
# Instalação do pacote
npm install @cleitonper/lib

# Instale as dependencias pares, caso não estejam instaladas
npm install react react-dom react-redux @reduxjs/toolkit @mui/material @emotion/styled @emotion/react  
```

**Yarn:** Instalação com yarn

```bash
# Instalação do pacote
yarn add @cleitonper/lib

# Instale as dependencias pares, caso não estejam instaladas
yarn add react react-dom react-redux @reduxjs/toolkit @mui/material @emotion/styled @emotion/react  
```

**Importante!** Instale também todas as dependencias definidas na seção `peerDependencies`, do `package.json`.

**Importante!** Apesar de não estar nas `peerDependencies`, este pacote também depende do framework `NextJS`. Ao iniciar um
novo projeto, faça sua criação com [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)

___

### 2. Usando os componentes

Os componentes da biblioteca dependem de determinados contextos para que funcionem corretamente, como contexto
da biblioteca `redux` e `material-ui`. Antes de usar qualquer componente, inclua o contexto `FeaturesProvider`
no nível mais alto do projeto, como no exemplo a seguir:

```tsx
import { FeaturesProvider, TodoList } from '@cleitonper/lib';

export const App = () => {
  return (
    <FeaturesProvider>
      {/* Os componentes devem ser filhos de FeaturesProvider */}
      <TodoList />
    </FeaturesProvider>
  );
};
```

___

### 3. Ambiente de desenvolvimento do pacote

Durante o desenvolvimento do pacote, não é necessário publicar uma nova versão para testar as mudanças.
A ferramenta [`npm link`](https://docs.npmjs.com/cli/v9/commands/npm-link) pode ser usada para apontar
instalação deste pacote para um diretório local.

Veja a seguir o passo a paso de como criar uma aplicação cliente e testar o pacote localmente.

#### 3.1 Clone o projeto

```bash
# Clone o repositório
git clone git@github.com:cleitonper/lib.git

# Instale as dependencias
npm install

# Faça o build do projeto
npm run build:package
```

#### 3.2 Crie uma aplicação cliente

```bash
# Crie uma aplicação NextJS
npx create-next-app@latest client

# Instale o pacote
npm install @cleitonper/lib

# Instale as dependencias pares
npm install react-redux @reduxjs/toolkit @mui/material @emotion/styled @emotion/react  
```

#### 3.3 Crie um link entre o pacote e a aplicação cliente

Dentro da pasta do pacote (`lib`), execute o comando a seguir para criar uma referência
local para as instalações de `@cleitonper/lib` para a pasta `lib`.

Ao fazer isso, nossa aplicação cliente (`client`) poderá usar a bliblioteca apontando
para o diretório local `lib`, ao invés de baixar o pacote do registry do npm.
```bash
# Dentro da pasta do pacote, execute
npm link
```

Dentro da pasta da aplicação cliente (`client`), execute o comando a seguir para apontar
a instalação do pacote para o diretório local `lib`.

```bash
npm link @cleitonper/lib
```

Neste ponto, toda vez que o comando de build for executado, a instalação do pácote `@cleitonper/lib`
dentro da aplicação cliente `client` terá uma versão atualizada, com as ultimas mudanças feitas localmente.

**!Dica** Para não ter que gerar um novo build sempre que fizer uma mudança no pacote, é possível executar
o comando de build em *watch mode*. Para fazer isso, dentro da pasta do pacote, execute o seguinte comando:

```bash
# Executando o build em watch mode
npm run build:package -- -w
```

**Dica!** Para ver ser o pacote foi corretamente linkado, execute o comando `npm ls --global @cleitonper/lib`.

**Dica!** Para remover o link do pacote local, execute o comando `npm rm --global @cleitonper/lib`.

___

### 4. Publicando uma nova versão

```bash
# Faça login no npm
npm login

# Faça o build do projeto
npm run build:package

# Atualize o campo version do package.json
# Por enquanto, este passo deve ser feito manualmente

# Publique a nova versão no registry
npm publish --access public
```