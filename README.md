# José Victor — Professional Portfolio

🔗 **Link Oficial de Produção (GitHub Pages):** [https://josev-001.github.io/josev001-portfolio/](https://josev-001.github.io/josev001-portfolio/)

Este é um site de portfólio profissional responsivo, desenvolvido com o objetivo de apresentar minhas competências, projetos em destaque e formação acadêmica como **Backend Developer** em formação.

O projeto foi construído utilizando tecnologias web fundamentais (HTML5, CSS3, Vanilla JS) de forma limpa, estruturada e em total conformidade com as diretrizes e requisitos de avaliação acadêmica.

---

## ✨ Funcionalidades e Requisitos da Disciplina

O código-fonte foi planejado para cumprir estritamente todos os requisitos da disciplina acadêmica. Veja abaixo como cada critério foi implementado:

- [x] **Layout totalmente responsivo (Mobile-First / Media Queries):** O layout adapta-se de forma fluida e elegante para todos os dispositivos. A responsividade foi 100% corrigida e otimizada: o layout mobile agora utiliza CSS Grid empilhado (`grid-template-columns: 1fr;`) e flexbox fluido, garantindo que a seção de "Projetos em Destaque" e os cards individuais sejam exibidos perfeitamente em celulares sem quebras de layout ou problemas de overflow horizontal.
- [x] **Menu de navegação funcional:** Menu fixo com efeito de *Glassmorphism* (desfoque de fundo) nas páginas e suporte a menu responsivo em telas menores, garantindo fácil acesso em qualquer dispositivo.
- [x] **Formulário de contato assíncrono:** Integração assíncrona usando a API Fetch do JavaScript para enviar dados diretamente para o serviço Formspree sem recarregar a página, além de validações estritas de inputs (nome completo, e-mail via regex e mensagem).
- [x] **Efeitos interativos em Vanilla JS:** Refatoração baseada em módulos independentes (`effects.js`, `form.js`) integrados por um maestro centralizador (`main.js`). Apresenta efeitos dinâmicos de iluminação/neon roxo nos cards de projetos e imagens e interações de hover suaves.
- [x] **Boas práticas de SEO Humano e Acessibilidade:** Implementação baseada em tags semânticas do HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) e atributos de acessibilidade (`aria-label`, `aria-describedby`). As meta tags descritivas foram escritas manualmente em primeira pessoa ("Meu portfólio..."), proporcionando um SEO natural e livre de termos artificiais gerados por IA.

---

## 🎨 Identidade Visual e UI/UX

A identidade visual do portfólio foi desenhada para transmitir modernidade e sofisticação, focando em um tema escuro (*Dark Mode*) de alta legibilidade para desenvolvedores:

- **Paleta de Cores:**
  - `Fundo Principal (Darkest):` `#0D1117` — Garante conforto visual prolongado.
  - `Fundo de Containers/Cards (Dark Slate):` `#161B22` — Define hierarquias visuais e separação de conteúdo.
  - `Destaque/Acento (Purple):` `#8B5CF6` — Foca a atenção do usuário em links, botões e elementos interativos.
- **Tipografia:** 
  - Utiliza a fonte **Poppins** (importada do Google Fonts) por sua estética geométrica, moderna, limpa e excelente legibilidade em diferentes escalas e dispositivos.

---

## 🛠️ Diferenciais Técnicos

- **Refatoração Clean Code:** O CSS passou por uma refatoração completa e minuciosa, eliminando redundâncias por meio do agrupamento estratégico de seletores compartilhados (como os layouts de botões e cards), simplificação de regras repetidas em Media Queries e uso de propriedades shorthand, o que reduziu significativamente o boilerplate e facilitou a manutenção sem alterar em nada o design visual pretendido.

---

## 🧱 Arquitetura e Organização do Código

O projeto segue uma arquitetura modularizada, separando as preocupações de estilo, comportamento e estrutura de forma limpa e organizada:

```text
josev001-portfolio/
├── css/
│   ├── animations.css     # Definição de keyframes, transições e efeitos de reveal
│   └── style.css          # Estilo global, tokens de cores, responsividade e componentes estruturais
├── img/
│   └── logo.png           # Assets visuais do projeto
├── js/
│   ├── effects.js         # Módulo de efeitos interativos e efeitos de brilho neon
│   ├── form.js            # Módulo de validação e envio assíncrono do formulário
│   └── main.js            # Arquivo principal (Ponto de Entrada/Maestro)
├── about.html             # Página "Sobre Mim" detalhando formação e objetivos
├── contact.html           # Página de contato com formulário integrado
├── index.html             # Página inicial (Home) com herói e chamada de ação
├── projects.html          # Página de portfólio de projetos técnicos backend
└── README.md              # Documentação oficial do projeto
```

---

## 🚀 Como Executar Localmente

Siga os passos rápidos abaixo para rodar o site de portfólio em sua máquina local:

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/JoseV-001/josev001-portfolio.git
   ```
2. **Entrar no diretório do projeto:**
   ```bash
   cd josev001-portfolio
   ```
3. **Executar via Servidor Local:**
   - Com o **VS Code**, abra a pasta do projeto e use a extensão **Live Server**.
   - Clique em **Go Live** no canto inferior direito para abrir a aplicação localmente no navegador padrão no endereço:
     ```text
     http://127.0.0.1:5500/index.html
     ```
