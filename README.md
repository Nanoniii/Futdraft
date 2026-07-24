# ⚽ FutDraft

Jogo de **draft de futebol** para navegador, inspirado no formato **7 a 0**. Sorteie times aleatórios, monte seu elenco jogador por jogador e dispute campeonatos simulados até erguer a taça — sozinho, em dupla no mesmo aparelho ou online contra outra pessoa.

🔗 100% front-end, sem instalação: basta abrir o `index.html` no navegador.

---

## 🎮 Como funciona

1. **Escolha a competição** — Champions League, Libertadores, Copa do Brasil, Copa do Mundo, Eurocopa, Copa América, Mundial de Clubes ou o Modo Livre (torneio configurável com os times que você quiser).
2. **Escolha a formação** entre 15 esquemas táticos (4-3-3, 4-4-2, 3-5-2, 2-3-5 e outros).
3. **Role o dado** para sortear um time a cada rodada do draft e escolha um jogador do elenco sorteado para entrar no seu time. Dá pra re-sortear (limitado) ou garantir um time específico gastando Draft Points.
4. **Defina capitão, cobrador de pênalti e de falta**, monte o banco e ajuste o estilo tático.
5. **Simule as partidas**: os jogos rodam em timelapse com narração de eventos (gols, cartões, substituições), e você pode intervir com trocas ao vivo.
6. Avance na chave até a final e **acompanhe destaques da campanha** (artilheiro, garçom, maior goleada feita/sofrida).

## ✨ Principais recursos

- **7 competições licenciadas por dados próprios** + Modo Livre com seleção manual de times e repetição opcional.
- **Modo Hardcore**: overalls ficam ocultos e o re-sorteio é desativado, para quem quer o desafio no escuro.
- **Restrição Temática**: limita o sorteio a times de um único país/continente por partida.
- **Draft Points**: moeda interna ganha ao jogar, usada para re-sorteios extras e para garantir um time específico no draft.
- **Multiplayer local (mesmo aparelho)**: dois jogadores fazem o draft em sequência e disputam confronto direto ou "maior campanha" (via Firebase Realtime Database).
- **Multiplayer online**: salas com código, um host publica formação e o app sincroniza o draft entre os participantes.
- **Sistema de conquistas** com mais de 90 achievements (sequências de vitórias, goleadas, artilheiros, Grand Slam nas 7 competições, modo hardcore, etc).
- **Histórico e Hall da Fama**: estatísticas de carreira, pódios, elenco dos sonhos (dream team) e replay dos jogos salvos.
- **Cartões de compartilhamento** (imagem e texto) gerados na hora para postar o resultado da partida ou da campanha.
- **Vitrine de times**: catálogo navegável com escalação-base de cada equipe disponível.
- **Sons ambiente e efeitos** (apito, gol, torcida), com controle individual por categoria, além de modo escuro e velocidade de simulação ajustável.

## 🗂️ Estrutura do projeto

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Estrutura das telas e imports |
| `style.css` | Toda a estilização (temas claro/escuro incluídos) |
| `game.js` | Motor principal: draft, formação, simulação de partidas, conquistas ligadas à partida, compartilhamento |
| `progression.js` | Histórico de carreira, conquistas, Hall da Fama |
| `multiplayer.js` | Modo dupla local e modo online (Firebase Realtime Database) |
| `alt_positions.js` | Posições alternativas dos jogadores |
| `data.js` | Base de times/jogadores das competições principais |
| `copa_america_teams.js`, `eurocopa_teams.js`, `mundial_teams.js` | Bases de times por competição |
| `sounds/` | Efeitos sonoros e ambiente de torcida |

## 🚀 Rodando localmente

Não há build nem dependências para instalar — é HTML/CSS/JS puro (mais duas bibliotecas via CDN: `html2canvas` para os cartões de compartilhamento e o SDK do Firebase para o multiplayer online).

```bash
# clone o repositório e abra o index.html direto no navegador
git clone <url-do-repo>
cd Futdraft-main
open index.html   # ou apenas dê duplo clique / arraste para o navegador
```

Para o multiplayer online funcionar plenamente é necessário acesso à internet (o app se conecta a um Firebase Realtime Database já configurado em `multiplayer.js`).

## 🛠️ Tecnologias

- HTML5, CSS3 e JavaScript puro (sem framework/build step)
- [Firebase Realtime Database](https://firebase.google.com/) para o multiplayer online
- [html2canvas](https://html2canvas.hertzen.com/) para gerar as imagens de compartilhamento

## 📌 Status

Projeto em desenvolvimento ativo — veja o changelog dentro do próprio jogo (ícone de changelog no menu) para as últimas novidades.

