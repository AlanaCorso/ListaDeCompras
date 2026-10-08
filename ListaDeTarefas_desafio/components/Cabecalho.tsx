import { StyleSheet, Text, View } from 'react-native';
import { cores, raios } from '../theme';

export default function Cabecalho() {
  return (
    <View style={estilos.container}>
      <View style={estilos.selo}>
        <Text style={estilos.emoji} accessibilityLabel="Cesta de compras">🧺</Text>
      </View>
      <Text style={estilos.titulo}>Minha Lista de Compras</Text>
      <Text style={estilos.subtitulo}>Tudo o que você precisa, em um só lugar</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: cores.primaria,
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 44,
    paddingHorizontal: 20,
    borderBottomLeftRadius: raios.grande,
    borderBottomRightRadius: raios.grande,
  },
  selo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: cores.primariaClara,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  subtitulo: {
    fontSize: 14,
    color: cores.primariaClara,
    marginTop: 4,
    textAlign: 'center',
  },
});
