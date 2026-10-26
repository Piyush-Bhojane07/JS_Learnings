import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="pass"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isShow}
      />

      <Button
        title={isShow ? "hide" : "show"}
        onPress={() => setIsShow(!isShow)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    padding: 15,
    // height : ,
    borderWidth: 1,
    borderRadius: 15,
  },
});
