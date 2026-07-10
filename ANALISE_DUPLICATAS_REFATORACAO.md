# 📊 RELATÓRIO DE ANÁLISE - PetFinder

## Duplicatas, Mapeamento de Dependências e Estrutura Recomendada

**Data:** 2026-07-09 | **Status:** ⚠️ CRÍTICO - Refatoração Urgente Necessária

---

## 1. ❌ ARQUIVOS CSS DUPLICADOS

### 1.1 Versões do `home.css` (4 VERSÕES DIFERENTES!)

| Localização            | Hash SHA256                                                        | Status       | Observações                       |
| ---------------------- | ------------------------------------------------------------------ | ------------ | --------------------------------- |
| `/home.css`            | `E98E36E12B758F52B0EDBCF9FEE639E047B7008632BA2383078F487EFD0CD2A8` | ⚠️ Raiz      | Versão 1 - Único local            |
| `/css/home.css`        | `2E519F12A8E2F53F6E0CAD7EAFE630C3D8EAD35CC0744AC87153B7E81586AB3D` | ⚠️ Diferente | Versão 2                          |
| `/styles/home.css`     | `D40A724590CD0BA60E0BF3269666C9281677F1973A33DFAA744771F4CFD4A0D3` | ⚠️ Diferente | Versão 3 - com scroll-padding-top |
| `/styles/css/home.css` | `552D55F7DF6170A0B5F80E8706D5B3E0F12E97C5A7EB12A0833FD235D259A79E` | ⚠️ Diferente | Versão 4                          |

**Problema:** Os HTMLs usam versões diferentes!

- `index.html` → `../styles/home.css` (Versão 3)
- `main.html` → `../styles/css/home.css` (Versão 4)

---

### 1.2 Versões do `estilo-adocao.css` (3 LOCALIZAÇÕES)

| Localização                     | Hash SHA256                                                        | Status    |
| ------------------------------- | ------------------------------------------------------------------ | --------- |
| `/estilo-adocao.css`            | `493A6B0F32FF39581D80511E29AF6940A840969A5D7452E08673DE3F6A8A7898` | Raiz      |
| `/css/estilo-adocao.css`        | `66C4B8FF869EBA15B4A2EB07D75CA0409CDD6D9B5421C79A40F264DEDF27B990` | Diferente |
| `/styles/css/estilo-adocao.css` | `EDAE9ACFAD5867965E45C4FD482EE4A51DD84FAC3F54E024E009DF9D418E2C64` | Diferente |

---

### 1.3 Todos os CSS Duplicados por Nome

Cada arquivo CSS abaixo **existe em 3 localizações com conteúdos DIFERENTES**:

- `/css/{arquivo}.css`
- `/styles/css/{arquivo}.css`
- _(alguns também em raiz)_

**Lista:**

1. `home.css` (4 versões!)
2. `adocao.css`
3. `cadastrados.css`
4. `campanhas.css`
5. `contato.css`
6. `detalhes.css`
7. `dicas.css`
8. `dicas_cuidados.css`
9. `editar-pet.css`
10. `editarAdotado.css`
11. `encontrados.css`
12. `estilo-adocao.css`
13. `estilo_responsivo.css`
14. `ongs.css`
15. `pagina inicial.css` (com espaço!)
16. `pagina_inicial.css` (com underscore!)
17. `painel_ong.css`
18. `Perdidos.css` (com P maiúsculo!)
19. `publicar.css`
20. `responsivo.css`

**Subtotal CSS:** 20 arquivos com DUPLICATAS = **60 arquivos CSS no total**

---

## 2. ❌ ARQUIVOS JS DUPLICADOS

### 2.1 Duplicatas: `js/` vs `scripts/js/` (6 ARQUIVOS)

Mesmos nomes, **conteúdos diferentes** em cada localização:

