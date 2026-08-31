# Portfólio — Luiz Guimarães

Portfólio pessoal desenvolvido com **React 19 + Vite + TypeScript + Tailwind CSS**.
Inclui seções: Home (hero animado), Sobre, Projetos (com carrossel), Contato e Rodapé,
além do botão de download do currículo em PDF.

## 🚀 Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção (tsc + vite)
npm run preview   # preview do build
npm run lint      # ESLint
```

## 📄 Currículo em PDF (onde colocar o SEU arquivo)

Todos os botões **"Baixar currículo"** (Hero, Sobre, Header e Rodapé) apontam para o
arquivo **`public/assets/Curriculo.pdf`**.

Para usar o **seu** currículo:

1. Pegue seu arquivo `.pdf` (o que você envia em processos seletivos).
2. Coloque-o em `public/assets/` **com o mesmo nome `Curriculo.pdf`** (substituindo o atual).
3. Pronto — o site passa a baixar o seu arquivo.

> Dica: se quiser usar outro nome de arquivo, basta renomeá-lo para `Curriculo.pdf`,
> ou atualizar o caminho `href="/assets/Curriculo.pdf"` em:
> - `src/components/Hero.tsx`
> - `src/components/About.tsx`
> - `src/components/Header.tsx`
> - `src/components/Footer.tsx`

> Obs.: a pasta `resume/` contém um HTML de currículo usado apenas como placeholder
> para gerar o PDF inicial. Ele **não** é usado pelo site — o site usa somente
> `public/assets/Curriculo.pdf`. Você pode apagar a pasta `resume/` se preferir.

## 🖼️ Imagens em carrossel nos projetos

Os projetos ficam em `src/components/Projects.tsx`, cada um com um array `images`:

```ts
const projects = [
  {
    title: "Focus Life",
    images: ["/projects/focus-1.png"], // ← adicione mais caminhos aqui para virar carrossel
    ...
  },
];
```

Para deixar um projeto com carrossel:

1. Coloque as imagens na pasta **`public/`** (ex.: `public/projects/focus-1.png`).
2. No array `images` do projeto, adicione o caminho de **cada** imagem:

   ```ts
   images: ["/projects/focus-1.png", "/projects/focus-2.png", "/projects/focus-3.png"]
   ```

3. Quando houver **mais de uma imagem**, o carrossel aparece automaticamente com:
   - Setas ◀ ▶ (visíveis no celular e no hover no desktop)
   - Pontos indicadores
   - Contador (ex.: `1 / 3`)
   - **Swipe** (arrastar) em telas de toque

## 🎨 Estrutura

```
public/assets/Curriculo.pdf   ← SEU currículo (substitua este arquivo)
public/img.jpg                ← foto do perfil (Hero)
public/projects/*.png         ← imagens dos projetos (carrossel)
src/components/
  Header.tsx    — navegação fixa, barra de progresso, botão Currículo
  Hero.tsx      — hero com efeito de digitação e badges flutuantes
  About.tsx     — sobre, stats, stack, timeline, card de currículo
  Projects.tsx  — projetos com carrossel (ProjectImageCarousel)
  Contact.tsx   — contato e redes sociais
  Footer.tsx    — rodapé
tailwind.config.js            — tema: cores, animações e sombras
src/App.css                   — utilitários (text-gradient, glass, bg-grid...)
```

