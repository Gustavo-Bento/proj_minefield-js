import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import params from './src/Params';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>Iniciando o Mines!!!</Text>
        <Text style={style.welcome}>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
