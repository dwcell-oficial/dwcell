# PROMPT — Landing Page Institucional DW CELL

## Contexto do cliente (auditado do Instagram @dwcellacessorios.americana em 19/08/2026)
- **Nome:** DW Cell Acessórios (conta auditada é identificada como "Loja 2" no nome de exibição)
- **Bio real (copiada literalmente):**
  > 📱Dwcell Acessórios - Loja 2
  > 👨🏻‍💻Assistência técnica
  > ⏱️Trocas de Telas em até 1h !!
  > 📱Acessórios e muito mais…
  > 📍R. Guarantã 11, em frente ao Pague
- **Instagram:** @dwcellacessorios.americana — 412 seguidores, 1.343 seguindo
- **WhatsApp real:** (19) 99254-4686 → wa.me/5519992544686 (confirmado via link da bio)
- **Cidade:** Americana/SP
- **Endereços reais identificados (2 lojas):**
  - **Loja 2:** R. Guarantã, 11 — em frente ao Pague (Menos), Americana/SP (endereço da bio)
  - **Endereço adicional visto em post de assistência técnica:** Av. Brasil, 1986 — Americana/SP
    (tratado no site como "Loja 1"; não há confirmação 100% explícita de que a numeração
    "Loja 1/Loja 2" corresponde exatamente a este endereço — **validar com o cliente antes de
    publicar externamente**)
- **Serviços reais (bio + posts + highlights):** assistência técnica, troca de tela em até 1h,
  troca de bateria, reparo de conector, **película grátis na troca de tela**, venda de iPhones
  seminovos revisados com garantia
- **Produtos reais (highlights do perfil):** Fones, Capinhas, Películas 3D, Copos Stanley,
  Caixa de som, Cabos/Carregadores
- **Não encontrado / não usado:** logo em alta resolução (perfil não pôde ser baixado
  programaticamente nesta sessão — sem ferramenta de navegador/scraping de imagem disponível),
  fotos reais dos produtos/loja, depoimentos de clientes. **Nada disso foi inventado** — o site
  usa fotografia e vídeo de banco de imagens (Pexels, licença gratuita) no lugar, e não apresenta
  nenhuma imagem de banco como se fosse post real do Instagram.

## Tema visual
- **Tema claro** (pedido do cliente em revisão posterior — substituiu o tema escuro original)
- Base branca `#ffffff` + alternância `#F1F5FC` (`--bg-alt`) para separar seções, texto em
  `#10182B` (`--ink`)
- Azul de marca **real**, extraído por amostragem de pixel do logo oficial (`Logo DW Cell.png`):
  `#0B3D8F` (`--blue`) + acento `#2F7BFF` (`--blue-light`) para gradientes/glows — substituiu o
  laranja/âmbar da primeira versão
- Cards (produtos, categorias, lojas, diferenciais) usam fundo branco + sombra suave em vez de
  bordas fortes, para não ficarem "grudados" no fundo branco da página
- Mapas do Google (`iframe`) voltaram à cor original (removido o `filter:grayscale()` que só
  fazia sentido para disfarçar o mapa claro dentro do tema escuro anterior)
- Logo real (`assets/img/logo-icon.png`, recortado do arquivo `Logo DW Cell.png` fornecido pelo
  cliente) usado no menu, rodapé e favicon — ver `[[project_dw_cell]]` para detalhes do
  processamento (remoção do texto "CELL" preto, que ficava ilegível/some em fundo escuro)

## Objetivo
Site **institucional**, foco total em conversão para **WhatsApp e Instagram** — não é loja
online (sem carrinho/checkout).

## Assets usados
Banco gratuito (Pexels, baixados via CDN direto):
- `assets/video/hero_orange_case.mp4` — mãos com capinha laranja (hero)
- `assets/video/hands_orange_case.mp4` — close-up capinha laranja
- `assets/video/repair_hands.mp4` — reparo/troca de tela em andamento (não usado no layout final)
- `assets/video/broken_iphone.mp4` — close-up de tela quebrada (não usado no layout final)
- `assets/video/smartphone_interior.mp4` — interior/placa de smartphone aberto (não usado)
- `assets/img/` — 8 fotos still (acessórios, fones, capinha+popsocket, técnico com microscópio,
  smartphone desmontado, placa de circuito em reparo)

Reels **reais** do Instagram @dwcellacessorios.americana (baixados com `yt-dlp`, ferramenta já
instalada na máquina — `py -m yt_dlp`, sem precisar de navegador/Playwright):
- `assets/video/reel_loja2.mp4` — tour da Loja 2 ("Venham conhecer nossa loja 2!!!")
- `assets/video/reel_acessorios.mp4` — acessórios a partir de R$50 (legenda confirma o endereço
  real: "Rua garata 11 (em frente ao paguemenos)" — validou a correção Pague → **Pague Menos**)
- `assets/video/reel_capinhas.mp4` — capinhas/películas (humor)
- `assets/video/reel_loja.mp4` — "Corra para Dwcell"
- Usados na seção de Reels (`#instagram`) em formato "moldura de celular" com botão de
  ativar/desativar som por vídeo (mesmo padrão de `Site Clientes/BM Automação`)

## Checklist de execução
- [x] Hero fullscreen com vídeo de fundo + headline baseada na bio real + CTAs WhatsApp/Instagram
- [x] Marquee com serviços/produtos reais
- [x] Cards de acessórios/serviços com fotos de banco + CTA wa.me com texto pré-preenchido
- [x] Seção de diferenciais (troca em 1h, película grátis, garantia, 2 lojas, atendimento rápido)
- [x] Seção assistência técnica full-width (checklist em grid, sem vídeo) com CTA de orçamento
- [x] Seção "Nossas Lojas" com as 2 localizações reais + mapas embed do Google
- [x] Seção de categorias (espelhando os highlights reais do Instagram: fones, capinhas,
      películas, power bank, cabos, manutenções)
- [x] Seção de Reels reais do Instagram (4 vídeos baixados com yt-dlp, moldura de celular +
      botão de som por vídeo, autoplay mudo por padrão — padrão de `Site Clientes/BM Automação`)
- [x] Botão WhatsApp flutuante
- [x] Botão "voltar ao topo" acima do botão do WhatsApp (aparece após rolar a página)
- [x] Menu mobile com fundo sólido e z-index alto (bug conhecido de `inset:0` +
      `backdrop-filter` colapsando menu — evitado desde o início)
- [x] Rodapé de crédito AuraWave (`aw-credit`) conforme `Site Clientes/AURAWAVE-FOOTER.md`
      (coração roxo #8b5cf6 fixo)

## Pendências para o cliente confirmar
- Confirmar se "Loja 1" é de fato o endereço Av. Brasil, 1986 (ou outro) — a Loja 2 (R. Guarantã,
  11, em frente ao Pague Menos) foi confirmada por legenda real de post no Instagram
- Enviar logo em alta resolução para substituir o badge de texto "DW"
- Enviar fotos reais da loja/produtos e depoimentos de clientes, se quiser trocar as imagens
  de banco por conteúdo 100% autoral

## Servir localmente
`py -m http.server 8912` na pasta do projeto → http://localhost:8912
