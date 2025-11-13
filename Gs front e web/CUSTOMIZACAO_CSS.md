# Guia de Customização CSS da Página

## 📋 Resumo
A página usa **Tailwind CSS** (classes direto no JSX) + `App.css` para estilos customizados.

---

## 🎨 COMO MUDAR COR, FONTE E LAYOUT

### 1️⃣ CORES PRINCIPAIS
As cores são definidas com classes Tailwind no `App.jsx`. Para mudar:

#### Header (cabeçalho)
**Arquivo:** `src/App.jsx` (linha ~65)

Procure por:
```jsx
<header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm p-4">
```

**Opções de cores:**
- `bg-white` → Branco
- `bg-indigo-600` → Azul (tom indigo)
- `bg-blue-500` → Azul claro
- `bg-purple-600` → Roxo
- `bg-red-600` → Vermelho
- `bg-gradient-to-r from-blue-600 to-purple-600` → Gradiente

**Exemplo:** Mudar header para roxo
```jsx
<header className="sticky top-0 z-10 bg-purple-600 dark:bg-purple-900 shadow-lg backdrop-blur-sm p-4">
```

---

#### Cards dos Profissionais
**Arquivo:** `src/components/perfilcard.jsx` (linha ~10)

Procure por:
```jsx
className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 ..."
```

**Mudar background dos cards:**
- `bg-white` → Branco
- `bg-blue-50` → Azul muito claro
- `bg-gray-50` → Cinza claro

**Exemplo:** Cards com fundo azul claro
```jsx
className="bg-blue-50 dark:bg-gray-800 rounded-lg shadow-xl p-6 ..."
```

---

#### Botões e Links
**Arquivo:** `src/App.jsx` (linhas com classes de botões)

Procure por:
```jsx
className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
```

**Cores disponíveis:**
- `bg-indigo-600` → Azul
- `bg-green-600` → Verde
- `bg-orange-500` → Laranja
- `bg-pink-600` → Rosa

---

### 2️⃣ FONTES E TAMANHOS

#### Alterar tamanho de títulos
**Procure por:** `text-2xl`, `text-3xl`, `text-lg`

| Classe       | Tamanho    |
|-------------|-----------|
| `text-xs`   | Extra pequeno |
| `text-sm`   | Pequeno |
| `text-base` | Normal |
| `text-lg`   | Grande |
| `text-xl`   | Muito grande |
| `text-2xl`  | Gigante |
| `text-3xl`  | Super gigante |
| `text-4xl`  | Enorme |

**Exemplo:** Aumentar título principal
```jsx
// De:
<h2 className="text-2xl font-semibold ...">

// Para:
<h2 className="text-4xl font-bold ...">
```

#### Peso da fonte (bold, normal, light)
| Classe | Peso |
|--------|------|
| `font-light` | Fino |
| `font-normal` | Normal |
| `font-semibold` | Semi-bold |
| `font-bold` | Bold |
| `font-extrabold` | Extra bold |

---

### 3️⃣ ESPAÇAMENTO (Padding e Margin)

| Classe | Valor |
|--------|-------|
| `p-2` | Pequeno |
| `p-4` | Médio |
| `p-6` | Grande |
| `p-8` | Muito grande |
| `m-4` | Margem média |
| `gap-4` | Espaço entre elementos |

**Exemplo:** Aumentar espaço dos cards
```jsx
// De:
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// Para:
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
```

---

### 4️⃣ LAYOUT E RESPONSIVIDADE

#### Quantos cards por linha?
**Procure por:** `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

```jsx
// 1 card em celular, 2 em tablet, 3 em desktop
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 1 card em celular, 2 em tablet, 4 em desktop
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// Sempre 2 cards
<section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
```

#### Largura da página
**Procure por:** `container mx-auto`

```jsx
// Adicione max-width:
<main className="container mx-auto max-w-7xl p-4 pt-8">
```

---

### 5️⃣ SOMBRAS E BORDAS

| Classe | Efeito |
|--------|--------|
| `shadow-sm` | Sombra pequena |
| `shadow-md` | Sombra média |
| `shadow-lg` | Sombra grande |
| `shadow-xl` | Sombra muito grande |
| `rounded-lg` | Borda arredondada |
| `rounded-full` | Circulado |
| `border` | Borda 1px |
| `border-2` | Borda 2px |

**Exemplo:** Cards com mais sombra
```jsx
// De:
className="shadow-xl"

