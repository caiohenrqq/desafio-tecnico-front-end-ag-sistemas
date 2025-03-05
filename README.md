# Desafio Técnico - Desenvolvedor(a) Frontend

Este repositório contém a solução para o desafio técnico da AG Sistemas, onde foi desenvolvida uma aplicação em React com TypeScript e TailwindCSS para consulta de endereços via API do ViaCEP, armazenamento local e listagem dos endereços consultados.

Utilizei localStorage para guardar os dados pois ele não tem data de expiração, possui setup rápido e é extremamente simples, perfeito para aplicações pequenas com dados que não são sensiveis.
A escolha do Vite e fetch() foi pelo mesmo motivo: Setup extremamente leve e rápido, ótimo para códigos pequenos. Cogitei usar Next.js, mas sinceramente acredito que não faria diferença neste caso, até um react-create-app funcionaria bem aqui.
Usei useState para gerenciar os dados e variáveis dentro do código, atualiza sozinho conforme a referência é atualizada, e me permite manipular objetos e arrays, sem problema algum. 

## 🚀 Tecnologias Utilizadas

- React com TypeScript
- TailwindCSS
- LocalStorage para armazenamento persistente

## 📋 Funcionalidades Implementadas

### 1. Campo de CEP
- Um campo de input onde o usuário pode digitar o CEP desejado.

### 2. Consulta ao ViaCEP
- Ao sair do campo ou pressionar o botão de consulta, a API do ViaCEP (
  `https://viacep.com.br/ws/{cep}/json/`) é chamada.
- Os campos de endereço são preenchidos automaticamente com os dados retornados pela API.

### 3. Botão "Salvar"
- Permite armazenar o endereço consultado em um array local no frontend.
- O armazenamento persistente foi implementado utilizando LocalStorage para garantir a persistência dos dados entre sessões do navegador.

### 4. Listagem de Endereços
- Todos os endereços salvos são exibidos em uma lista interativa para consulta futura.

### 📌 Diferenciais Implementados

✅ **Cache Local:**
- Foi implementado um cache local para evitar consultas desnecessárias ao ViaCEP.
- Se um CEP já tiver sido consultado antes, os dados armazenados são usados em vez de fazer uma nova requisição.
- Para isso, utilizei **useState** e **LocalStorage**.

✅ **Design Responsivo:**
- A interface foi desenvolvida com **TailwindCSS**, garantindo um layout responsivo e moderno.

## 📦 Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/desafio-ag-sistemas.git
   cd desafio-tecnico-front-end-ag-sistemas
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

4. Acesse a aplicação pelo navegador disponibilizado no terminal.

## 💡 Decisões Técnicas

- O **useState** foi usado para armazenar os dados de consulta na memória.
- **LocalStorage** foi utilizado para persistência de dados, garantindo que os endereços salvos permaneçam após o fechamento do navegador.
- O cache local foi implementado para evitar requisições desnecessárias à API do ViaCEP, melhorando a performance da aplicação.

## 🤖 Uso de Inteligência Artificial

Nenhuma IA foi utilizado no código diretamente, apenas com perguntas diretas e conceitos teóricos.
