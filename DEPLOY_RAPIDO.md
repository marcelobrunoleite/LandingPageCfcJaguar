# 🚀 Deploy Rápido na Vercel - Passo a Passo

## ⚡ Método Mais Rápido: Vercel CLI

### Passo 1: Instalar Vercel CLI
Abra o PowerShell ou CMD e execute:
```bash
npm install -g vercel
```

Se não tiver Node.js instalado, baixe em: https://nodejs.org

### Passo 2: Fazer Login
```bash
vercel login
```
Isso abrirá o navegador para você fazer login.

### Passo 3: Deploy
No diretório do projeto, execute:
```bash
cd C:\Users\kubru\LandingPageCfcJaguar
vercel
```

### Passo 4: Responder as Perguntas
- **Set up and deploy?** → Digite `Y` e Enter
- **Which scope?** → Escolha sua conta (geralmente só tem uma)
- **Link to existing project?** → Digite `N` e Enter (primeira vez)
- **What's your project's name?** → Digite `autoescola-jaguar` ou apenas Enter
- **In which directory is your code located?** → Digite `.` (ponto) e Enter

### Passo 5: Pronto!
A Vercel vai fazer o deploy e mostrar a URL do seu site!

---

## 📦 Alternativa: Criar Repositório Git

### Passo 1: Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `LandingPageCfcJaguar`
3. Marque como **Público** ou **Privado**
4. **NÃO** marque "Add README" (já temos um)
5. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos
No GitHub, você verá instruções. Use uma destas opções:

**Opção A: Via Interface Web**
1. Clique em **"uploading an existing file"**
2. Arraste os arquivos:
   - `index.html`
   - `styles.css`
   - `script-simplificado.js`
   - `vercel.json`
   - `README.md`
3. Clique em **"Commit changes"**

**Opção B: Via Git (se tiver instalado)**
```bash
cd C:\Users\kubru\LandingPageCfcJaguar
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/LandingPageCfcJaguar.git
git push -u origin main
```

### Passo 3: Importar na Vercel
1. Volte para a Vercel
2. Na lista de repositórios, encontre `LandingPageCfcJaguar`
3. Clique em **"Importar"**
4. Configure (ou deixe padrão) e clique em **"Deploy"**

---

## ✅ Qual Método Escolher?

- **Vercel CLI**: Mais rápido, não precisa de Git
- **GitHub + Vercel**: Melhor para atualizações futuras (deploy automático)

---

## 🎯 Recomendação

Use o **Vercel CLI** se quer fazer deploy rápido agora.
Use **GitHub + Vercel** se quer ter deploy automático no futuro.

