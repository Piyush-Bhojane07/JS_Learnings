
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity, } from 'react-native';

import {useState} from 'react'

export default function App() {

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count+1)
  }

  const handleDec = () => {
    setCount(count-1)
  }
return(
  <View style = {styles.container}>
  <View style = {{flexDirection : 'row', margin : 10, }}>

  <TouchableOpacity 
  style = {styles.boxTwo}>
  onPress = {() => handleInc()}
  >
  <Text style = {styles.text}>+</Text>
  </TouchableOpacity>

  
<Text style = {styles.titleTxt}>{count}</Text>


  <TouchableOpacity 
  style = {styles.boxOne}>
   onPress = {() => handleInc()}
  >
  <Text style = {styles.text}>-</Text>
  </TouchableOpacity>
  


  
 </View>


  </View>
)
}

const styles = StyleSheet.create({
  container : {
    padding : '5%',
    alignItems : 'center',
    flex : 1,
    justifyContent : 'center'
  }, 
  titleTxt  : {
    fontSize : 50, 
  },

  boxOne : {
    width : 50, height : 50, 
    backgroundColor : 'red', padding : 20, 
  },

  boxTwo : {
    width : 50, height : 50, 
    backgroundColor : 'green', padding : 20, 
  },

  text : {
    fontSize : '40',
      color : 'white'
  },
})