import { StyleSheet, StatusBar, SafeAreaView, TextInput, Text, Switch, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.text}>My name is: {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{
            false: 'red',
            true: 'green',
          }}
          thumbColor={isDarkMode ? 'blue' : 'red'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});