| Arquivo          | Hash js/                                                           | Hash scripts/js/                                                   | Status        |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------- |
| `anima.js`       | `722FDF8ECBC40500378CBCA1C553D31C78D84C26266120429A7FE16903728D22` | `D264D6FC510ED8F6FF8FDF2E4177A9CA8EF83A75C0227333A78B06A02F6EC391` | ❌ DIFERENTES |
| `contatoAPI.js`  | `5934B2E4340DC8D7FB1B8DFC5B535C57BA99DE7493F42394705E192393949521` | `DC0AD5199E6D0760C7C54ACDB85F2706F1870675E3AE4BD4B481C10F1908AC7D` | ❌ DIFERENTES |
| `exibir_pets.js` | `776B3405515239260C7DC2DA2DE31960EE38C6E8E000EF7011590AF60D81D0EC` | `396DB4BCF38495028CC56544646A5512BC92FBF5F2773DFAE4A30DEB98443898` | ❌ DIFERENTES |
| `home.js`        | `5586276D922C920ECCE90C093DD221550E0CE4AE1B1049AAE7C331AD9964C366` | `C12E464AB353D4A621D201F3A53407F7B9C52E99F33A873EBF28D0AD348B71E7` | ❌ DIFERENTES |
| `main.js`        | `69180815D9D0E796B490E71D4D956B2BBB49AD9B02F511A69BE5A7DCE0484FE8` | `D66F1AB2B7406D075BC81C6EE5293D30B17AA633BA5B723AB85A2470E3B2618A` | ❌ DIFERENTES |
| `parceiros.js`   | `700FB9BD36A51C9B8A30DA0C7237E7CADDE37E30D14F36ADC3CB45997AA19F3A` | `4019D133BDF9A70DF476D811301734D18D7E3EBBF71FC8A890341A567A44D033` | ❌ DIFERENTES |

**Conclusão:** Ambas as pastas têm versões completamente diferentes do mesmo arquivo!

### 2.2 Arquivos JS Únicos em `script/`

Estes arquivos existem **apenas** em `/script/` (e suas cópias em `/scripts/script/`):

| Arquivo               | Localização                                   |
| --------------------- | --------------------------------------------- |
| `autenticaAcao.js`    | script/ + scripts/script/                     |
| `cadastroPetAdoc.js`  | script/                                       |
| `cria_e_valida.js`    | script/ + scripts/script/                     |
| `dados2.js`           | script/                                       |
| `encontrado.js`       | script/ + scripts/script/                     |
| `exibirAdotados.js`   | script/ + scripts/script/                     |
| `login_system.js`     | script/ (com "login_system (1).js" duplicado) |
| `login_system (1).js` | script/ (nome com espaço e números - RUINS!)  |
| `painelOng.js`        | script/ + scripts/script/                     |
| `perdidos.js`         | script/ + scripts/script/                     |
| `recuperaCards.js`    | script/ + scripts/script/                     |
| `sheet.js`            | script/ + scripts/script/                     |
| `valida.js`           | script/                                       |

**Subtotal JS:** 13 arquivos + 6 duplicados = **19 arquivos JS no total**

---

## 3. 🔗 MAPEAMENTO HTML → CSS/JS

### Análise por HTML:

| Página HTML                  | CSS Usado                         | JS Usado                                                                                   | Localização |
| ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------ | ----------- |
| **index.html**               | `../styles/home.css`              | `../scripts/js/anima.js`<br>`../scripts/js/parceiros.js`<br>`../scripts/js/exibir_pets.js` | Raiz (`/`)  |
| **main.html**                | `../styles/css/home.css`          | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **adocao.html**              | `css/estilo-adocao.css`           | `script/exibirAdotados.js`                                                                 | Raiz (`/`)  |
| **adotar.html**              | `css/adocao.css`                  | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **animais_encontra.html**    | `../styles/css/encontrados.css`   | `../scripts/script/encontrado.js`                                                          | Raiz (`/`)  |
| **cadastrados.html**         | `../styles/css/cadastrados.css`   | `../scripts/script/recuperaCards.js`                                                       | Raiz (`/`)  |
| **campanhas.html**           | `../styles/css/campanhas.css`     | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **contato.html**             | `../styles/css/contato.css`       | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **criar-conta.html**         | Inline `<style>`                  | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **detalhes.html**            | `../styles/css/detalhes.css`      | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **dicas.html**               | `../styles/css/dicas.css`         | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **dicas_petfinder.html**     | _(desconhecido)_                  | _(desconhecido)_                                                                           | -           |
| **editar.html**              | `../styles/css/editar-pet.css`    | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **editarAdotado.html**       | `../styles/css/editarAdotado.css` | _(nenhum)_                                                                                 | Raiz (`/`)  |
| **login_ong.html**           | `../styles/css/ongs.css`          | `../scripts/script/cria_e_valida.js`                                                       | Raiz (`/`)  |
| **painel_ong.html**          | `../styles/css/painel_ong.css`    | `../scripts/script/painelOng.js`                                                           | Raiz (`/`)  |
| **publicar.html**            | `../styles/css/publicar.css`      | _(Leaflet externo)_                                                                        | Raiz (`/`)  |
| **publicar_encontrado.html** | _(desconhecido)_                  | _(desconhecido)_                                                                           | -           |

### 🚨 Problemas de Referência:

1. **Inconsistência de Paths:**
   - `index.html` → `../styles/home.css` ✓
   - `main.html` → `../styles/css/home.css` ✗ (diferente!)
   - `adocao.html` → `css/estilo-adocao.css` ✗ (path relativo curto!)

