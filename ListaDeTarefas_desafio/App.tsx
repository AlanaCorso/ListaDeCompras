import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import FormularioItem from './components/FormularioItem';
import ListaCompras from './components/ListaCompras';
import type { ItemDeCompra } from './types';
import { cores } from './theme';

export default function App() {
  const [itens, setItens] = useState<ItemDeCompra[]>([
    { id: '1', nome: 'Maçã', quantidade: 3 },
    { id: '2', nome: 'Arroz', quantidade: 1 },
    { id: '3', nome: 'Leite', quantidade: 2 },
  ]);

  function adicionarItem(nome: string, quantidade: number): void {
    const novoItem: ItemDeCompra = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      nome,
      quantidade,
    };
    setItens((itensAtuais) => [...itensAtuais, novoItem]);
  }

  function removerItem(id: string): void {
    setItens((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="light" />
      <View style={estilos.conteudo}>
        <Cabecalho />
        <FormularioItem aoAdicionar={adicionarItem} />
        <ListaCompras itens={itens} aoRemover={removerItem} />
      </View>
      <View style={estilos.rodape}>
        <Text style={estilos.rodapeTexto}>
          {itens.length} {itens.length === 1 ? 'item' : 'itens'} na lista
        </Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.primaria,
  },
  conteudo: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  rodape: {
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: cores.primaria,
  },
  rodapeTexto: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
