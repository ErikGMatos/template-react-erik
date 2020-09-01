## Cockpit CRM

#### Requisitos:
- [NodeJS](https://nodejs.org/en/) <img src="https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/4148e/node.png" width=19/>
- [Yarn](https://yarnpkg.com/lang/en/) <img src="https://tfrommen.de/wp-content/uploads/yarn-logo-400x400-1478627696.jpg" width=19/>

##### Dentro da pasta raiz do projeto execute o seguinte comando para instalar as dependências e rodar em modo `desenvolvimento`:

```console
user-root:~$ yarn && yarn dev
```

##### ou o seguinte comando em modo `produção`:

```console
user-root:~$ yarn && yarn build
```

#### Usamos a convenção de commits de código. Por que usar?
- [x] *Gerando CHANGELOGs automaticamente*
- [x] *Determinar automaticamente um bump de versão semântica (com base nos tipos de confirmações enviadas).*
- [x] *Comunicar a natureza das mudanças a colegas de equipe, público e outras partes interessadas.*
- [x] *Facilitando a contribuição das pessoas em seus projetos, permitindo que elas explorem um histórico de consolidação mais estruturado.*

```console

Exemplo commit feature: $ git commit -m 'feat(escopo): Mensagem de até 50 caracteres'

tipos aceitos : ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']
mensagem deve ser em sentense-case: "Começando com letra maíscula...."
todos os testes dos arquivos `alterados` serão executados antes do commit, caso falhe o commit será abortado.
```
 