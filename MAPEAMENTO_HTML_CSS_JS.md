# 📑 MAPEAMENTO DETALHADO: HTML → CSS → JS

## Legendas

- ✅ = Referência clara
- ⚠️ = Múltiplas versões disponíveis (risco de usar a errada)
- ❌ = Arquivo não encontrado
- 📍 = Caminho com problema

---

## Página: **index.html** (Raiz - Página Inicial)

```
📄 index.html (raiz)
├─ 🎨 CSS: ../styles/home.css ✅
│  └─ Hash: D40A724590CD0BA60E0BF3269666C9281677F1973A33DFAA744771F4CFD4A0D3
│  └─ Versão 3 (com scroll-padding-top)
│
├─ 🔧 JS: ../scripts/js/anima.js ✅
│  └─ Hash: D264D6FC510ED8F6FF8FDF2E4177A9CA8EF83A75C0227333A78B06A02F6EC391
│
├─ 🔧 JS: ../scripts/js/parceiros.js ✅
│  └─ Hash: 4019D133BDF9A70DF476D811301734D18D7E3EBBF71FC8A890341A567A44D033
│
└─ 🔧 JS: ../scripts/js/exibir_pets.js ✅
   └─ Hash: 396DB4BCF38495028CC56544646A5512BC92FBF5F2773DFAE4A30DEB98443898
   └─ Usa: sessionStorage com id 'filtro-especie'
```

---

## Página: **main.html** (Raiz - Página Alternativa)

```
📄 main.html (raiz)
├─ 🎨 CSS: ../styles/css/home.css ⚠️
│  └─ Hash: 552D55F7DF6170A0B5F80E8706D5B3E0F12E97C5A7EB12A0833FD235D259A79E
│  └─ Versão 4 (DIFERENTE de index.html!)
│  └─ ⚠️ PROBLEMA: Diferentes versões de home.css em uso!
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **adocao.html** (Raiz - Adoções)

```
📄 adocao.html (raiz)
├─ 🎨 CSS: css/estilo-adocao.css ⚠️ 📍
│  └─ Path relativo (curto)
│  └─ Hash: 66C4B8FF869EBA15B4A2EB07D75CA0409CDD6D9B5421C79A40F264DEDF27B990
│  └─ Versão 2
│  └─ ⚠️ PROBLEMA: Existem 3 versões deste arquivo!
│
└─ 🔧 JS: script/exibirAdotados.js ⚠️ 📍
   └─ Path: script/ (não scripts/)
   └─ Hash: 967CBF44FEC148741F262B90E60DE628AA598C52ECDB1E1CFB42BBE0AC3D1B8F
   └─ ⚠️ PROBLEMA: Também existe em ../scripts/script/exibirAdotados.js
```

---

## Página: **adotar.html** (Raiz)

```
📄 adotar.html (raiz)
├─ 🎨 CSS: css/adocao.css ⚠️ 📍
│  └─ Path relativo (curto)
│  └─ Hash: 3B9F94049A0917536FED86E0F17B0FE26B70C5739BE20470C0527E1EF0CA5AC2
│  └─ Versão 2
│  └─ ⚠️ PROBLEMA: Existem 2 versões (css/ vs styles/css/)
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **animais_encontra.html** (Raiz - Encontrados)

```
📄 animais_encontra.html (raiz)
├─ 🎨 CSS: ../styles/css/encontrados.css ✅
│  └─ Hash: 85DAB5A6578AF0FEAB3FCFF1EAA483FCBC27A4BCCAAE3889AA90D8D6768A18D
│  └─ Versão 4
│
└─ 🔧 JS: ../scripts/script/encontrado.js ✅
   └─ Hash: C54C216910B6DB6EEA74F9D10EAB33D9E6CB8FD8A400910451938C09A0835FD7
   └─ Versão 2
```

---

## Página: **cadastrados.html** (Raiz - Pets Cadastrados)

