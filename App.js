import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Params from './src/Params';
import MineField from './src/components/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag
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
      won: false,
      lost: false
      
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('💣 Booom:', '🪦 Você morreu!')
    }
    if(won){
      Alert.alert('🏆 Parabéns','😎 você ganhou!')
    }
    this.setState({board, lost,won})
  }

  onSelectField = (row,column)=>{
    const board = cloneBoard(this.state.board)
    invertFlag(board,row,column)
    const won = wonGame(board)

    if(won) {
      Alert.alert('🏆 Parabéns','😎 você ganhou!')
    }
    this.setState({board, won})
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
          <MineField board={this.state.board} 
          onOpenField = {this.onOpenField}
          onSelectField = {this.onSelectField}/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {}
});
