# 🚀 Deploy na Vercel - Guia Rápido

## 📋 Pré-requisitos

1. Conta na Vercel (gratuita): https://vercel.com
2. Git instalado (opcional, mas recomendado)

## 🎯 Método 1: Deploy via Interface Web (Mais Fácil)

### Passo 1: Preparar os Arquivos
Certifique-se de que você tem estes arquivos:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script-simplificado.js`
- ✅ `vercel.json` (já criado)

### Passo 2: Acessar Vercel
1. Acesse: https://vercel.com
2. Faça login (pode usar GitHub, GitLab, Bitbucket ou email)

### Passo 3: Criar Novo Projeto
1. Clique em **"Add New..."** → **"Project"**
2. Se você tem os arquivos no GitHub:
   - Conecte seu repositório
   - Selecione o repositório
   - Clique em **"Deploy"**
3. Se você NÃO tem no GitHub:
   - Clique em **"Upload"** ou **"Import"**
   - Arraste a pasta do projeto OU selecione os arquivos
   - Clique em **"Deploy"**

### Passo 4: Configurar (Opcional)
- **Project Name**: `autoescola-jaguar` (ou o nome que preferir)
- **Framework Preset**: Deixe como está ou escolha "Other"
- **Root Directory**: Deixe vazio (se os arquivos estão na raiz)

### Passo 5: Deploy
1. Clique em **"Deploy"**
2. Aguarde alguns segundos
3. Pronto! Você receberá uma URL como: `https://autoescola-jaguar.vercel.app`

---

## 🎯 Método 2: Deploy via CLI (Linha de Comando)

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Fazer Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
# No diretório do projeto
cd C:\Users\kubru\LandingPageCfcJaguar

# Deploy
vercel

# Ou para produção direto
vercel --prod
```

### Passo 4: Seguir as Instruções
- **Set up and deploy?** → `Y`
- **Which scope?** → Escolha sua conta
- **Link to existing project?** → `N` (primeira vez)
- **Project name?** → `autoescola-jaguar` (ou Enter para padrão)
- **Directory?** → `.` (ponto, significa diretório atual)

---

## ✅ Após o Deploy

### Verificar
1. Acesse a URL fornecida pela Vercel
2. Teste todos os links do WhatsApp
3. Teste em mobile (use o modo responsivo do navegador)
4. Verifique se as animações funcionam

### Personalizar Domínio (Opcional)
1. No dashboard da Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio personalizado (ex: `autoescolajaguar.com.br`)
3. Siga as instruções para configurar DNS

### Atualizações Futuras
- Se usou Git: faça `git push` e a Vercel atualiza automaticamente
- Se usou Upload: faça upload novamente ou use CLI: `vercel --prod`

---

## 🔧 Configurações Importantes

### Arquivo `vercel.json`
Já está criado e configurado com:
- ✅ Cache otimizado para performance
- ✅ Headers corretos
- ✅ Roteamento para SPA

### Variáveis de Ambiente
Não são necessárias para esta versão simplificada.

---

## 📱 Testar Compartilhamento

Após o deploy, teste como aparece quando compartilhado:
1. **Facebook**: Cole a URL no post
2. **WhatsApp**: Compartilhe o link
3. **Instagram**: Use no Stories ou bio

---

## 🆘 Problemas Comuns

### Erro 404
- Verifique se `index.html` está na raiz do projeto
- Verifique se o `vercel.json` está correto

### CSS não carrega
- Verifique se o caminho em `index.html` está correto: `href="styles.css"`
- Verifique se o arquivo está na mesma pasta

### JavaScript não funciona
- Verifique se o caminho está correto: `src="script-simplificado.js"`
- Abra o console do navegador (F12) para ver erros

---

## 🎉 Pronto!

Sua landing page estará no ar em poucos minutos!

**URL exemplo**: `https://autoescola-jaguar.vercel.app`

---

**Dica**: A Vercel oferece:
- ✅ HTTPS automático
- ✅ CDN global (carregamento rápido)
- ✅ Deploy automático (se usar Git)
- ✅ Preview de cada commit
- ✅ Domínio personalizado gratuito

