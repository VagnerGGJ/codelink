# CodeLink - Conectando devs e ideias

🚀 Rede Social para Compartilhar Ideias de Projetos
Uma plataforma simples onde desenvolvedores podem compartilhar ideias de projetos, curtir ideias de outros e se inspirar.

---

# 🔥 Objetivo do Projeto
Facilitar a troca de ideias entre desenvolvedores, ajudando a encontrar inspiração e possíveis colaborações para novos projetos.

---

# ✨ Funcionalidades
✅ Login via GitHub (OAuth)
✅ Postagem de ideias com título, descrição e tecnologias sugeridas
✅ Feed de ideias listando as mais recentes
✅ Curtir ideias para destacar as mais interessantes
✅ Página do usuário com suas ideias postadas

---

# 🛠 Tecnologias Utilizadas
Frontend:
 - React + Vite
 - Material UI
Backend:
 - Node.js + Fastify
 - Prisma (ORM)
 - SQLite (banco de dados leve)
Autenticação:
 - OAuth via GitHub

---

# 🏗 Como Rodar o CodeLink Localmente
📦 Pré-requisitos:
Antes de começar, você precisa ter instalado:
  Node.js
  Git

---

# 🚀 Passos para rodar o projeto
1️⃣ Clone este repositório:
  git clone https://github.com/VagnerGGJ/codelink.git
  cd codelink

2️⃣ Instale as dependências do backend e frontend:
  cd backend
  npm install
  cd ../frontend
  npm install

3️⃣ Inicie o backend:
  cd backend
  npm run dev

4️⃣ Em outro terminal, inicie o frontend:
  cd frontend
  npm run dev

5️⃣ Acesse o CodeLink no navegador:
  http://localhost:5173

---

# 🚧 Status do Projeto
🛠 Em desenvolvimento – MVP em andamento!

# 🎯 Contribuições
Quer ajudar a melhorar o CodeLink? Sinta-se à vontade para abrir issues e pull requests!

# 📜 Licença
Este projeto está sob a licença MIT.

---

# Estrutura de Dados

O banco de dados do CodeLink é composto pelas seguintes entidades principais:

1. **Usuário (User)**:
   - ID
   - Nome
   - Email
   - GitHubUsername
   - ImagemPerfil

2. **Ideia (Idea)**:
   - ID
   - Título
   - Descrição
   - Tecnologias
   - DataPostagem
   - Relacionamento com o Usuário

3. **Curtir (Like)**:
   - ID
   - Relacionamento com a Ideia e o Usuário
   - DataCurtir

## Relacionamentos:

- Cada **Usuário** pode ter várias **Ideias**.
- Cada **Ideia** pode ter várias **Curtidas** e ser associada a um **Usuário**.
- Cada **Curtir** associa um **Usuário** a uma **Ideia** específica.

---
