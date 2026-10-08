// Tema central do app: altere as cores aqui para mudar o visual inteiro.
export const cores = {
  primaria: '#15803D',
  primariaEscura: '#14532D',
  primariaClara: '#DCFCE7',
  destaque: '#F59E0B',
  fundo: '#FAF7F0',
  superficie: '#FFFFFF',
  borda: '#E7E1D3',
  texto: '#1B2B22',
  textoSuave: '#5F6B63',
  textoPlaceholder: '#A3ABA5',
  perigo: '#B91C1C',
  perigoClaro: '#FEE2E2',
};

export const raios = {
  pequeno: 10,
  medio: 16,
  grande: 28,
  pilula: 999,
};

export const sombra = {
  shadowColor: '#14532D',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
} as const;
