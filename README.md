## Solução
Este projeto é referente ao teste para vaga de Front-end da empresa Concrete. Foi proposta a implementação de uma aplicação client-side, que faça uma consulta a API do GitHub e mostre os repositórios de um determinado usuário.

Para implementação do projeto foi utilizado: ReactJs, Bulma, Scss e HTML. NPM e YARN foram empregados para execução e instalação de bibliotecas necessárias.

Existem três pastas principais no projeto:
- assets, lá encontra-se os styles e imagens que estejam sendo utilizados pela maioria dos arquivos;
- components, encontra-se os components que são utilizados pelos arquivos;
- views, as telas do projeto.

Cada código presente no components e na views possui uma pasta com nome principal de sua função (por exemplo, Home, como página inicial). Dentro dessas pastas, é possível encontrar um arquivo index.jsx e, caso seja necessário, uma pasta para arquivos css e uma pasta para imagens que fossem ser utilizados somente por eles.


## Organização
```
├── src
│   ├── assets
│   │   └── css
├── components
│   ├── ScrollToTop
│   ├── Searchbar
├── views
│   ├── Home
│   │   └── css
│   ├── LayoutNotFound
│   │   └── css
│   ├── LayoutResult
│   │   └── css
│   │   └── img

```

## Para Execução do Projeto

``` bash
# Instalar as dependências
yarn

# Execução [http://localhost:3000](http://localhost:3000)
yarn start

```

## Bibliotecas utilizadas
Esta aplicação utiliza:
- ReactJs (para construir a interface do app);
- react-router-dom (auxilia na construção das rotas);
- Bulma (framework utilizada para interface);
- Axios (para conexão com a API).
