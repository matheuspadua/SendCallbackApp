import React from 'react';
import {View, Button, Linking, Alert, StyleSheet} from 'react-native';

const App = () => {
  const sendCallback = () => {
    const callbackURL = 'sofisadireto://retorno?param1=valor1';
    Linking.openURL(callbackURL)
      .then(() => Alert.alert('Callback enviado com sucesso!'))
      .catch(err => Alert.alert('Erro ao enviar o callback:', err.message));
  };

  return (
    <View style={styles.container}>
      <Button title="Enviar Callback" onPress={sendCallback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
