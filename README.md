<div align="center">

# 🧺 Lista de Compras

**Porque ninguém merece voltar do mercado sem o leite.**

<img src="https://img.shields.io/badge/Expo-57-15803D?style=for-the-badge&logo=expo&logoColor=white" alt="Expo 57" />
<img src="https://img.shields.io/badge/React_Native-0.86-14532D?style=for-the-badge&logo=react&logoColor=white" alt="React Native 0.86" />
<img src="https://img.shields.io/badge/TypeScript-6-F59E0B?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 6" />

<sub>Feito por mim, com carinho, café e muito `npm install` ☕</sub>

</div>

---

## 🌱 Sobre o projeto

Este é o meu app de lista de compras do desafio **ListaDeTarefas_desafio**. Eu queria algo simples de usar e agradável de olhar: abrir, anotar o que falta e riscar da lista. Sem cadastro, sem complicação.

Construí com **Expo**, **React Native** e **TypeScript**, e deixei o visual todo em tons de verde sobre um fundo creme, com as cores centralizadas em um único arquivo para eu (ou você) mudar quando bater a vontade.

## ✨ O que ele faz

| | |
|---|---|
| 🍎 **Começa com itens de exemplo** | Maçã, Arroz e Leite já vêm na lista |
| ➕ **Adiciona produtos** | Nome e quantidade, do jeito que você lembrar |
| 1️⃣ **Quantidade inteligente** | Deixou em branco? Eu considero `1` |
| ✅ **Valida antes de salvar** | Nome obrigatório e quantidade inteira maior que zero |
| 🗑️ **Remove com um toque** | E mostra um aviso simpático quando a lista esvazia |
| 🔢 **Conta pra você** | O rodapé mostra quantos itens ainda faltam |

## 🎨 Visual

- Cabeçalho verde com cantos arredondados e o formulário "flutuando" por cima, em formato de cartão.
- Itens com faixa âmbar na lateral, selo de quantidade (`×3`) e botão de remover discreto.
- Botão principal em pílula verde, feito do zero, para ficar igual no Android, iOS e web.
- Estado vazio com borda tracejada e rodapé verde com o total.

### 🖌️ Quer outra cara? É só mexer no tema

Todas as cores, raios e sombras ficam em [`theme.ts`](./theme.ts):

```ts
export const cores = {
  primaria: '#15803D',      // cabeçalho, botão e rodapé
  primariaClara: '#DCFCE7', // selos e textos de apoio
  destaque: '#F59E0B',      // faixa lateral dos itens
  fundo: '#FAF7F0',         // fundo das telas
  // ...
};
```

> 💡 Se trocar a cor primária, atualize também o `backgroundColor` do ícone adaptativo em `app.json` para o Android acompanhar.

## 🚀 Como rodar

**Você vai precisar de:**

- [Node.js](https://nodejs.org) e npm instalados
- (opcional) app **Expo Go** no celular, Android ou iOS

**Passo a passo:**

```bash
# 1. entre na pasta do projeto
cd ListaDeTarefas_desafio

# 2. instale as dependências
npm install

# 3. confira os tipos
npm run typecheck

# 4. inicie o app
npm start
```

Com o Expo rodando, aperte `w` para abrir no navegador ou escaneie o QR Code com o Expo Go. 📱

| Comando           | O que faz                            |
| ----------------- | ------------------------------------ |
| `npm start`       | Inicia o servidor do Expo            |
| `npm run web`     | Abre direto no navegador             |
| `npm run android` | Abre no emulador/dispositivo Android |
| `npm run ios`     | Abre no simulador iOS (macOS)        |
| `npm run typecheck` | Confere os tipos do TypeScript     |

## 🗂️ Como está organizado

```text
ListaDeTarefas_desafio/
├── App.tsx                   # Estado da lista e montagem da tela
├── index.tsx                 # Ponto de entrada
├── theme.ts                  # 🎨 Cores, raios e sombras
├── types.ts                  # Tipo ItemDeCompra
├── app.json                  # Configuração do Expo
└── components/
    ├── Cabecalho.tsx         # Banner com título e subtítulo
    ├── FormularioItem.tsx    # Campos e botão de adicionar
    ├── ItemCompra.tsx        # Cartão de cada produto
    └── ListaCompras.tsx      # FlatList + estado vazio
```

> A pasta `node_modules` não vai junto no ZIP, ela nasce localmente com o `npm install`.

## 🛠️ Tecnologias

![Expo](https://img.shields.io/badge/-Expo-000020?style=flat-square&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/-React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

## 🔮 Ideias para o futuro

- [ ] Marcar item como comprado
- [ ] Salvar a lista no aparelho
- [ ] Editar nome e quantidade
- [ ] Modo escuro


<div align="center">
<sub>Feito com 💚 por Alana Corso</sub>
</div>
