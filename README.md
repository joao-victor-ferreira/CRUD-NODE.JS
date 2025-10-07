# CRUD Node.js (Nível Sênior)

Projeto de **CRUD completo em Node.js**, com arquitetura moderna e boas práticas de desenvolvimento.

A estrutura do projeto segue o padrão **Controllers → Services → Repositories → DTOs**, garantindo:

- Separação de responsabilidades
- Escalabilidade
- Facilidade de manutenção

---

## Tecnologias

- **Node.js** (ES Modules)
- **Express.js**
- **MongoDB** (Mongoose)
- **Jest + Supertest** (Testes unitários e de integração)
- **ESLint + Prettier** (Qualidade e formatação de código)
- **Winston + Winston-Daily-Rotate-File** (Logs estruturados e rotacionados)
- **Commitizen + cz-conventional-changelog** (Commits padronizados)
- **Segurança:** Helmet, cors, xss-clean, express-mongo-sanitize, express-rate-limit

---

## Estrutura do projeto

src/
├─ controllers/ # Controladores das rotas
├─ services/ # Lógica de negócio
├─ repositories/ # Comunicação com o banco
├─ dtos/ # Data Transfer Objects
├─ routes/ # Definição das rotas
├─ validations/ # Schemas de validação (Joi)
├─ middlewares/ # Middlewares de validação e segurança
├─ utils/ # Utils, logger, helpers
server.js # Arquivo principal do servidor
testes/ # Testes unitários e integração

---

## Scripts disponíveis

- `npm run dev` → Inicia o servidor com Nodemon  
- `npm run test` → Executa testes com Jest  
- `npm run lint` → Verifica problemas de lint  
- `npm run lint:fix` → Corrige problemas de lint  
- `npm run format` → Formata o código com Prettier  
- `npm run check` → Lint + Prettier  
- `npm run commit` → Commits padronizados via Commitizen

---

## Logs

- Logs estruturados com Winston  
- Rotacionados diariamente (`logs/YYYY-MM-DD-app.log`)  
- Logs de erros separados (`logs/error.log`)  
- Também aparecem no console durante o desenvolvimento

---

## Como rodar o projeto

1. Instale dependências:

```bash
npm install


mpm run dev