// Para:
className="shadow-2xl hover:shadow-3xl"
```

---

## 🎯 EXEMPLOS PRÁTICOS

### Exemplo 1: Tema Rosa e Roxo
**Arquivo:** `src/App.jsx`

```jsx
// Header
<header className="sticky top-0 z-10 bg-gradient-to-r from-pink-500 to-purple-600 dark:bg-purple-900 shadow-lg">

// Botões
className="bg-pink-600 hover:bg-pink-700 text-white"

// Cards: no perfilcard.jsx
className="bg-pink-50 dark:bg-gray-800 rounded-lg shadow-lg"
```

---

### Exemplo 2: Tema Verde e Azul Escuro
**Arquivo:** `src/App.jsx`

```jsx
// Header
<header className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 to-blue-900 dark:bg-slate-950 shadow-lg">

// Botões
className="bg-emerald-600 hover:bg-emerald-700 text-white"

// Cards: no perfilcard.jsx
className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
```

---

### Exemplo 3: Tema Moderno (Preto e Ouro)
**Arquivo:** `src/App.jsx`

```jsx
// Header
<header className="sticky top-0 z-10 bg-black dark:bg-gray-950 shadow-xl">

// Botões
className="bg-amber-500 hover:bg-amber-600 text-black font-bold"

// Cards: no perfilcard.jsx
className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl border-l-4 border-amber-500"
```

---

## 📝 ARQUIVO: `src/App.css`

Você também pode adicionar CSS customizado aqui. **Exemplo:**

```css
/* Customizar header */
header {
  font-family: 'Arial', sans-serif;
  letter-spacing: 2px;
}

/* Customizar cards com hover */
.card-custom {
  transition: transform 0.3s ease;
}

.card-custom:hover {
  transform: translateY(-5px);
}

/* Fonte customizada */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
}

/* Gradiente no background */
main {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
```

---

## 🌐 CORES TAILWIND COMPLETAS

### Azuis
- `blue-50`, `blue-100`, `blue-200`, ..., `blue-900`

### Roxos
- `purple-50`, `purple-100`, ..., `purple-900`

### Vermelhos
- `red-50`, `red-100`, ..., `red-900`

### Verdes
- `green-50`, `green-100`, ..., `green-900`

### Laranja/Amarelo
- `orange-50`, `orange-100`, ..., `orange-900`
- `yellow-50`, `yellow-100`, ..., `yellow-900`

### Cinzas
- `gray-50`, `gray-100`, ..., `gray-900`
- `slate-50`, `slate-100`, ..., `slate-900`

---

## 🚀 QUICK TIPS

1. **Teste localmente:** Faça mudanças e recarregue o navegador (Ctrl+R)
2. **Use DevTools:** F12 → Inspecione elemento → Teste classes Tailwind
3. **Gradientes:** `bg-gradient-to-r from-color-500 to-color-600`
4. **Hover effect:** `hover:bg-color-700 hover:shadow-lg`
5. **Animação:** `transition duration-300`

---

## 📍 ARQUIVOS PRINCIPAIS

| Arquivo | O que mudar |
|---------|-----------|
| `src/App.jsx` | Header, layout geral, cores principais |
| `src/components/perfilcard.jsx` | Estilo dos cards |
| `src/components/perfilmodal.jsx` | Estilo do modal (popup) |
| `src/App.css` | CSS customizado adicional |
| `src/index.css` | Fontes globais |

---

## 💡 PRÓXIMOS PASSOS

1. Escolha um tema que goste (exemplos acima)
2. Me mostre qual mudança quer fazer
3. Eu aplico para você ou você copia os snippets e aplica localmente

**Quer que eu aplique um tema específico? É só dizer qual!** 🎨
