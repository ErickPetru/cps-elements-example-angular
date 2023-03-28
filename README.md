# CPS Elements - Exemplo - Angular

Projeto de exemplo da integração de componentes [CPS Elements](https://cpsrepositorio.github.io/cps-elements/#/) com [Angular](https://angular.io/).

> **CPS Elements** é parte do projeto de UI/UX institucional, que também sustenta o [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), projetados originalmente pelo professor [Erick Petrucelli](https://github.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da licença [MIT](https://github.com/cpsrepositorio/cps-elements/blob/main/LICENSE.md).

## Executando o projeto

Para execução local, é necessário um ambiente [Node](https://nodejs.org/en) pré-configurado. Em seguida, executa a instalação dos pacotes:

```sh
npm install
```

Para executar em modo de desenvolvimento, com suporte a _hot-reload_, executar em seguida:

```sh
npm run dev
```

Para testar a checagem de tipos, compilação e minificação para produção:

```sh
npm run build
```

## Como a integração funciona

Este projeto de exemplo simples já está pronto para execução, utilizando-se dos comandos já apresentados.

Sua estruturação se baseia na [documentação de integração com Angular](https://cpsrepositorio.github.io/cps-elements/#/frameworks/angular) do CPS Elements. Embora detalhes possam ser obtidos em tal documentação, segue resumo do que foi realizado no projeto para que a integração funcione:

- Instalação do CPS Elements usando `npm install @cps-elements/web`, ficando então registrado no [package.json](./package.json);
- [Configuração](https://cpsrepositorio.github.io/cps-elements/#/frameworks/angular?id=configuração) em [src/app/app.module.ts](./src/app/app.module.ts) importando `CUSTOM_ELEMENTS_SCHEMA` de `@angular/core` e injetando em `@NgModule({ schemas })`;
- Importação do tema base `light.css` em [src/styles.css](./src/styles.css);
- Importação e chamada ao método `setBasePath` em [src/main.ts](./src/main.ts);
- _[Opcional]_ Registrada biblioteca de ícones adicional em [src/main.ts](./src/main.ts) usando o método `registerIconLibrary`, apenas como exemplo;
- Nos componentes Angular que utilizarão CPS Elements, basta re-exportar cada componente desejado, como exibido em [src/app/app.component.ts](./src/app/app.component.ts);
- _[Opcional]_ Para [auto-completação de código](https://cpsrepositorio.github.io/cps-elements/#/fundamentos/utilização?id=auto-completação-de-código) dos CPS Elements e seus atributos no [VS Code](https://code.visualstudio.com/), vide [.vscode/settings.json](./.vscode/settings.json).
