import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Login page</Text>

      <TextInput placeholder="mob no" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <Button title="login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Welcome Home!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  titleTxt: {
    fontSize: 50,
  },

  input: {
    fontSize: "40",
  },
});