```
📄 cadastrados.html (raiz)
├─ 🎨 CSS: ../styles/css/cadastrados.css ✅
│  └─ Hash: D07D170571022684C04D230B2AFDE232E5D107957FC6A4EEB136995B32E011EF
│  └─ Versão 4
│
└─ 🔧 JS: ../scripts/script/recuperaCards.js ✅
   └─ Hash: 3E66AC6E0E3504BB168319858E9EADC8A050E219D6562D9EF278CDDA80CF52E7
   └─ Versão 2
```

---

## Página: **campanhas.html** (Raiz - Campanhas)

```
📄 campanhas.html (raiz)
├─ 🎨 CSS: ../styles/css/campanhas.css ✅
│  └─ Hash: 9B276AF2714938F98D26D57F50CA82A6E6E4AFE0415707DF4B0C8DFC02DFF71C
│  └─ Versão 4
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **contato.html** (Raiz - Contato)

```
📄 contato.html (raiz)
├─ 🎨 CSS: ../styles/css/contato.css ✅
│  └─ Hash: 3A508DD3415E9087AD454B8C17A624997B6760695F1FC53339118D54E5BB171
│  └─ Versão 4
│
└─ 🔧 JS: Usa fetch() para SheetMonkey API (embutido no HTML)
```

---

## Página: **criar-conta.html** (Raiz - Criar Conta)

```
📄 criar-conta.html (raiz)
├─ 🎨 CSS: <style> inline (RUIM!)
│  └─ CSS embutido no HTML
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **detalhes.html** (Raiz - Detalhes)

```
📄 detalhes.html (raiz)
├─ 🎨 CSS: ../styles/css/detalhes.css ✅
│  └─ Hash: 2A4C2308800746A44C0001D62AD5C1A1945700896AFAC1E805328A68BF9C7067
│  └─ Versão 4
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **dicas.html** (Raiz - Dicas)

```
📄 dicas.html (raiz)
├─ 🎨 CSS: ../styles/css/dicas.css ✅
│  └─ Hash: 1CC1A8AC1D1066E4EADC9F9A4180C9BE50CDB78F4BC9D8A63510E4B54144A20A
│  └─ Versão 4
│
├─ 🎨 CSS (inline): <style> com .btn-emergencia
│  └─ CSS embutido (RUIM!)
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **dicas_petfinder.html** (Raiz - Dicas PetFinder)

```
📄 dicas_petfinder.html (raiz)
├─ 🎨 CSS: ❌ (não foram analisadas)
└─ 🔧 JS: ❌ (não foram analisadas)
```

---

## Página: **editar.html** (Raiz - Editar Pet)

```
📄 editar.html (raiz)
├─ 🎨 CSS: ../styles/css/editar-pet.css ✅
│  └─ Hash: 7615A47E372D5B087C87BFD6B7B3F61DD37D7BCF29CA9
│  └─ Versão 4
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **editarAdotado.html** (Raiz - Editar Adotado)

```
📄 editarAdotado.html (raiz)
├─ 🎨 CSS: ../styles/css/editarAdotado.css ✅
│  └─ Hash: BC3FE35CBDC44FD515D8A6ABC609655EF7AFA7347966CD95AC815D4B6768A18D
│  └─ Versão 4
│
└─ 🔧 JS: (nenhum)
```

---

## Página: **login_ong.html** (Raiz - Login ONG)

```
📄 login_ong.html (raiz)
├─ 🎨 CSS: ../styles/css/ongs.css ✅
│  └─ Hash: 6CE6411FC87B872F6F8CAE1150AD1E1D5D767F99B67DA904F05B9C55B434564B
│  └─ Versão 4
│
└─ 🔧 JS: ../scripts/script/cria_e_valida.js ✅
   └─ Hash: 6CE0015D7D4701A76362BA9636B078BC3942CF674DD11BF216AF92144160A29A
   └─ Versão 2
```

---

## Página: **painel_ong.html** (Raiz - Painel ONG)

```
📄 painel_ong.html (raiz)
├─ 🎨 CSS: ../styles/css/painel_ong.css ✅
│  └─ Hash: 0510A4AFA4FC6D5A2CFD8DBBA021C2003990B2FFFB54321A6C4C8E8AA9360779
│  └─ Versão 4
│
└─ 🔧 JS: ../scripts/script/painelOng.js ✅
   └─ Hash: D25D9C96E132924396A51E1BC0B56BA8B88ECC4A3D1A50F78EC97A0C6689BCA6
   └─ Versão 2
