# PetDevShop API

API REST para gerenciar o cadastro de tutores e seus pets em um pet shop. Resolve o problema de manter o controle de quais animais pertencem a cada cliente.

## Integrantes do Grupo
- Lara Salinas Pinton

## Tecnologias Utilizadas
- Node.js + Express
- Prisma ORM + SQLite
- Postman (Testes de API)

## Como Rodar o Projeto
1. Clone o repositório:
   `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências:
   `npm install`
3. Crie um arquivo `.env` na raiz com o conteúdo:
   `DATABASE_URL="file:./dev.db"`
4. Crie as tabelas do banco de dados:
   `npx prisma migrate dev`
5. Inicie o servidor:
   `node src/server.js`

## Rotas Principais da API
- `GET /pets` - Lista todos os pets
- `GET /pets/:id` - Busca um pet por ID
- `POST /pets` - Cadastra um novo pet
- `PUT /pets/:id` - Atualiza um pet
- `DELETE /pets/:id` - Remove um pet