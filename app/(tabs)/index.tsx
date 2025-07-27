import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TITULO</Text>
      <TextInput
        style={styles.caja}
        value={peso}
        onChangeText={(valorPeso) => {
          setPeso(valorPeso);
        }}
        placeholder='Ingrese su Peso (kg)'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.caja}
        value={estatura}
        onChangeText={(valorEstatura) => {
          setEstatura(valorEstatura)
        }}
        placeholder='Ingrese su Estatura'
        keyboardType='numeric'
      />
      <View style={styles.contenedorBoton}>
        <Button
          title='CALCULAR'
          onPress={() => {
            let pesoFloat = parseFloat(peso);     // Usa parseFloat para precisión decimal
            let estaturaFloat = parseFloat(estatura);

            if (isNaN(pesoFloat) || isNaN(estaturaFloat)) {
              setResultado("Por favor ingrese valores válidos");
              return;
            }

            const imc = pesoFloat / (estaturaFloat * estaturaFloat);
            const imcRedondeado = imc.toFixed(2); // Redondear a 2 decimales

            setResultado('su IMC es: ' + imcRedondeado);

            if (imc < 18.5) {
              setMensaje('tiene un peso menor al normal');
            } else if (imc > 18.5 && imc < 25.0) {
              setMensaje('su peso es normal');
            }
            else if (imc > 25.0 && imc < 30.0) {
              setMensaje('su peso es superior al normal');
            } else {
              setMensaje('tiene obesidad')
            }
          }}
        />
      </View>
      <Text>{resultado}, {mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  caja: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 2,
    paddingHorizontal: 5,
    marginTop: 3,
  },
  titulo: {
    fontSize: 16,
    marginBottom: 5,
  },
  contenedorBoton: {
    alignItems: 'center',
    margin: 10,
  },
});
