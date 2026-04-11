# Portfólio Corporativo - Débora Bolangno

Este é o projeto do portfólio corporativo da Débora Bolangno, desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Framer Motion** (para animações)
- **Lucide React** (para ícones)

## 🛠️ Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

## 📦 Deploy no GitHub Pages

Este repositório já conta com um **GitHub Action** configurado para deploy automático.

1. Vá até as configurações do seu repositório no GitHub (**Settings**).
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
4. Sempre que você fizer um `push` para a branch `main`, o site será atualizado automaticamente.

*Nota: O script de deploy foi ajustado para funcionar mesmo que o arquivo `package-lock.json` não esteja presente no repositório.*

## 📝 Estrutura de Pastas

- `src/App.tsx`: Componente principal contendo toda a estrutura da página.
- `src/index.css`: Configurações globais de estilo e Tailwind.
- `.github/workflows/deploy.yml`: Configuração do GitHub Actions para deploy.

---
Desenvolvido por [Orvalia Studio](https://www.orvalia.com.br)