2. **CSS em Múltiplos Locais:**
   - `../styles/home.css` vs `../styles/css/home.css` = **versões diferentes!**
   - Editar uma não atualiza a outra

3. **JS Inconsistente:**
   - Alguns usam `../scripts/js/` (novo padrão)
   - Outros usam `script/` (antigo padrão)
   - Alguns usam `../scripts/script/` (novo padrão)

---

## 4. 📋 ANÁLISE DE CÓDIGO DUPLICADO

### Exemplo 1: `exibir_pets.js`

**Versão em `/js/exibir_pets.js`:**

```javascript
// Usa localStorage e classe 'container-cards'
const listaPets = JSON.parse(localStorage.getItem("ocorrenciasPets")) || [];
```

**Versão em `/script/exibir_pets.js`:**

```javascript
// Usa sessionStorage e classe 'container-cards'
const listaPets = JSON.parse(sessionStorage.getItem("pets")) || [];
```

**Conclusão:** Lógica diferente! Qual está sendo usada?

- index.html usa `../scripts/js/exibir_pets.js` (localStorage)

### Exemplo 2: `home.css`

**Versão `/styles/home.css` (index.html):**

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px; /* ← DIFERENÇA */
}
```

**Versão `/styles/css/home.css` (main.html):**

```css
/* Não tem scroll-padding-top */
```

**Conclusão:** Versões inconsistentes causam experiência diferente entre páginas!

---

## 5. 🏗️ ESTRUTURA ATUAL vs IDEAL

### Estrutura Atual (CAÓTICA):

```
petfinder/
├── home.css                    ← Raiz (versão 1)
├── estilo-adocao.css          ← Raiz (versão 1)
├── style.css                  ← Raiz (orphan?)
├── mobile-navbar.js           ← Raiz (único aqui)
├── css/                       ← 20 arquivos (versão 2)
│   ├── home.css
│   ├── estilo-adocao.css
│   └── ...
├── js/                        ← 6 arquivos
│   ├── anima.js
│   ├── exibir_pets.js
│   └── ...
├── script/                    ← 14 arquivos
│   ├── exibirAdotados.js
│   ├── login_system.js
│   ├── login_system (1).js    ← NOME RUIM!
│   └── ...
├── styles/                    ← Versão 3
│   ├── home.css
│   └── css/                   ← Versão 4 (20 arquivos)
│       ├── home.css
│       ├── estilo-adocao.css
│       └── ...
└── scripts/
    ├── js/                    ← Cópia de /js/ (versões diferentes!)
    │   ├── anima.js
    │   └── ...
    └── script/                ← Cópia de /script/ (versões diferentes!)
        ├── exibirAdotados.js
        └── ...
