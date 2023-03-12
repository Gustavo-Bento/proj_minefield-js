import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/Params';
import Field from './src/components/Field'
import Flag from './src/components/Flag'

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>Iniciando o Mines!!!</Text>
        <Text style={style.welcome}>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
