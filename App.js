import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Params from './src/Params';
import MineField from './src/components/MineField'
import {
  createMinedBoard
} from './src/Functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount =() =>  {
    const cols = Params.getColumnsAmount()
    const rows =  Params.getRowsAmount()
    return Math.ceil(cols * rows * Params.difficultLevel)
  }
  createState = () => {
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()
    return {
      board: createMinedBoard(rows,cols, this.minesAmount()),
      
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>Iniciando o Mines!!!</Text>
        <Text style={style.welcome}>
          Tamanho da grade:
          {Params.getRowsAmount()}x{Params.getColumnsAmount()}
        </Text>
        <View style={style.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {}
});