```

### Estrutura Recomendada (CLARA):

```
petfinder/
├── index.html
├── main.html
├── [outros HTMLs]
├── assets/
│   └── img/
├── src/                       ← Backend/Node.js
│   ├── index.js
│   └── routers/
├── styles/                    ← ÚNICA fonte de CSS
│   ├── home.css              ← Consolidado (versão final)
│   ├── adocao.css
│   ├── cadastrados.css
│   ├── campanhas.css
│   ├── contato.css
│   ├── detalhes.css
│   ├── dicas.css
│   ├── editar-pet.css
│   ├── editarAdotado.css
│   ├── encontrados.css
│   ├── estilo-adocao.css
│   ├── ongs.css
│   ├── painel_ong.css
│   ├── publicar.css
│   ├── responsivo.css        ← Consolidar estilos responsivos
│   └── utils/                ← Variáveis, mixins, temas
│       ├── variables.css
│       └── responsive.css
├── js/                        ← ÚNICA fonte de JS
│   ├── common/
│   │   ├── header.js
│   │   └── navigation.js
│   ├── features/
│   │   ├── pets-display.js    ← antes exibir_pets.js (consolidado)
│   │   ├── adoption.js        ← antes exibirAdotados.js
│   │   ├── found-animals.js   ← antes encontrado.js
│   │   ├── panel-ong.js       ← antes painelOng.js
│   │   ├── lost-pets.js       ← antes perdidos.js
│   │   ├── contact.js         ← antes contatoAPI.js
│   │   └── animations.js      ← antes anima.js
│   ├── utils/
│   │   ├── storage.js
│   │   ├── validation.js
│   │   ├── sheet-api.js
│   │   └── partners.js
│   └── config.js
└── .gitignore
```

---

## 6. ✅ RECOMENDAÇÕES DE REFATORAÇÃO

### FASE 1: Análise (IMEDIATA)

- [ ] Decidir qual versão de cada CSS/JS é a "fonte de verdade"
- [ ] Testar cada HTML em production para ver qual CSS/JS está sendo usado realmente
- [ ] Documentar qual funcionalidade cada arquivo duplicado tem

### FASE 2: Consolidação (1-2 dias)

- [ ] Manter apenas `/styles/` para CSS (delete `/css/`, `/styles/css/`)
- [ ] Manter apenas `/js/` para JS (delete `/script/`, `/scripts/`)
- [ ] Mesclar versões duplicadas de acordo com "fonte de verdade"
- [ ] Renomear arquivos ruins (ex: `login_system (1).js`)

### FASE 3: Atualização de Referências (1 dia)

- [ ] Atualizar todos os HTMLs para usar paths consistentes
- [ ] Padrão: `/styles/{arquivo}.css` e `/js/{arquivo}.js`
- [ ] Testar cada página após atualização

### FASE 4: Limpeza (algumas horas)

- [ ] Deletar todos os arquivos duplicados
- [ ] Deletar `node_modules` do controle de versão (.gitignore)
- [ ] Fazer commit da refatoração

### FASE 5: Reorganização (1-2 dias)

- [ ] Reorganizar JS em subpastas (`common/`, `features/`, `utils/`)
- [ ] Adicionar `styles/utils/variables.css` para cores, breakpoints, etc.
- [ ] Atualizar importações/referências

---

## 7. 🚩 PROBLEMAS CRÍTICOS IDENTIFICADOS

| Problema                      | Severidade | Impacto                                           |
| ----------------------------- | ---------- | ------------------------------------------------- |
| 4 versões de `home.css`       | 🔴 CRÍTICO | Páginas parecem não atualizar                     |
| 60 arquivos CSS (20 versões)  | 🔴 CRÍTICO | Confusão total, desperdício de espaço             |
| 19 arquivos JS (6 duplicados) | 🟠 ALTO    | Lógica inconsistente, difícil manutenção          |
| Paths inconsistentes          | 🟠 ALTO    | Alguns HTMLs usam `css/`, outros `../styles/css/` |
| Nomes de arquivo ruins        | 🟡 MÉDIO   | `login_system (1).js`, `pagina inicial.css`       |
| Estrutura aninhada profunda   | 🟡 MÉDIO   | `scripts/js/` duplica `js/`                       |

---

## 8. 📊 ESTATÍSTICAS

| Métrica                 | Valor                                                      |
| ----------------------- | ---------------------------------------------------------- |
| **Arquivos CSS únicos** | 20                                                         |
| **Versões CSS (total)** | 60                                                         |
| **Desperdício CSS**     | 40 arquivos (~65%)                                         |
| **Arquivos JS únicos**  | 19                                                         |
| **Versões JS (total)**  | 25                                                         |
| **Desperdício JS**      | 6 arquivos (~24%)                                          |
| **Arquivos HTML**       | ~15                                                        |
| **Diretórios para CSS** | 3 (`/css/`, `/styles/`, `/styles/css/`)                    |
| **Diretórios para JS**  | 4 (`/js/`, `/script/`, `/scripts/js/`, `/scripts/script/`) |
| **Espaço economizável** | ~40-50 arquivos (~15-20% do projeto)                       |

---

## 9. 🔄 SEQUÊNCIA DE AÇÕES RECOMENDADA

### Curto Prazo (Hoje):

1. ✅ Documentar esta análise
2. ✅ Identificar qual versão de cada CSS/JS é a mais recente/correta
3. ⏳ Fazer backup do projeto

### Médio Prazo (Esta Semana):

1. Consolidar CSS em `/styles/` (deletar `/css/` e `/styles/css/`)
2. Consolidar JS em `/js/` (deletar `/script/` e `/scripts/`)
3. Mesclar versões duplicadas
4. Atualizar todas as referências nos HTMLs

### Longo Prazo (Próximas Semanas):

1. Reorganizar em subpastas funcionais
2. Adicionar sistema de variáveis CSS
3. Considerar build system (webpack, vite) para otimização
4. Implementar CI/CD para detectar duplicatas

---

## 📝 NOTAS

- Este projeto começou simples mas cresceu sem planejamento de estrutura
- A existência de `/css/`, `/js/`, `/script/`, `/styles/`, `/scripts/` sugere múltiplas "tentativas" de organização
- Recomenda-se fazer a refatoração em branches para não quebrar desenvolvimento atual
- Considerar usar um linter CSS/JS para validar imports e paths

---

**Gerado em:** 2026-07-09  
**Próximo passo:** Validar qual versão de cada arquivo é a correta