```

---

## Página: **publicar.html** (Raiz - Publicar Pet)

```
📄 publicar.html (raiz)
├─ 🎨 CSS: ../styles/css/publicar.css ✅
│  └─ Hash: F552A761F9DC59748E7375A540928A79A1F706ABE89F78B07418B179990D4AE9
│  └─ Versão 4
│
├─ 📦 JS (externo): Leaflet 1.9.4 (mapa)
│  └─ https://unpkg.com/leaflet@1.9.4/dist/leaflet.js
│
└─ 📦 CSS (externo): Leaflet 1.9.4 (mapa)
   └─ https://unpkg.com/leaflet@1.9.4/dist/leaflet.css
```

---

## Página: **publicar_encontrado.html** (Raiz - Publicar Encontrado)

```
📄 publicar_encontrado.html (raiz)
├─ 🎨 CSS: ❌ (não foram analisadas)
└─ 🔧 JS: ❌ (não foram analisadas)
```

---

## 📊 RESUMO POR TIPO DE REFERÊNCIA

### CSS References Pattern:

| Padrão                        | Contagem | Status                         |
| ----------------------------- | -------- | ------------------------------ |
| `../styles/css/{arquivo}.css` | 11       | ✅ Novo padrão                 |
| `../styles/{arquivo}.css`     | 1        | ✅ Novo padrão (mas diferente) |
| `css/{arquivo}.css`           | 2        | ⚠️ Caminho relativo curto      |
| Inline `<style>`              | 2        | ❌ RUIM                        |

### JS References Pattern:

| Padrão                           | Contagem | Status                    |
| -------------------------------- | -------- | ------------------------- |
| `../scripts/js/{arquivo}.js`     | 3        | ✅ Novo padrão            |
| `../scripts/script/{arquivo}.js` | 4        | ✅ Novo padrão            |
| `script/{arquivo}.js`            | 1        | ⚠️ Caminho relativo curto |
| Externo (CDN)                    | 1        | ✅ Aceito                 |

---

## 🚨 PROBLEMAS CRÍTICOS POR PÁGINA

### 1. **index.html** vs **main.html**

- **Problema:** Mesma página, mas CSS diferentes!
- **Impacto:** Experiência visual completamente diferente
- **Solução:** Mesclar em uma única página ou unificar CSS

### 2. **adocao.html** e **adotar.html**

- **Problema:** Paths inconsistentes (`css/` vs `../styles/css/`)
- **Impacto:** Difícil manutenção, confusão
- **Solução:** Padronizar todos para `../styles/css/`

### 3. **criar-conta.html**

- **Problema:** CSS inline em `<style>`
- **Impacto:** Sem reutilização, difícil atualizar tema
- **Solução:** Extrair para arquivo externo

### 4. **dicas.html**

- **Problema:** CSS parcialmente inline (`.btn-emergencia`)
- **Impacto:** Mistura de CSS inline e externo
- **Solução:** Mover tudo para arquivo externo

---

## 📈 DEPENDÊNCIAS CONSOLIDADAS

```
ARQUIVO CSS          USADO POR               VERSÕES
==================== ======================= ========
home.css             index.html              4
                     main.html
estilo-adocao.css    adocao.html            3
adocao.css           adotar.html            2
encontrados.css      animais_encontra.html  2
cadastrados.css      cadastrados.html       2
campanhas.css        campanhas.html         2
contato.css          contato.html           2
detalhes.css         detalhes.html          2
dicas.css            dicas.html             2
editar-pet.css       editar.html            2
editarAdotado.css    editarAdotado.html     2
ongs.css             login_ong.html         2
painel_ong.css       painel_ong.html        2
publicar.css         publicar.html          2
responsivo.css       [vários?]              2
```

---

**Gerado em:** 2026-07-09  
**Recomendação:** Consolidar em uma única estrutura de diretórios
