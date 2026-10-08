# 🧺 Lista de Compras

Aplicativo de lista de compras feito com **Expo**, **React Native** e **TypeScript** (desafio *ListaDeTarefas_desafio*). Visual em tons de verde sobre fundo creme, com tema centralizado em um único arquivo.

## Funcionalidades

- Exibe produtos iniciais: Maçã, Arroz e Leite.
- Adiciona produtos com nome e quantidade.
- Usa quantidade `1` quando o campo de quantidade fica vazio.
- Valida o nome e a quantidade (inteiro maior que zero) antes de adicionar.
- Remove produtos e mostra uma mensagem amigável quando a lista fica vazia.
- Atualiza a contagem de itens no rodapé.

## Visual

- Cabeçalho verde com cantos arredondados e o formulário sobreposto em formato de cartão.
- Itens com faixa de destaque âmbar, selo de quantidade (`×3`) e botão de remover discreto.
- Botão principal próprio (pílula verde) no lugar do `Button` padrão, para ficar igual em Android, iOS e web.
- Estado vazio com borda tracejada e rodapé verde com o total de itens.

### Como mudar as cores

Todas as cores, raios e sombras ficam em [`theme.ts`](./theme.ts). Para trocar a identidade visual, basta editar o objeto `cores`:

```ts
export const cores = {
  primaria: '#15803D',      // cabeçalho, botão e rodapé
  primariaClara: '#DCFCE7', // selos e textos de apoio
  destaque: '#F59E0B',      // faixa lateral dos itens
  fundo: '#FAF7F0',         // fundo das telas
  // ...
};
```

Se mudar a cor primária, atualize também `backgroundColor` em `app.json` para manter o ícone adaptativo do Android combinando.

## Requisitos

- Node.js e npm instalados.
- Para testar no celular: app **Expo Go** instalado (Android ou iOS).

## Como executar

1. Abra um terminal dentro da pasta do projeto (`ListaDeTarefas_desafio`).
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Confira os tipos TypeScript:

   ```bash
   npm run typecheck
   ```

4. Inicie o Expo:

   ```bash
   npm start
   ```

No terminal do Expo, pressione `w` para abrir a versão web ou escaneie o QR Code com o Expo Go. Também é possível usar:

| Comando           | O que faz                       |
| ----------------- | ------------------------------- |
| `npm run web`     | Abre direto no navegador        |
| `npm run android` | Abre no emulador/dispositivo Android |
| `npm run ios`     | Abre no simulador iOS (macOS)   |

## Estrutura

```text
ListaDeTarefas_desafio/
├── App.tsx                   # Estado da lista e composição da tela
├── index.tsx                 # Ponto de entrada (registerRootComponent)
├── theme.ts                  # Cores, raios e sombras do app
├── types.ts                  # Tipo ItemDeCompra
├── app.json                  # Configuração do Expo
├── package.json
└── components/
    ├── Cabecalho.tsx         # Banner com título e subtítulo
    ├── FormularioItem.tsx    # Campos de nome/quantidade e botão de adicionar
    ├── ItemCompra.tsx        # Cartão de um produto
    └── ListaCompras.tsx      # FlatList com estado vazio
```

A pasta `node_modules` não acompanha o ZIP; ela é criada localmente pelo `npm install`.

## Tecnologias

Expo SDK 57 · React Native 0.86 · React 19 · TypeScript

## Licença

Distribuído sob a licença descrita no arquivo [`LICENSE`](./LICENSE).
