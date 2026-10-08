import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ItemDeCompra } from '../types';
import { cores, raios } from '../theme';

type ItemCompraProps = {
  item: ItemDeCompra;
  aoRemover: (id: string) => void;
};

export default function ItemCompra({ item, aoRemover }: ItemCompraProps) {
  return (
    <View style={estilos.cartao}>
      <View style={estilos.faixa} />
      <View style={estilos.info}>
        <Text style={estilos.nome} numberOfLines={2}>{item.nome}</Text>
      </View>
      <View style={estilos.selo}>
        <Text style={estilos.seloTexto}>×{item.quantidade}</Text>
      </View>
      <TouchableOpacity
        style={estilos.botaoRemover}
        onPress={() => aoRemover(item.id)}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`Remover ${item.nome} da lista`}
      >
        <Text style={estilos.botaoRemoverTexto}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: raios.medio,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 10,
    paddingVertical: 12,
    paddingRight: 12,
    overflow: 'hidden',
  },
  faixa: {
    width: 5,
    alignSelf: 'stretch',
    backgroundColor: cores.destaque,
    marginRight: 14,
    marginVertical: -12,
  },
  info: {
    flex: 1,
    paddingRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: cores.texto,
  },
  selo: {
    backgroundColor: cores.primariaClara,
    borderRadius: raios.pilula,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 10,
  },
  seloTexto: {
    fontSize: 14,
    fontWeight: '800',
    color: cores.primariaEscura,
  },
  botaoRemover: {
    width: 34,
    height: 34,
    borderRadius: raios.pequeno,
    backgroundColor: cores.perigoClaro,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoRemoverTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.perigo,
  },
});
