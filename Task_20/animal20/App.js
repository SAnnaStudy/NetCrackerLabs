import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListOfAnimals } from './src/list';
import {themes} from "./Theme"
import {MyContext} from "./Theme"

export default function App() {
  const [condition, setCondition] = useState(false);
  const [theme, setTheme] = useState(themes.light);
  return (
    <View style={styles.container}>
      <MyContext.Provider value={theme}>
      <View style={styles.textBlock}>
      <Text style={styles.text}>Список животных</Text>
      </View>
      <StatusBar style="auto" /> 
      <ListOfAnimals condition={condition}></ListOfAnimals>
      <TouchableOpacity style={styles.button1} onPress={() => setCondition(prevCondition => !prevCondition)}><Text style={styles.buttonText}>{condition ? "Спрятать котиков" : "Показать котиков"}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setTheme(theme === themes.light ? themes.dark : themes.light)}><Text style={styles.buttonText}>Поменять тему</Text></TouchableOpacity>
      </MyContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  textBlock: {
    width: '100%',
    height: '12%',
    backgroundColor: 'rgb(157, 132, 255)',
    justifyContent: 'center'
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
  },
  button1: {
    marginTop: '10%',
    backgroundColor: 'rgb(250, 165, 215)',
    width: '80%',
    height: 70,
    justifyContent: 'center'
  },
  button2: {
    marginTop: 5,
    backgroundColor: 'rgb(250, 165, 215)',
    width: '80%',
    height: 70,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  }
});
