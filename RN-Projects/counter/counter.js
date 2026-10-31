import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useState} from 'react'


export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style = {styles.btn}
        onPress = {() => setCount(count+1)}
      >
      <Text style = {styles.text}>
       +
      </Text>
     </TouchableOpacity>

     <TouchableOpacity style = {styles.btn}
      onPress = {() => setCount(count - 1)}
     >
      <Text style = {styles.text}>
        -
      </Text>
     </TouchableOpacity>


     <TouchableOpacity>
      <Text>
        Count : {count}
      </Text>
     </TouchableOpacity>

      <TouchableOpacity style = {styles.btn}
        onPress = {() => setCount(count*2)}
      >
      <Text style = {styles.text}>
        *
      </Text>
     </TouchableOpacity>

      <TouchableOpacity style = {styles.btn}
        onPress = {() => setCount(count/2)}
      >
      <Text style = {styles.text}>
       /
      </Text>
     </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems : 'center',
    padding: 8,
  },
  text : {
    fontSize : 50,
    fontFamily : 'bold',
    alignSelf : 'center',
    color : 'white',
  },
  btn : {
    width : 200,
    padding : 20, 
    borderWidth : 1, 
    borderRadius : 20, 

    backgroundColor : "green"
  },
});
