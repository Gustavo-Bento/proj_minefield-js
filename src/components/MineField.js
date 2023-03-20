import React from 'react'
import {View, StyleSheet} from 'react-native'
import Field from './Field'

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />
    })
    return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
  })
  return <View style={style.container}>{rows}</View>
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#EEE',
  }
})