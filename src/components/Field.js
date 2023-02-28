import React from 'react'
import {View, StyleSheet} from 'react-native'
import params from '../Params'

export default props =>{
  const styleField = [style.field]
  //Outros estilos aqui
  if (styleField.length ===1) styleField.push(style.regular)

  return(
    <View style = {styleField}></View>
  )
}

const style = StyleSheet.create({
  field:{
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular:{
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    bordrerRightColor: '#333',
    borderBottomColor: '#333',
  }
})