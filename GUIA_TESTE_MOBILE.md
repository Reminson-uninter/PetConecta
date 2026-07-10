# 🚀 Guia Rápido - Como Testar as Melhorias Mobile

## 1️⃣ Testar no Navegador (Mais Fácil)

### Chrome / Edge

```
1. Abrir página: index.html
2. Pressionar: F12 (ou Ctrl+Shift+I)
3. Ativar Device Mode: Ctrl+Shift+M
4. Selecionar dispositivo: iPhone 12 Pro
5. Atualizar página: F5 ou Ctrl+R
```

### Verificar Breakpoints

**Mobile (375px):**

- [ ] Mapa altura reduzida (~250-300px)
- [ ] Menu hamburger visível
- [ ] Grid: 1 coluna
- [ ] Fonts menores

**Tablet (768px):**

- [ ] Transição suave
- [ ] Menu still hamburger
- [ ] Grid: 2 colunas

**Desktop (1920px):**

- [ ] Mapa: 700px
- [ ] Menu: expandido (não hamburger)
- [ ] Grid: 4 colunas

---

## 2️⃣ Testar Responsividade do Mapa

### Antes (Problema)

```
Desktop:  700px ✅
Mobile:   700px ❌ (muito grande!)
```

### Depois (Solução)

```
Desktop (≥1300px):  700px ✅
Tablet (768-1299px): 300px ✅
Mobile (<768px):     250px ✅
```

### Como Testar:

```
1. F12 → Device Mode
2. Clicar em dropdown "iPhone 12 Pro"
3. Inspencionar elemento: #mapa-pets
4. Ver height no computed styles
5. Redimensionar até 480px - altura deve ser 250px
```

---

## 3️⃣ Testar Navegação Mobile

### Menu Hamburger

```
1. F12 → Device Mode (375px)
2. Procurar ícone ≡ (hamburger) no topo
3. Clicar nele
4. Menu deve abrir com animação
5. Clicar novamente para fechar
```

### Teclado (ESC)

```
1. Abrir menu com hamburger
2. Pressionar tecla ESC
3. Menu deve fechar
```

### Auto-close

```
1. Abrir menu
2. Clicar em qualquer link de navegação
3. Menu deve fechar automaticamente
```

---

## 4️⃣ Testar Formulários

### Font Size (16px Prevention)

```
1. F12 → Device Mode
2. Inspecionar um input
3. Em Styles → procurar "font-size: 16px;"
4. Deve estar presente para prevenir iOS zoom
```

### Touch Targets (44px)

```
1. F12 → Device Mode
2. Inspecionar botão ou input
3. Em Styles → procurar "min-height: 44px;"
4. Verificar padding: 12px ou superior
```

---

## 5️⃣ Testar Tipografia Mobile

### Tamanhos

```
F12 → Device Mode (375px) → Inspecionar elemento

h1 deve ser: 1.6rem (~25px)
h2 deve ser: 1.3rem (~20px)
h3 deve ser: 1.1rem (~17px)
body deve ser: 15px
```

### Line-height

```
p elementos devem ter: line-height: 1.7 (no mínimo)
Isso melhora legibilidade em telas pequenas
```

---

## 6️⃣ Verificar Console (Erros)

```
F12 → Console
Deve estar limpo, sem mensagens de erro em vermelho.

Se houver erro tipo:
"Cannot read property X of undefined"
→ Reportar imediatamente
```

---

## 7️⃣ Validação Lighthouse

```
F12 → Lighthouse (ou Ctrl+Shift+P → Lighthouse)

Configurar:
- Mode: Mobile
- Categories: All

Executar e verificar scores:
- Performance: >50 ✅
- Accessibility: >85 ✅
- Best Practices: >80 ✅
```

---

## 8️⃣ Testar em Dispositivo Real (Opcional)

### Conectar Celular

```
1. Conectar celular via USB
2. Chrome: chrome://inspect
3. Selecionar dispositivo
4. Remotedebugging ativado
```

### Testar Sem USB (Localhost)

```
1. Descobrir IP da máquina: ipconfig
2. No celular abrir: http://SEU_IP:PORTA
3. Testar mobile normalmente
```

---

## 📊 Teste Rápido (5 minutos)

Se está com pressa, faça este teste:

```
1. F12 → Device Mode: iPhone 12 Pro
2. Atualizar página
3. Verificar:
   ✅ Mapa não ultrapassa altura (scroll apenas dentro do mapa)
   ✅ Menu hamburger funciona
   ✅ Formulário inputs têm espaço
   ✅ Nenhuma área com scroll horizontal
   ✅ Sem erros no console

Se TODOS os 5 itens ✅ = SUCESSO!
```

---

## 🔧 Se Encontrar Problemas

### Problema: Mapa ainda tem 700px em mobile

```
Solução:
1. F12 → elementos
2. Procurar #mapa-pets
3. Procurar por media query @media (max-width: 768px)
4. Se não existir, adicionar em styles/home.css
```

### Problema: Menu hamburger não funciona

```
Solução:
1. F12 → Console
2. Verificar se há erros de JavaScript
3. Verificar se mobile-navbar.js está carregado
4. Testar classe ".active" está sendo adicionada
```

### Problema: Inputs fazem zoom em iPhone

```
Solução:
1. Adicionar font-size: 16px; em input
2. Nenhum valor menor que 16px
3. Isto previne iOS zoom automático
```

### Problema: Botões muito pequenos para tocar

```
Solução:
1. Adicionar min-height: 44px;
2. Adicionar min-width: 44px;
3. Adicionar padding: 12px 16px;
```

---

## 📱 Dispositivos Populares (Resoluções)

```
iPhone 13/14/15 Mini:    375px
iPhone SE:               375px
iPhone 12/13/14 Pro:     390px
Pixel 6/7:               412px
iPad Mini:               768px
iPad Pro 11":            834px
iPad Pro 12.9":          1024px
```

Use estas dimensões no Device Mode do Chrome.

---

## ✨ Tips Pro

1. **Usar Ctrl+Shift+P** (DevTools) para rápido acesso:
   - "Capture screenshot" - screenshot mobile
   - "Lighthouse" - audit
   - "Emulation" - simular 3G/4G

2. **Usar Network Throttling**:
   - DevTools → Network → Throttle
   - Slow 3G: simula conexão lenta
   - Ver se página ainda funciona bem

3. **Usar Responsive View**:
   - DevTools → Customize → Responsive Design Mode
   - Redimensionar manualmente qualquer tamanho

4. **Toggle Device Frame**:
   - DevTools → ... → Show device frame
   - Ver página dentro de moldura de iPhone

---

## 🎯 Checklist Final

```
Antes de declarar "Completo":

[ ] Mapa responsivo em todos breakpoints
[ ] Menu hamburger funciona em mobile
[ ] ESC key fecha menu
[ ] Formulários com 16px font-size
[ ] Touch targets 44x44px mínimo
[ ] Nenhum scroll horizontal
[ ] Sem erros no console
[ ] Lighthouse Mobile score >80
[ ] Tipografia legível em mobile
[ ] Cores/contraste adequado

Tudo marcado? ✅ PRONTO PARA PRODUÇÃO!
```

---

**Última atualização:** 2026-07-09  
**Versão:** 1.0
