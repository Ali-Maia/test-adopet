# Testes Automatizados para o Adopet

Este repositório contém testes automatizados para o site Adopet, utilizando o framework Cypress.

## Estrutura do Projeto

- **cypress/**: Contém os testes automatizados.
  - **e2e/**: Testes de ponta a ponta.
  - **fixtures/**: Arquivos de dados estáticos utilizados nos testes.
  - **support/**: Comandos customizados e configurações adicionais.
- **cypress.config.js**: Configuração principal do Cypress.
- **package.json**: Dependências e scripts do projeto.

## Pré-requisitos

- Node.js instalado.
- Cypress instalado globalmente ou via npm.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Ali-Maia/test-adopet.git
   ```

2. Navegue até o diretório do projeto:

    ```bash
    cd test-adopet 
    ```
3. Instale as dependências:

    ```bash
    npm install
    ```
## Estrutura dos Testes
Os testes estão organizados de acordo com os principais fluxos do site Adopet:

- **Cadastro de Usuário**: Testa o fluxo de registro de novos usuários.
- **Login**: Testa o processo de autenticação de usuários existentes.
- **Navegação**: Verifica a navegação entre as diferentes páginas do site.
- **Mensagens de Erro**: Assegura que mensagens de erro apropriadas são exibidas para entradas inválidas.

## Integração Contínua
Este projeto está configurado para integração contínua utilizando GitHub Actions. Os testes são executados automaticamente a cada push para garantir a integridade do código.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.