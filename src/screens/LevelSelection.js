import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native'

export default props => {
  return(
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} animationType='slide'
      transparent={true}>
        <View style={style.container}>
          <View style={style.frame}>
            <Text style={style.title}>Selecione o Nível</Text>
            <TouchableOpacity
              style={[style.button, style.bgEasy]}
              onPress={()=>props.onLevelSelected(0.1)}
            >
              <Text style={style.buttonLabel}>Facil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.button, style.bgNormal]}
              onPress={()=>props.onLevelSelected(0.2)}
            >
              <Text style={style.buttonLabel}>Intermediário</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.button, style.bgHard]}
              onPress={()=>props.onLevelSelected(0.3)}
            >
              <Text style={style.buttonLabel}>Difícil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

const style = StyleSheet.create({
  frame:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  container:{
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5.
  },
  buttonLabel:{
    fontSize: 20,
    backgroundColor: '#EEE',
    fontWieght: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d'
  },
  bgNormal: {
    backgroundColor: '#2765F7'
  },
  bgHard: {
    backgroundColor: '#F26337'
  }
})