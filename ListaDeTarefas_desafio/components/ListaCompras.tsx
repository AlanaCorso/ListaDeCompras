import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemCompra from './ItemCompra';
import type { ItemDeCompra } from '../types';
import { cores, raios } from '../theme';

type ListaComprasProps = {
  itens: ItemDeCompra[];
  aoRemover: (id: string) => void;
};

export default function ListaCompras({ itens, aoRemover }: ListaComprasProps) {
  return (
    <FlatList
      style={estilos.lista}
      data={itens}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemCompra item={item} aoRemover={aoRemover} />}
      ListEmptyComponent={
        <View style={estilos.vazio}>
          <Text style={estilos.vazioEmoji}>🥬</Text>
          <Text style={estilos.vazioTexto}>Sua lista está vazia</Text>
          <Text style={estilos.vazioSubtitulo}>Adicione um produto no campo acima</Text>
        </View>
      }
      ListHeaderComponent={<Text style={estilos.rotulo}>Para comprar</Text>}
      ListFooterComponent={<View style={estilos.espacador} />}
      contentContainerStyle={estilos.conteudo}
      keyboardShouldPersistTaps="handled"
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    flex: 1,
  },
  conteudo: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  rotulo: {
    fontSize: 12,
    fontWeight: '700',
    color: cores.textoSuave,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 22,
    marginBottom: 10,
  },
  espacador: {
    height: 20,
  },
  vazio: {
    alignItems: 'center',
    paddingVertical: 36,
    marginTop: 4,
    borderRadius: raios.medio,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: cores.borda,
  },
  vazioEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  vazioTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.texto,
  },
  vazioSubtitulo: {
    fontSize: 13,
    color: cores.textoSuave,
    marginTop: 4,
    textAlign: 'center',
  },
});
