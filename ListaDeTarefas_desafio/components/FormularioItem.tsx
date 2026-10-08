import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { cores, raios, sombra } from '../theme';

type FormularioItemProps = {
  aoAdicionar: (nome: string, quantidade: number) => void;
};

export default function FormularioItem({ aoAdicionar }: FormularioItemProps) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function lidarComAdicao(): void {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) {
      Alert.alert('Atenção', 'Digite o nome do produto.');
      return;
    }

    const quantidadeInformada = quantidade.trim();
    const qtd = quantidadeInformada === '' ? 1 : Number(quantidadeInformada);
    if (!Number.isInteger(qtd) || qtd < 1) {
      Alert.alert('Atenção', 'Digite uma quantidade inteira maior que zero.');
      return;
    }

    aoAdicionar(nomeLimpo, qtd);
    setNome('');
    setQuantidade('');
  }

  return (
    <View style={estilos.cartao}>
      <Text style={estilos.rotulo}>Novo produto</Text>
      <View style={estilos.linha}>
        <TextInput
          style={[estilos.campo, estilos.campoNome]}
          placeholder="Ex.: Arroz, feijão, leite..."
          placeholderTextColor={cores.textoPlaceholder}
          value={nome}
          onChangeText={setNome}
          accessibilityLabel="Nome do produto"
          returnKeyType="next"
        />
        <TextInput
          style={[estilos.campo, estilos.campoQuantidade]}
          placeholder="Qtd"
          placeholderTextColor={cores.textoPlaceholder}
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          maxLength={3}
          textAlign="center"
          accessibilityLabel="Quantidade (padrão: 1)"
        />
      </View>
      <TouchableOpacity
        style={estilos.botao}
        onPress={lidarComAdicao}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel="Adicionar item à lista"
      >
        <Text style={estilos.botaoTexto}>+  Adicionar à lista</Text>
      </TouchableOpacity>
      <Text style={estilos.dica}>Deixe a quantidade vazia para usar 1.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: cores.superficie,
    marginHorizontal: 20,
    marginTop: -26,
    padding: 16,
    borderRadius: raios.medio,
    borderWidth: 1,
    borderColor: cores.borda,
    ...sombra,
  },
  rotulo: {
    fontSize: 12,
    fontWeight: '700',
    color: cores.primaria,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  linha: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  campo: {
    backgroundColor: cores.fundo,
    borderRadius: raios.pequeno,
    borderWidth: 1,
    borderColor: cores.borda,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: cores.texto,
  },
  campoNome: {
    flex: 1,
  },
  campoQuantidade: {
    width: 64,
    paddingHorizontal: 6,
  },
  botao: {
    backgroundColor: cores.primaria,
    borderRadius: raios.pilula,
    paddingVertical: 13,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  dica: {
    marginTop: 8,
    fontSize: 12,
    color: cores.textoSuave,
    textAlign: 'center',
  },
});
